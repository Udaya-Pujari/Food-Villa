import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  // const { resName, cuisine } = props; //destructuring
  // The above line can also ne written as const RestaurentCard =({resName, cuisine})=>.... this works same
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} star</h5>
      <h5>{costForTwo / 100}</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurentCard;
