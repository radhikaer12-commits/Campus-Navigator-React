// export function dijkstra(graph, start, end) {

//     const distances = {};
//     const previous = {};
//     const unvisited = new Set(Object.keys(graph));

//     // 1. Initialize
//     for (const node of unvisited) {
//         distances[node] = Infinity;
//         previous[node] = null;
//     }

//     // Starting point has distance 0
//     distances[start] = 0;


//     // 2. Keep processing nodes
//     while (unvisited.size > 0) {

//         // Find closest unvisited node
//         let current = null;

//         for (const node of unvisited) {

//             if (
//                 current === null ||
//                 distances[node] < distances[current]
//             ) {
//                 current = node;
//             }
//         }


//         // No path exists
//         if (
//             current === null ||
//             distances[current] === Infinity
//         ) {
//             return [];
//         }


//         // Destination reached
//         if (current === end) {
//             break;
//         }


//         // Mark current as visited
//         unvisited.delete(current);


//         // 3. Check all neighbours
//         for (const [neighbor, weight] of Object.entries(
//             graph[current]
//         )) {

//             const newDistance =
//                 distances[current] + weight;


//             // Found a shorter path
//             if (newDistance < distances[neighbor]) {

//                 distances[neighbor] = newDistance;

//                 previous[neighbor] = current;
//             }
//         }
//     }


//     // 4. Build the path backwards
//     const path = [];

//     let current = end;

//     while (current !== null) {

//         path.unshift(current);

//         current = previous[current];
//     }


//     // No valid path
//     if (path[0] !== start) {
//         return [];
//     }


//     // Return only roads
//     return path;
// }