import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  //I am making copy of the listofRestaurants in the blow line so that it is used in the search text
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  //  NOTE: When ever a state variables updates,react re-renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering: rendering on the basis of condition is known as conditional rendering
  // if (listOfRestaurents.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="btn-div">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurent cards and update the UI
              console.log(searchText);
              const filteredRestaurent = listOfRestaurents.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurant) => {
          // <RestaurentCard key={restaurant.info.id} resData={restaurant} />;
          if (restaurant && restaurant?.info && restaurant?.info?.id) {
            return (
              <>
                <Link
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  <RestaurentCard resData={restaurant} />
                </Link>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Body;
