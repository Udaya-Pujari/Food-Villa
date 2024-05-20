import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  // const { resName, cuisine } = props; //destructuring
  // The above line can also ne written as const RestaurentCard =({resName, cuisine})=>.... this works same
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[325px] h-[250px] rounded-lg bg-gray-200 hover:bg-gray-400"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        // alt="./src/images/pexels-iina-luoto-460132-1211887.jpg"
        alt="Image"
        src={CDN_URL + cloudinaryImageId}
      />
      <hr></hr>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} star</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString} minutes</h5>
    </div>
  );
};

//higher order component
//input is RestaurentCrd  => this gives the out put with RestaurentCard Promoted

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <>
        <div>
          <label>Promoted</label>
          <RestaurentCard {...props} />
        </div>
      </>
    );
  };
};

export default RestaurentCard;
