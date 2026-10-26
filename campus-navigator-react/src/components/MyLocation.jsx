import { useState } from "react";
import { locations } from "../data/locations";

function MyLocation({currentLocation,setSelectedLocation,setIsInfoOpen}) {
    const handleLocationClick = () => {
        if (currentLocation) { setSelectedLocation(currentLocation)
            setIsInfoOpen(true);
        };
    }
    const savedLocation = JSON.parse(
        localStorage.getItem("currentLocation")
    )
    return (
        <div id="current-location-container">
        <h5><i className="fa-solid fa-location-dot"></i> <span>Current Location</span></h5>
        <button onClick={()=>handleLocationClick()} id="current-location-btn">{currentLocation ? `${currentLocation.name}` : "No location selected."}</button>
        </div>
    )
    
}

export default MyLocation;