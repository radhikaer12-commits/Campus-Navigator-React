import { useNavigate } from "react-router-dom";

function MobileMenu({menuOpen,onHowToUse,onTheme,darkMode,onAbout,onRecent,onLegend
}) {
    const navigate = useNavigate();
    const onHomeClick = ()=> {
        navigate("/");
    }
    return (
        <div id="mobile-menu" 
        className={menuOpen ? "open" : ""}>
            <button onClick={onHomeClick}>Home</button>
            <button onClick={onHowToUse}>How to Use</button>
            <button onClick={onRecent} id='recent-locations-btn'>Recent Locations</button>
            <button onClick={onLegend}>Campus Legend</button>
            <button onClick={onTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
            <button onClick={onAbout} id="about-btn">About</button>
        </div>
    );
}

export default MobileMenu;