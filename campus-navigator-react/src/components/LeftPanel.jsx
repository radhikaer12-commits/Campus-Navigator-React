import { useState, useEffect, useRef } from "react";
import Filters from "./Filters";
import MapThemePalette from "./MapThemePalette";
import Notifications from "./Notifications";
import { getNotificationCount } from "../utils/getNotifications";

export default function LeftPanel({ selectedCategory, setSelectedCategory, filtersOpen, setFiltersOpen,
    setMapTheme, setToastActive, setToastContent, mapTheme
}) {
    const [mapThemeMenu, openMapThemeMenu] = useState(false);
    const [openNotifications, setNotificationsOpen] = useState(false);
    const panelRef = useRef(null);

    const [notificationCount, setNotificationCount] = useState(
        () => getNotificationCount()
    );

    useEffect(() => {
        const updateCount = () => {
            setNotificationCount(getNotificationCount());
        };

        window.addEventListener(
            "campus-notifications-updated",
            updateCount
        );

        return () => {
            window.removeEventListener(
                "campus-notifications-updated",
                updateCount
            );
        };
    }, []);

    useEffect(() => {
        const closePanelsOutside = event => {
            if (panelRef.current?.contains(event.target)) return;
            openMapThemeMenu(false);
            setNotificationsOpen(false);
            setFiltersOpen(false);
        };

        document.addEventListener("pointerdown", closePanelsOutside);
        return () => document.removeEventListener("pointerdown", closePanelsOutside);
    }, [setFiltersOpen]);

    const toggleMapTheme = () => {
        const nextOpen = !mapThemeMenu;
        openMapThemeMenu(nextOpen);
        if (nextOpen) {
            setNotificationsOpen(false);
            setFiltersOpen(false);
        }
    };

    const toggleNotifications = () => {
        const nextOpen = !openNotifications;
        setNotificationsOpen(nextOpen);
        if (nextOpen) {
            openMapThemeMenu(false);
            setFiltersOpen(false);
        }
    };

    const toggleFilters = nextOpen => {
        setFiltersOpen(nextOpen);
        if (nextOpen) {
            openMapThemeMenu(false);
            setNotificationsOpen(false);
        }
    };

    return (
        <div id='left-panel-container' ref={panelRef}>
            <button id="map-theme-btn" onClick={toggleMapTheme}>{!mapThemeMenu ? <i className="fa-solid fa-palette"></i> : <i className="fa-solid fa-xmark"></i>}</button>

            {
                mapThemeMenu && (
                    <MapThemePalette setMapTheme={setMapTheme} setToastActive={setToastActive} setToastContent={setToastContent}
                        mapTheme={mapTheme} />
                )
            }
            <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                filtersOpen={filtersOpen} setFiltersOpen={toggleFilters} />
            <button id="notifications-toggle-btn"
                onClick={toggleNotifications}
            >{!openNotifications ? <i className="fa-solid fa-bell"></i> : <i className="fa-solid fa-xmark"></i>}
                {notificationCount > 0 && !openNotifications && (
                    <span className="notification-badge">
                        {notificationCount > 99 ? "99+" : notificationCount}
                    </span>
                )}
            </button>
            {openNotifications &&
                <Notifications />}
        </div>
    )
}
