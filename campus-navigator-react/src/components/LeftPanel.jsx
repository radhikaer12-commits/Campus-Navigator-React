import { useState, useEffect } from "react";
import Filters from "./Filters";
import MapThemePalette from "./MapThemePalette";
import Notifications from "./Notifications";
import { getNotificationCount } from "../utils/getNotifications";

export default function LeftPanel({ selectedCategory, setSelectedCategory, filtersOpen, setFiltersOpen,
    setMapTheme, setToastActive, setToastContent, mapTheme
}) {
    const [mapThemeMenu, openMapThemeMenu] = useState(false);
    const [openNotifications, setNotificationsOpen] = useState(false);

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
    return (
        <div id='left-panel-container'>
            <button id="map-theme-btn" onClick={() => {
                openMapThemeMenu(prev => !prev);
            }}>{!mapThemeMenu ? <i className="fa-solid fa-palette"></i> : <i className="fa-solid fa-xmark"></i>}</button>

            {
                mapThemeMenu && (
                    <MapThemePalette setMapTheme={setMapTheme} setToastActive={setToastActive} setToastContent={setToastContent}
                        mapTheme={mapTheme} />
                )
            }
            <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} />
            <button id="notifications-toggle-btn"
                onClick={() => setNotificationsOpen(prev => !prev)}
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
