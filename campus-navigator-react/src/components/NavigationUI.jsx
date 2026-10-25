export default function ({ currentLocation, selectedLocation, walkTime,isInfoOpen,setIsInfoOpen,filtersOpen,setFiltersOpen, setRoute}) {
  const onExit = () => {
    setRoute([]);
    document.querySelector(".navigationUI").classList.remove('active');
    document.querySelector("#search-wrapper").classList.remove('hidden');
    setIsInfoOpen(!isInfoOpen);
    setFiltersOpen(filtersOpen);
    document.querySelector("header").style.display = "";
    document.querySelector("#current-location-container").style.display = "";

  }
  return (
    <div className='navigationUI'>
      <p id="navigation-current-loc">{currentLocation?.name}</p>
      <div className="navigation-route-arrow" role="img" aria-label="toward destination">→</div>
      <p id="navigation-destination-loc">{selectedLocation?.name}</p>
      <div id="navigation-content">
        <button onClick={() => onExit()} id="navigation-exit-btn">Exit</button>
        <h6 id="navigation-estimated-time">Estimated time: <span>{`${walkTime} minutes`}</span></h6>
      </div>
    </div>
  )
}
