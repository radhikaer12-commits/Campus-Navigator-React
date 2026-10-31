
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import MyLocation from "./MyLocation";

function Header({
    search,
    setSearch,
    setSelectedLocation,
    onTheme,
    setIsInfoOpen,
    darkMode,
    onHowToUse,
    onRecent,
    onAbout,
    onLegend,
    setToastContent,
    setToastActive,
    currentLocation,
    setSearchBar,
    isSearchBar
}) {
    const [isFood, setOnFood] = useState(false);

    if (
        document.querySelector(".navigationUI")
            ?.classList.contains("active")
    ) {
        document.querySelector("#search-wrapper")
            ?.classList.add("hidden");
    }

    return (
            <header className="main-header">
            {/* LEFT: Logo */}
            <div className="header-logo">
                <Link to="/" id="logo">
                    Explore <span>U.</span>
                </Link>
            </div>

            {/* AFTER LOGO: Search */}
            <div className="header-search">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    setSelectedLocation={setSelectedLocation}
                    setIsInfoOpen={setIsInfoOpen}
                    isFood={isFood}
                    setOnFood={setOnFood}
                    setToastActive={setToastActive}
                    setToastContent={setToastContent}
                    isSearchBar={isSearchBar}
                    setSearchBar={setSearchBar}
                />
            </div>

            {/* CENTRE: Navigation */}
            <nav className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>

                <button
                    id="recent-locations-btn"
                    className="navbar-link"
                    onClick={onRecent}
                >
                    Recent Locations
                </button>

                <button className="navbar-link" onClick={onLegend}>
                    Campus Legend
                </button>

                <button className="navbar-link" onClick={onHowToUse}>
                    How to Use
                </button>

                <button className="navbar-link" onClick={onAbout}>
                    About
                </button>

                <button className="navbar-link" onClick={onTheme}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </nav>

            {/* RIGHT: Current Location */}
            <div className="header-location">
                <MyLocation
                    currentLocation={currentLocation}
                    setSelectedLocation={setSelectedLocation}
                    setIsInfoOpen={setIsInfoOpen}
                />
            </div>
    </header>
    );
}

export default Header;
