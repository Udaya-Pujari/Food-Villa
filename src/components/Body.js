import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurents.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
