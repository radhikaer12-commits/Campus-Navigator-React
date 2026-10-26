
import { locations } from "../data/locations";
import { categoryIcons } from "../data/categoryIcons";

function Filters({
    selectedCategory,
    setSelectedCategory,
    filtersOpen,
    setFiltersOpen
}) {
    const categories = [
        "all",
        ...new Set(locations.map(location => location.category))
    ];

    return (
        <section id="filters-container">
            <button
                id="filters-toggle-btn"
                onClick={() => setFiltersOpen(!filtersOpen)}
                aria-label={filtersOpen ? "Close filters" : "Open filters"}
            >
                <i
                    className={
                        filtersOpen
                            ? "fa-solid fa-xmark"
                            : "fa-solid fa-sliders"
                    }
                ></i>
            </button>

            {filtersOpen && (
                <section id="filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(
                                    selectedCategory === category
                                        ? ""
                                        : category
                                );
                            }}
                            className={
                                selectedCategory === category ? "active" : ""
                            }
                            style={{
                                "--category-color": `var(--${category}, var(--surface))`,
                                "--category-stroke": `var(--${category}_stroke, var(--border))`,
                                display:"flex",
                                flexDirection:"column"
                            }}
                        >
                            <i
                                className={
                                    categoryIcons[category] ||
                                    "fa-solid fa-layer-group"
                                }
                            ></i>

                            <span>
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </span>
                        </button>
                    ))}
                </section>
            )}
        </section>
    );
}

export default Filters;
