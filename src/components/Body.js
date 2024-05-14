import RestaurentCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
        <h1>
          Looks like you are offline !! please check your internet connection
        </h1>
      </>
    );
  }

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ml-8">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-gray-500 text-cyan-50  m-4 rounded-lg"
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
        <div className="search m-4 p-4">
          <button
            className="filter-btn px-4 py-1 bg-gray-500 text-cyan-50  m-4 rounded-lg"
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
      </div>
      <div id="" className="flex flex-wrap ml-8">
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
