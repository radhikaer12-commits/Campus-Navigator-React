function RecentLocations({ recentLocations, setSelectedLocation, setIsInfoOpen, setModalOpen }) {
    function handleClick(location) {
        setSelectedLocation(location);
        setIsInfoOpen(true);
        setModalOpen(false);
    }
    function formatDate(timestamp) {
        const date = new Date(timestamp);

        return date.toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short"
        });
    }

    return (
        <div className="recent-locations">

            {recentLocations.length === 0 ? (
                <p>No recent locations</p>
            ) : (
                recentLocations.map(location => (
                    <button
                        key={location.id}
                        onClick={() => handleClick(location)}
                    >
                        <div>
                            {location.name}
                        </div>

                        <small>
                            {formatDate(location.visitedAt)}
                        </small>
                    </button>
                ))
            )}

        </div>
    );
}

export default RecentLocations;
