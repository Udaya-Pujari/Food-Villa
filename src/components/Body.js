import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* or */}
        {/* {resList.map((restaurent) => {
            return (
              <>
                <RestaurentCard resData={restaurent} />
              </>
            );
          })} */}

        {/* <RestaurentCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};
export default Body;
