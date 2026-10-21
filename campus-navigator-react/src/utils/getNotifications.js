
const STORAGE_KEY = "campus-notifications";

export function getNotifications() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );
}

export function getNotificationCount() {
    return getNotifications().filter(
        notification => !notification.read
    ).length;
}

export function saveNotification(message) {
    if (!message) return;

    const notifications = getNotifications();

    notifications.unshift({
        id: `${Date.now()}-${Math.random()}`,
        message,
        dateTime: new Date().toLocaleString("en-IN"),
        read: false
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notifications.slice(0, 50))
    );

    window.dispatchEvent(
        new Event("campus-notifications-updated")
    );
}

export function clearNotifications() {
    localStorage.removeItem(STORAGE_KEY);

    window.dispatchEvent(
        new Event("campus-notifications-updated")
    );
}
