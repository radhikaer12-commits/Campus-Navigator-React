export default function SearchFilters({setOnFood,isFood,setToastContent,setToastActive}) {
  return (
    <div>
        <button onClick={()=>{setOnFood(prev=>!prev)
          setToastActive(true);
          if(!isFood) {
            setToastContent("food-search");
          }else{
            setToastContent("food-search-exit");
          }
        }} 
        className={!isFood? "active" : "food-search-btn"}><i className="fa-solid fa-utensils"></i></button>
    </div>
  )
}
