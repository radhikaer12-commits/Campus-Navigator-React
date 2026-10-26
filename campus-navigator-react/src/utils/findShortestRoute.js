// Some roads that visually meet have centerline endpoints slightly over
// one stroke width apart. Keep a small tolerance for those map joints; the
// actual gap still adds route cost below.
const CONNECTION_TOLERANCE = 10;

function getLocationCenter(svg, locationId) {
    const elements = [...svg.querySelectorAll(".location")]
        .filter(candidate => candidate.id === locationId);
    if (!elements.length) return null;

    const routeAccess = elements.find(element =>
        element.hasAttribute("data-route-x") && element.hasAttribute("data-route-y")
    );
    if (routeAccess) {
        return {
            x: Number(routeAccess.getAttribute("data-route-x")),
            y: Number(routeAccess.getAttribute("data-route-y"))
        };
    }

    const bounds = elements.map(element => element.getBBox());
    const left = Math.min(...bounds.map(box => box.x));
    const top = Math.min(...bounds.map(box => box.y));
    const right = Math.max(...bounds.map(box => box.x + box.width));
    const bottom = Math.max(...bounds.map(box => box.y + box.height));
    return { x: (left + right) / 2, y: (top + bottom) / 2 };
}

function hasRouteAccessPoint(svg, locationId) {
    return [...svg.querySelectorAll(".location")].some(element =>
        element.id === locationId && element.hasAttribute("data-route-x") && element.hasAttribute("data-route-y")
    );
}

function project(point, start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const lengthSquared = dx * dx + dy * dy;
    const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1,
        ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared
    ));
    const projected = { x: start.x + t * dx, y: start.y + t * dy };
    return { point: projected, t, distance: Math.hypot(point.x - projected.x, point.y - projected.y) };
}

function collectSegments(svg) {
    return [...svg.querySelectorAll("g.road .road-segment")].map((element, index) => {
        element.dataset.routeSegment = String(index);
        const values = element.getAttribute("d").match(/-?(?:\d*\.\d+|\d+\.?\d*)/g).map(Number);
        return { index, element, start: { x: values[0], y: values[1] }, end: { x: values[2], y: values[3] } };
    });
}

function nearbySegments(point, segments, extraDistance = 8) {
    const candidates = segments.map(segment => ({
        segment,
        projection: project(point, segment.start, segment.end)
    }));
    const nearestDistance = Math.min(...candidates.map(candidate => candidate.projection.distance));
    return candidates.filter(candidate => candidate.projection.distance <= nearestDistance + extraDistance);
}

function dijkstraWithSegments(adjacency, start, end) {
    const distances = new Map([[start, 0]]);
    const previous = new Map();
    const pending = new Set(adjacency.keys());
    while (pending.size) {
        let current = null;
        for (const node of pending) {
            if (current === null || (distances.get(node) ?? Infinity) < (distances.get(current) ?? Infinity)) current = node;
        }
        if (current === null || !Number.isFinite(distances.get(current))) return null;
        if (current === end) break;
        pending.delete(current);
        for (const edge of adjacency.get(current) ?? []) {
            if (!pending.has(edge.to)) continue;
            const candidate = distances.get(current) + edge.weight;
            if (candidate < (distances.get(edge.to) ?? Infinity)) {
                distances.set(edge.to, candidate);
                previous.set(edge.to, {
                    node: current,
                    segmentIndex: edge.segmentIndex,
                    connectors: edge.connectors,
                    segmentPiece: edge.segmentPiece
                });
            }
        }
    }
    if (!distances.has(end)) return null;
    const segmentIds = [];
    const connectors = [];
    const partialSegments = [];
    let cursor = end;
    while (cursor !== start) {
        const step = previous.get(cursor);
        if (!step) return null;
        if (step.segmentIndex !== null) segmentIds.push(step.segmentIndex);
        if (step.segmentPiece) partialSegments.push(step.segmentPiece);
        if (step.connectors) connectors.push(...step.connectors);
        cursor = step.node;
    }
    const uniqueConnectors = [...new Map(connectors.map(connector => [
        `${connector.start.x},${connector.start.y}:${connector.end.x},${connector.end.y}`,
        connector
    ])).values()];
    return {
        segmentIds: [...new Set(segmentIds)],
        partialSegments: partialSegments.reverse(),
        connectors: uniqueConnectors,
        weight: distances.get(end)
    };
}

export function findShortestRoute(svg, currentLocation, selectedLocation) {
    if (!svg || !currentLocation || !selectedLocation) return [];
    let start = getLocationCenter(svg, currentLocation.id);
    let destination = getLocationCenter(svg, selectedLocation.id);
    if (!start || !destination) return [];

    const segments = collectSegments(svg);
    if (!segments.length) return [];

    // Parking areas are large footprints, not points on the pedestrian path.
    // Snapping their geometric centers can draw a misleading connector across
    // the lot or make the route appear to enter from its far side. Use the
    // nearest road projection as the parking access point unless the SVG has
    // an explicit data-route-x/data-route-y entrance.
    const snapParkingToRoad = (location, point) => {
        if (location.category !== "parking" || hasRouteAccessPoint(svg, location.id)) return point;
        return segments.reduce((nearest, segment) => {
            const candidate = project(point, segment.start, segment.end);
            return !nearest || candidate.distance < nearest.distance ? candidate : nearest;
        }, null)?.point ?? point;
    };
    start = snapParkingToRoad(currentLocation, start);
    destination = snapParkingToRoad(selectedLocation, destination);

    const startSnaps = nearbySegments(start, segments);
    const endSnaps = nearbySegments(destination, segments);
    const points = segments.flatMap(segment => [segment.start, segment.end]);

    const adjacency = new Map();
    const addEdge = (from, to, weight, segmentIndex = null, connectors = [], segmentPiece = null) => {
        if (!adjacency.has(from)) adjacency.set(from, []);
        if (!adjacency.has(to)) adjacency.set(to, []);
        adjacency.get(from).push({ to, weight, segmentIndex, connectors, segmentPiece });
    };
    const endpointNode = index => `endpoint-${index}`;
    segments.forEach(segment => {
        const startNode = endpointNode(segment.index * 2);
        const endNode = endpointNode(segment.index * 2 + 1);
        const length = Math.hypot(segment.end.x - segment.start.x, segment.end.y - segment.start.y);
        addEdge(startNode, endNode, length, segment.index, [], { start: segment.start, end: segment.end });
        addEdge(endNode, startNode, length, segment.index, [], { start: segment.end, end: segment.start });
    });

    // Connect nearby endpoints using the actual gap as a small route cost.
    // This keeps hand-drawn joints connected without collapsing nearby roads
    // into the same zero-cost junction.
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (Math.floor(i / 2) === Math.floor(j / 2)) continue;
            const gap = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
            if (gap <= CONNECTION_TOLERANCE) {
                addEdge(endpointNode(i), endpointNode(j), gap);
                addEdge(endpointNode(j), endpointNode(i), gap);
            }
        }
    }

    const virtualStart = "route-start";
    const virtualEnd = "route-end";
    const connectSnap = (virtualNode, snap, locationPoint) => {
        const { segment } = snap;
        const { point, t, distance } = snap.projection;
        const length = Math.hypot(segment.end.x - segment.start.x, segment.end.y - segment.start.y);
        const startNode = endpointNode(segment.index * 2);
        const endNode = endpointNode(segment.index * 2 + 1);
        const startCost = distance + t * length;
        const endCost = distance + (1 - t) * length;
        const connector = [{ start: locationPoint, end: point }];
        addEdge(virtualNode, startNode, startCost, segment.index, connector, { start: point, end: segment.start });
        addEdge(startNode, virtualNode, startCost, segment.index, connector, { start: segment.start, end: point });
        addEdge(virtualNode, endNode, endCost, segment.index, connector, { start: point, end: segment.end });
        addEdge(endNode, virtualNode, endCost, segment.index, connector, { start: segment.end, end: point });
    };
    startSnaps.forEach(snap => connectSnap(virtualStart, snap, start));
    endSnaps.forEach(snap => connectSnap(virtualEnd, snap, destination));
    for (const startSnap of startSnaps) {
        for (const endSnap of endSnaps) {
            if (startSnap.segment.index !== endSnap.segment.index) continue;
            const segmentLength = Math.hypot(
                startSnap.segment.end.x - startSnap.segment.start.x,
                startSnap.segment.end.y - startSnap.segment.start.y
            );
            addEdge(
                virtualStart,
                virtualEnd,
                startSnap.projection.distance + endSnap.projection.distance
                    + Math.abs(startSnap.projection.t - endSnap.projection.t) * segmentLength,
                startSnap.segment.index,
                [
                    { start, end: startSnap.projection.point },
                    { start: destination, end: endSnap.projection.point }
                ],
                { start: startSnap.projection.point, end: endSnap.projection.point }
            );
        }
    }
    const result = dijkstraWithSegments(adjacency, virtualStart, virtualEnd);
    if (!result) return [];

    result.segmentIds.connectors = result.connectors;
    result.segmentIds.partialSegments = result.partialSegments;
    result.segmentIds.weight = result.weight / 10;
    return result.segmentIds;
}
