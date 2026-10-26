import React from "react";

export default function HowToUse({ setTutorialActive, setModalOpen }) {
    const handleTutorial = ()=>{
        setTutorialActive(true);
        setModalOpen(false);
    }
    return (
        <div className="how-to-use">

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {" "}Search
                </h3>
                <p>
                    Use the search bar to quickly find buildings,
                    food outlets, hostels, parking areas, and
                    other campus locations.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-map"></i>
                    {" "}Explore the Map
                </h3>
                <p>
                    Tap any marked location on the campus map to
                    view its details, facilities, accessibility,
                    and availability.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-tags"></i>
                    {" "}Filter Locations
                </h3>
                <p>
                    Use the category filters to find specific
                    types of locations such as Academic, Food,
                    Hostel, Administration, Parking, and Parks.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-route"></i>
                    {" "}Navigate
                </h3>
                <p>
                    Select a location and choose{" "}
                    <strong>Navigate</strong> to find the shortest
                    route to your destination.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                    {" "}Zoom &amp; Pan
                </h3>
                <p>
                    Zoom in or out to explore the campus map in
                    detail and drag the map to move around
                    different areas.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-location-dot"></i>
                    {" "}Recent Locations
                </h3>
                <p>
                    Your recently viewed locations are saved for
                    quick access, so you can easily return to
                    places you've explored before.
                </p>
            </div>

            <div className="how-to-section" onClick={handleTutorial}>
                <h3>
                    <i className="fa-solid fa-palette"></i>
                    {" "}Theme
                </h3>
                <p>
                    Switch between Light Theme and Dark Theme
                    from the menu for a more comfortable viewing
                    experience.
                </p>
            </div>

            <div className="how-to-tip" onClick={handleTutorial}>
                <strong>
                    <i className="fa-solid fa-lightbulb"></i>
                    {" "}Tip
                </strong>
                <p>
                    You can search for a location or select one
                    directly from the map to get started.
                </p>
            </div>

            <div className="how-to-tutorial">
                <p>
                    <strong>
                        Still confused? Start an interactive tutorial.
                    </strong>
                </p>

                <button
                    onClick={handleTutorial}
                >
                    <i className="fa-solid fa-circle-play"></i>
                    <span id='tutorial-start-span'> Start Tutorial</span>
                </button>
            </div>

        </div>
    );
}
