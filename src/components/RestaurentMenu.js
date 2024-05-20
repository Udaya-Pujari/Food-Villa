import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaturentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // console.log(params);

  const { resId } = useParams();
  console.log(resId);

  //this is the custom hooks which makes the api call for the restaurent menu
  const resInfo = useRestaturentMenu(resId);

  /**   here in the below line I have commented the fetch menu function so that i can use the custom hooks above */
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //     // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  if (resInfo === null) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log(itemCards);

  //when we click on the resturent we get the menu card with categories like,recommended,newly added accordian
  

  return (
    <>
      <div>
        <div className="menu">
          <h1>{name}</h1>
          <p>
            {cuisines.join(",")} -{costForTwoMessage}
          </p>
          <h2>Menu</h2>
          <ul>
            {itemCards.map((item) => {
              return (
                <li key={item.card.info.id}>
                  {/* {item.card.info.name} -{" ₹ "} */}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </li>
              );
            })}
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurentMenu;
