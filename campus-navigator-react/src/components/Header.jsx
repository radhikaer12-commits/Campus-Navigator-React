import { useState } from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import MapThemePalette from "./MapThemePalette";
import Filters from "./Filters";
import MyLocation from "./MyLocation";

function Header({
    search, setSearch, setSelectedLocation, onTheme, setIsInfoOpen, darkMode, onHowToUse,
    menuOpen, setMenuOpen, onRecent, onAbout, onLegend, setToastContent, setToastActive, currentLocation,
    setSearchBar, isSearchBar
}) {
    const [isFood, setOnFood] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function handleHowToUse() {
        setMenuOpen(false);
        onHowToUse();
    }
    if (document.querySelector(".navigationUI")?.classList.contains("active")) {
        document.querySelector('#search-wrapper')?.classList.add('hidden');
    };
    return (
        <header>
            <nav>
                <div id="nav-title">
                    <button id="logo">Explore <span>U.</span></button>

                </div>
                <div id='search-wrapper'>
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
                    <MyLocation currentLocation={currentLocation} setSelectedLocation={setSelectedLocation}
                        setIsInfoOpen={setIsInfoOpen} />

                    <button id="menu-btn" aria-label="Open menu" aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    > <i className={menuOpen
                        ? "fa-solid fa-xmark"
                        : "fa-solid fa-bars"
                    }></i></button>
                
            </nav>
            <MobileMenu menuOpen={menuOpen}
                onTheme={onTheme}
                darkMode={darkMode}
                onHowToUse={handleHowToUse}
                onAbout={onAbout}
                onLegend={onLegend}
                onRecent={onRecent}

            />
        </header>
    );
}
export default Header;