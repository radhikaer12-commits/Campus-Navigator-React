import { useEffect, useRef, useState } from "react";

import { locations } from "../data/locations";
import Filters from "./Filters";
import MapThemePalette from "./MapThemePalette";


function Map({
    selectedLocation,
    selectedCategory,
    onLocationSelect,
    setMenuOpen,
    route=[]
}) {

    const mapRef = useRef(null);
    const [tooltip, setTooltip] = useState({});


    /*
     * Handle clicking a building
     */
    function handleMapClick(event) {

        const building =
            event.target.closest(".location");


        if (!building) {
            return;
        }
        if (document.querySelector(".navigationUI").classList.contains("active")) {
            alert("Map Access Disabled during Navigation. Exit navigation mode to access the map.");
            return;
        };


        const location =
            locations.find(
                loc => loc.id === building.id
            );


        if (!location) {
            return;
        }
        const box = building.getBoundingClientRect();
        const mapBox = mapRef.current.getBoundingClientRect();
        setTooltip({
            name: location.name,
            x: box.left -
                mapBox.left +
                box.width / 2,
            y: box.top -
                mapBox.top
        });


        onLocationSelect(location);
        setMenuOpen(false);
    }



    /*
     * Load SVG map
     */
    useEffect(() => {

        async function loadMap() {

            try {

                const response =
                    await fetch("/campusMap.svg");


                const svg =
                    await response.text();


                mapRef.current.innerHTML = svg;


                const svgElement =
                    mapRef.current.querySelector("svg");


                if (!svgElement) {
                    return;
                }


                svgElement.addEventListener(
                    "click",
                    handleMapClick
                );

            } catch (error) {

                console.error(
                    "Failed to load campus map:",
                    error
                );
            }
        }


        loadMap();


        return () => {

            const svgElement =
                mapRef.current?.querySelector("svg");


            if (svgElement) {

                svgElement.removeEventListener(
                    "click",
                    handleMapClick
                );
            }
        };

    }, []);



    /*
     * Highlight selected building
     */
    useEffect(() => {

        if (!mapRef.current) {
            return;
        }


        const buildings =
            mapRef.current.querySelectorAll(
                ".location"
            );


        buildings.forEach(building => {

            building.classList.remove(
                "selected-building"
            );


            building.style.removeProperty(
                "--selected-fill"
            );


            building.style.removeProperty(
                "--selected-stroke"
            );
        });


        if (!selectedLocation) {
            return;
        }


        const selectedBuilding =
            mapRef.current.querySelector(
                `#${selectedLocation.id}`
            );


        if (!selectedBuilding) {
            return;
        }


        selectedBuilding.classList.add(
            "selected-building"
        );


        selectedBuilding.style.setProperty(
            "--selected-fill",
            `var(--${selectedLocation.category})`
        );


        selectedBuilding.style.setProperty(
            "--selected-stroke",
            `var(--${selectedLocation.category}_stroke)`
        );

    }, [selectedLocation]);

    useEffect(() => {
        if (!mapRef.current) return;

        const svg = mapRef.current.querySelector("svg");
        if (!svg) return;

        // Draw a fresh route overlay above every road. Coloring the original
        // segments in place let later SVG roads paint over them at crossings.
        mapRef.current.querySelectorAll(".road.route-highlight, .road-segment.route-highlight")
            .forEach(road => road.classList.remove("route-highlight"));
        mapRef.current.querySelector("#navigation-route-overlay")?.remove();
        const overlay = document.createElementNS("http://www.w3.org/2000/svg", "g");
        overlay.id = "navigation-route-overlay";

        const drawRouteSegment = d => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
            line.setAttribute("class", "road route-highlight");
            line.setAttribute("d", d);
            line.setAttribute("fill", "none");
            overlay.appendChild(line);
        };

        if (route.partialSegments?.length) {
            route.partialSegments.forEach(({ start, end }) => {
                drawRouteSegment(`M${start.x} ${start.y}L${end.x} ${end.y}`);
            });
        } else {
            route.forEach(roadId => {
                const road = mapRef.current.querySelector(`.road-segment[data-route-segment="${roadId}"]`);
                if (road) drawRouteSegment(road.getAttribute("d"));
            });
        }

        route.connectors?.forEach(({ start, end }) => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
            line.setAttribute("class", "road route-highlight");
            line.setAttribute("d", `M${start.x} ${start.y}L${end.x} ${end.y}`);
            line.setAttribute("fill", "none");
            overlay.appendChild(line);
        });

        if (overlay.childNodes.length) svg.appendChild(overlay);
    }, [route]);

    /*
     * Category filtering
     */
    useEffect(() => {

        if (!mapRef.current) {
            return;
        }


        const buildings =
            mapRef.current.querySelectorAll(
                ".location"
            );


        buildings.forEach(building => {

            const location =
                locations.find(
                    loc => loc.id === building.id
                );


            if (!location) {
                return;
            }


            building.classList.remove(
                "highlight"
            );


            building.style.removeProperty(
                "--highlight-fill"
            );


            building.style.removeProperty(
                "--highlight-stroke"
            );


            if (
                selectedCategory === "all" ||
                location.category === selectedCategory
            ) {

                building.classList.add(
                    "highlight"
                );


                building.style.setProperty(
                    "--highlight-fill",
                    `var(--${location.category})`
                );


                building.style.setProperty(
                    "--highlight-stroke",
                    `var(--${location.category}_stroke)`
                );
            }
        });

    }, [selectedCategory]);




    return (
        <section className="map-section">
            <div
                id="map-container"
                ref={mapRef}
            />
            
        </section>
    );
}


export default Map;