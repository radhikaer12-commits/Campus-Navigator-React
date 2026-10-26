
import { useEffect, useState } from "react";
import {
    getNotifications,
    clearNotifications} from "../utils/getNotifications";

export default function Notifications() {
    const [notifications, setNotifications] = useState(
        () => getNotifications()
    );

    useEffect(() => {
        const updateNotifications = () => {
            setNotifications(getNotifications());
        };

        window.addEventListener(
            "campus-notifications-updated",
            updateNotifications
        );

        return () => {
            window.removeEventListener(
                "campus-notifications-updated",
                updateNotifications
            );
        };
    }, []);

    const handleClear = () => {
        clearNotifications();
        setNotifications([]);
    };

    return (
        <div id="notification-container">
            <div id="notification-header">
                <h2>Notifications from Explore U.</h2>

                <button
                    type="button"
                    onClick={handleClear}
                    title="Clear all notifications"
                    aria-label="Clear all notifications"
                    disabled={notifications.length === 0}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>

            <div id="notification-content">
                {notifications.length === 0 ? (
                    <p className="no-notifications">
                        <i className="fa-regular fa-bell-slash"></i>
                        <span>No notifications yet.</span>
                    </p>
                ) : (
                    notifications.map((notification) => (
                        <div
                            className="notification-item"
                            key={notification.id}
                        >
                            <div className="notification-icon">
                                <i className="fa-solid fa-bell"></i>
                            </div>

                            <div className="notification-details">
                                <p>{notification.message}</p>
                                <span>{notification.dateTime}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
