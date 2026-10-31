import { useEffect, useState } from "react";

import Header from "./Header";
import Map from "./Map";
import InfoPanel from "./InfoPanel";
import Modal from "./ui/Modal";
import CampusLegend from "./CampusLegend";
import Tutorial from "./Tutorial";
import RecentLocations from "./RecentLocations";
import NavigationUI from "./NavigationUI";
import About from './About';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import HowToUse from "./HowToUse";
import Toast from "./ui/Toast";
import LeftPanel from "./LeftPanel";
import { saveNotification } from "../utils/getNotifications";
import { findShortestRoute } from "../utils/findShortestRoute";

function CampusNavigator() {
    // const [menuOpen, setMenuOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState(() => {
        try {
            const recent = JSON.parse(
                localStorage.getItem("recentLocations")
            ) || [];

            return recent.length > 0 ? recent[0] : null;
        } catch {
            return null;
        }
    });

    const [search, setSearch] = useState("");
    const [isSearchBar, setSearchBar] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const [tutorialActive, setTutorialActive] = useState(false);

    const [isInfoOpen, setIsInfoOpen] = useState(
        window.innerWidth >= 1024
    );
    const [filtersOpen, setFiltersOpen] = useState(false);

    useEffect(() => {
        const closeInfoPanelOnOutsideClick = event => {
            const target = event.target;
            if (target.closest?.("#info-panel") || target.closest?.(".location")) return;
            setIsInfoOpen(false);
        };

        document.addEventListener("pointerdown", closeInfoPanelOnOutsideClick);
        return () => document.removeEventListener("pointerdown", closeInfoPanelOnOutsideClick);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalName, setModalName] = useState("");
    const onRecent = () => {
        setModalName("recent");
        setModalOpen(true);
    };

    const onLegend = () => {
        setModalName("legend");
        setModalOpen(true);
    };

    const onAbout = () => {
        setModalName("about");
        setModalOpen(true);
    };
    const onHowToUse = () => {
        setModalName("howtouse");
        setModalOpen(true);
    }

    const [toastActive, setToastActive] = useState(false);
    const [toastContent, setToastContent] = useState("map-theme");

    useEffect(() => {
        if (!toastActive) return;

        let message = "";

        switch (toastContent) {
            case "currentlocation":
                message = currentLocation
                    ? `${currentLocation.name} has been set as your current location!`
                    : "Your current location has been updated.";
                break;

            case "tutorial-end":
                message = "You are all set to use Campus Navigator!";
                break;

            case "food-search":
                message = "You are now searching Food.";
                break;

            case "food-search-exit":
                message = "Exited food search.";
                break;

            default:
                if (toastContent === mapTheme) {
                    message = `Map theme changed to ${mapTheme}.`;
                } else if (typeof toastContent === "string") {
                    message = toastContent;
                }
        }

        if (message) {
            saveNotification(message);
        }
    }, [toastActive, toastContent]);


    const [mapTheme, setMapTheme] = useState(() => {
        try {
            const saved = JSON.parse(
                localStorage.getItem("map-theme")
            );

            return saved?.theme || "campus";
        } catch {
            return "campus";
        }
    });


    const [recentLocations, setRecentLocations] = useState(() => {
        return JSON.parse(
            localStorage.getItem("recentLocations")
        ) || [];
    });
    const [currentLocation, setCurrentLocation] = useState(() => {
        try {
            return JSON.parse(
                localStorage.getItem("currentLocation")
            );
        } catch {
            return null;
        }
    });
    const [route, setRoute] = useState([]);
    const [walkTime, setWalkTime] = useState(0);

    useEffect(() => {
        setRoute([]);
    }, [currentLocation, selectedLocation]);

    useEffect(() => {
        if (!toastActive) return;

        const timeout = setTimeout(() => {
            setToastActive(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [toastActive, toastContent]);

    const handleNavigationUI = () => {
        if (!currentLocation) {
            alert("Please set your Current Location.");
            return;
        }
        if (!selectedLocation) {
            alert("Please select a destination.");
            return;
        }
        if (currentLocation.id === selectedLocation.id) {
            alert(`You are already in ${currentLocation.name}.`);
            return;
        }

        const svg = document.querySelector("#map-container svg");
        const path = findShortestRoute(svg, currentLocation, selectedLocation);
        if (!path || path.length === 0) {
            alert("No route found between these locations.");
            return;
        }
        setRoute(path);
        setWalkTime(Math.round((path.weight ?? 0) * 0.1));

        document.querySelector(".navigationUI")?.classList.add("active");
        document.querySelector("header")?.classList.add("navigation-header-hidden");
        document.querySelector("#current-location-container")?.style.setProperty("display", "none");

        setIsInfoOpen(false);
        setFiltersOpen(false);
    }

    useEffect(() => {
        const navigationUI = document.querySelector(".navigationUI");

        if (!navigationUI) return;

        const observer = new MutationObserver(() => {
            if (!navigationUI.classList.contains("active")) {
                document.querySelector("header")?.classList.remove("navigation-header-hidden");

                const currentLocationContainer = document.querySelector("#current-location-container");

                if (currentLocationContainer) {
                    currentLocationContainer.style.display = "";
                }
            }
        });

        observer.observe(navigationUI, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();
    }, []);


    function handleLocationSelect(location) {

        setSelectedLocation(location);
        setRoute([]);

        setIsInfoOpen(true);

        setRecentLocations(prev => {

            const recentLocation = {
                ...location,
                visitedAt: Date.now()
            };

            const filtered = prev.filter(
                loc => loc.id !== location.id
            );

            const updated = [
                recentLocation,
                ...filtered
            ].slice(0, 5);

            localStorage.setItem(
                "recentLocations",
                JSON.stringify(updated)
            );

            return updated;
        });
    }


    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        );
        localStorage.setItem("darkMode", darkMode);

    }, [darkMode]);


    return (
        <div data-theme={mapTheme}>
            <Header
                search={search}
                setSearch={setSearch}

                setSelectedLocation={
                    setSelectedLocation
                }


                onTheme={() =>
                    setDarkMode(prev => !prev)
                }


                setIsInfoOpen={setIsInfoOpen}

                darkMode={darkMode}
                // menuOpen={menuOpen}
                // setMenuOpen={setMenuOpen}
                onAbout={onAbout}
                onLegend={onLegend}
                onRecent={onRecent}
                onHowToUse={onHowToUse}
                setToastContent={setToastContent}
                setToastActive={setToastActive}
                currentLocation={currentLocation}
                setSearchBar={setSearchBar}
                isSearchBar={isSearchBar}

            />
            <div>
                <NavigationUI currentLocation={currentLocation} selectedLocation={selectedLocation}
                    walkTime={walkTime} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} filtersOpen={filtersOpen}
                    setFiltersOpen={setFiltersOpen}
                    setRoute={setRoute}
                />
            </div>


            <main>
                <LeftPanel
                    selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                    filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen}
                    setMapTheme={setMapTheme} setToastActive={setToastActive} setToastContent={setToastContent}
                    mapTheme={mapTheme}
                />
                <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={4}

                    wheel={{
                        step: 0.02
                    }}

                    limitToBounds={true}

                    centerOnInit={true}

                    panning={{
                        disabled: false,
                        velocityDisabled: false
                    }}
                >

                    <TransformComponent>

                        <Map
                            selectedLocation={
                                selectedLocation
                            }

                            setSelectedLocation={
                                setSelectedLocation
                            }

                            selectedCategory={
                                selectedCategory
                            }

                            setIsInfoOpen={
                                setIsInfoOpen
                            }

                            onLocationSelect={
                                handleLocationSelect
                            }

                            currentLocation={
                                currentLocation
                            }
                            route={route}
                            // setMenuOpen={setMenuOpen}
                            mapTheme={mapTheme}
                            setMapTheme={setMapTheme}
                            setSelectedCategory={setSelectedCategory}

                        />

                    </TransformComponent>

                </TransformWrapper>


                <InfoPanel
                    selectedLocation={
                        selectedLocation
                    }

                    isInfoOpen={
                        isInfoOpen
                    }

                    setIsInfoOpen={
                        setIsInfoOpen
                    }
                    setCurrentLocation={setCurrentLocation}
                    handleNavigationUI={handleNavigationUI}
                    setToastActive={setToastActive}
                    setToastContent={setToastContent}
                />
                {
                    modalOpen && (
                        <Modal onClose={() => {
                            setModalOpen(false)
                            setModalName(null)
                        }} title={
                            modalName === 'recent'
                                ? "Recent Locations"
                                : modalName === 'legend'
                                    ? "Campus Legend"
                                    : modalName === 'howtouse'
                                        ? "How to Use"
                                        : "About"
                        }>
                            {modalName === "recent" && <RecentLocations
                                recentLocations={recentLocations} setSelectedLocation={setSelectedLocation}
                                setIsInfoOpen={setIsInfoOpen} setModalOpen={setModalOpen} />}
                            {modalName === "legend" && (
                                <CampusLegend
                                    isOpen={true}
                                    onClose={() => {
                                        setModalOpen(false);
                                        setModalName(null);
                                    }}
                                    setSearch={setSearch}
                                    setSelectedLocation={setSelectedLocation}
                                />
                            )}

                            {modalName === "about" && (
                                <About/>
                            )}
                            {modalName === "howtouse" && (
                                <HowToUse setTutorialActive={setTutorialActive} setModalOpen={setModalOpen} />
                            )}

                        </Modal>
                    )
                }
                {
                    toastActive && (
                        <Toast
                            onClose={() => setToastActive(false)}
                        >
                            {toastContent === 'currentlocation' &&
                                <>
                                    <strong>{currentLocation.name}</strong> has been set as your current location!
                                </>
                            }
                            {
                                toastContent === 'tutorial-end' &&
                                <p>You are all set to use Campus Navigator!</p>
                            }
                            {
                                toastContent === 'food-search' &&
                                <p>You are now searching <strong>Food</strong>.
                                </p>
                            }
                            {
                                toastContent === 'food-search-exit' &&
                                <p> - Exited food search.
                                </p>
                            }
                            {toastContent === mapTheme &&
                                <p>Map Theme changed to {mapTheme}</p>}
                        </Toast>
                    )
                }

                {tutorialActive && (
                    <Tutorial
                        active={tutorialActive}
                        onClose={() =>
                            setTutorialActive(false)
                        }
                        setFiltersOpen={setFiltersOpen}
                        setIsInfoOpen={setIsInfoOpen}
                        onRecent={onRecent}
                        setToastContent={setToastContent}
                        setToastActive={setToastActive}
                        setSearchBar={setSearchBar}
                        setSelectedLocation={setSelectedLocation}
                    />
                )}

            </main>
        </div>
    );
}

export default CampusNavigator;
