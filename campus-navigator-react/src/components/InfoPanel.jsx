import { dijkstra } from "../utils/dijkstra";
import { getCurrentStatus } from "../utils/status";

function InfoPanel({ selectedLocation, isInfoOpen, setIsInfoOpen,setCurrentLocation, handleNavigationUI,setToastActive,setToastContent }) {

    const status = selectedLocation
        ? getCurrentStatus(selectedLocation)
        : null;

    return (
        <aside id="info-panel">

            <button
                id="info-toggle-btn"
                onClick={() => setIsInfoOpen(prev => !prev)}
            >
                <i
                    className={
                        isInfoOpen
                            ? "fa-solid fa-chevron-down info-down"
                            : "fa-solid fa-chevron-up info-up"
                    }
                ></i>
            </button>

            <div
                id="info-content"
                className={isInfoOpen ? "open" : ""}
            >

                {!selectedLocation ? (
                    <>
                        <h2>Select a Location</h2>
                        <p>
                            Tap any building on the map to view its details.
                        </p>
                    </>
                ) : (
                    <>{
                        selectedLocation.image ? (
                            <img
                                id="location-image"
                                src={selectedLocation.image}
                                alt={selectedLocation.name}
                            />
                        ) : (
                            <div className="no-image">
                                <i className="fa-regular fa-image"></i>
                                <span>No image available</span>
                            </div>
                        )
                    }

                        <h2>{selectedLocation.name}</h2>

                        <p id="info-description">
                            {selectedLocation.description}
                        </p>

                        <p
                            id="info-category"
                            style={{
                                color: `var(--${selectedLocation.category}_stroke)`
                            }}
                        >
                            <strong>Category:</strong>
                            {selectedLocation.category}
                        </p>

                        <p id="status">
                            <strong>Current status: </strong>{status}
                            {}
                        </p>
                        <section className="info-section">
                            <h4>Facilities</h4>

                            <div className="info-tags">
                                {(selectedLocation.facilities || []).map((facility) => (
                                    <span key={facility}>
                                        {facility}
                                    </span>
                                ))}
                            </div>
                        </section>
                        <button onClick={()=>{
                            setCurrentLocation(selectedLocation);
                            setToastActive(true);
                            setToastContent("currentlocation");
                            localStorage.setItem("currentLocation",JSON.stringify(selectedLocation));
                        }
                        }>Set as Current Location</button>
                        <button onClick={()=> handleNavigationUI()}
                            id="navigation-btn">Navigate</button>
                        
                    </>
                )}
            </div>

        </aside>
    );
}

export default InfoPanel;