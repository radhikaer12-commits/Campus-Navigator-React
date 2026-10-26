import { locations } from "../data/locations";
import { foodOutlets } from "../data/FoodOutlets";
import { useState } from "react";
import SearchFilters from "./SearchFilters";

function SearchBar({ search, setSearch, setSelectedLocation, setIsInfoOpen, isFood, setOnFood, setToastActive, setToastContent, isSearchBar,
    setSearchBar
}) {
    const query = search.trim().toLowerCase();
    let matches = [];
    const [recentSearches, setRecentSearches] = useState([]);
    const [showRecentSearches, setShowRecentSearches] = useState(false);
    if (isFood) {
        matches = foodOutlets.filter(foodOutlet =>
            foodOutlet.menu.some(item =>
                item.name.toLowerCase().includes(query)
            ) ||
            foodOutlet.name.toLowerCase().includes(query)
        )
    } else {
        matches = locations.filter(location =>
            location.name.toLowerCase().includes(query) ||
            location.description.toLowerCase().includes(query) ||
            location.category.toLowerCase().includes(query) ||
            location.facilities.some(facility =>
                facility.toLowerCase().includes(query)
            )
        )
    }
    function findFoodLocation(foodOutlet) {
        return locations.find(loc =>
            loc.id === foodOutlet.id
        )
    }
    const saveSearch = (location) => {
        if (!location) return;

        const history = JSON.parse(
            localStorage.getItem("search-history") || "[]"
        );

        const newSearch = {
            id: location.id,
            name: location.name,
            category: location.category || "food",
            dateTime: new Date().toLocaleString("en-IN")
        };

        const updatedHistory = [
            newSearch,
            ...history.filter(item => item.id !== newSearch.id)
        ].slice(0, 20);

        localStorage.setItem(
            "search-history",
            JSON.stringify(updatedHistory)
        );
    };
    function handleResultClick(result) {
        const location = isFood
            ? findFoodLocation(result)
            : result;
        setSelectedLocation(location);
        setIsInfoOpen(true);
        setSearch(location.name);
        document.querySelector('#search-results')?.classList.add('hidden');
        saveSearch(location);
    }
    function loadRecentSearches() {
        const history = JSON.parse(
            localStorage.getItem("search-history") || "[]"
        );

        setRecentSearches(history);
        setShowRecentSearches(true);
    }
    return (
        <div className="search-container">
            <button id="search-toggle-btn" onClick={() => {
                setSearchBar(prev => !prev);
                document.querySelector("#search-results").classList.toggle("hidden");
            }}>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>
            {isSearchBar &&
                <div className="search-bar">
                    <input type="search" id="search" placeholder={isFood ? "Search food..." : "Search buildings, labs, offices..."}
                        value={search}
                        onFocus={loadRecentSearches}
                        onBlur={() => {
                            setShowRecentSearches(false);
                        }}
                        onChange={(event) => {
                            setSearch(event.target.value)
                            if (event.target.value.trim() == '') {
                                loadRecentSearches();
                            } else {
                                setShowRecentSearches(false);
                            }
                        }}

                    />
                    <SearchFilters setOnFood={setOnFood} setToastContent={setToastContent} setToastActive={setToastActive}
                        isFood={isFood} />
                </div>
            }
            {showRecentSearches && !search.trim() && recentSearches.length > 0 && (
                <div className="recent-searches">
                    <div className="recent-searches-header">
                        <h4>Recent Searches</h4>

                        <button
                            type="button"
                            onClick={() => {
                                localStorage.removeItem("search-history");
                                setRecentSearches([]);
                            }}
                        >
                            Clear
                        </button>
                    </div>

                    {recentSearches.filter((item) =>
                        isFood ? item.category === 'food'
                            : item.category !== 'food'
                    ).map((item) => (
                        <div
                            key={item.id}
                            className="recent-searches-item"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                const location = locations.find(
                                    (loc) => loc.id === item.id
                                );

                                if (location) {
                                    setSelectedLocation(location);
                                    setIsInfoOpen(true);
                                    setSearch(location.name);
                                    setShowRecentSearches(false);
                                }
                            }}
                        >
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            <span> {item.name}</span>
                        </div>
                    ))}
                </div>
            )}
            {query &&
                <div id="search-results">
                    {

                        matches.map(location => (
                            <div
                                key={location.id}
                                onClick={() => handleResultClick(location)}

                            >
                                {location.name}
                            </div>

                        ))
                    }

                </div>
            }
        </div>
    );
}
export default SearchBar;