import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // console.log(params);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
                  {item.card.info.name} -{" ₹ "}
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
