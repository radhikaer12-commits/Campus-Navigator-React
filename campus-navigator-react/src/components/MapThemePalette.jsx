import { dateTime } from "../utils/dateTime";

export default function MapThemePalette({setToastActive,mapTheme,setMapTheme,setToastContent}) {
    const handleThemeChange = (theme) => {
        setMapTheme(theme);
        setToastContent(theme);
        setToastActive(true);
        localStorage.setItem("map-theme",JSON.stringify({
            "theme":theme,
            "Date":dateTime
        }));
    };
  return (
    <div id="map-theme-menu">
                        <button
                            className={`theme-option ${mapTheme === "campus" ? "active" : ""}`}
                            onClick={() => handleThemeChange("campus")}
                        >
                            <i className="fa-solid fa-leaf"></i>
                            <span> Campus </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "midnight" ? "active" : ""}`}
                            onClick={() => handleThemeChange("midnight")}
                        >
                            <i className="fa-solid fa-moon"></i>
                            <span> Midnight </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "cartographic" ? "active" : ""}`}
                            onClick={() => handleThemeChange("cartographic")}
                        >
                            <i className="fa-solid fa-map"></i>
                            <span> Cartographic </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "blueprint" ? "active" : ""}`}
                            onClick={() => handleThemeChange("blueprint")}
                        >
                            <i className="fa-solid fa-compass-drafting"></i>
                            <span> Blueprint </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "monochrome" ? "active" : ""}`}
                            onClick={() => handleThemeChange("monochrome")}
                        >
                            <i className="fa-solid fa-circle-half-stroke"></i>
                            <span> Monochrome </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>
                    </div>
  )
}
