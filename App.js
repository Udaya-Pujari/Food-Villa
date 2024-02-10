import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    -Logo
 *    -Nav Items
 * Body
 *   -Search element
 *   -Pestro container
 *      - Resturent card
 *          -image
 *          -name of restaurent, star rating , cuisines,delivary time
 * Footer
 *   -Copyrightts
 *   -Links
 *   -Address
 *   -Contact
 *
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resName, cuisine } = props; //destructuring
  // The above line can also ne written as const RestaurentCard =({resName, cuisine})=>.... this works same
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
      />
      <h3>{resName}</h3>
      <h5>{cuisine}</h5>
      <h5>4.4 star</h5>
      <h5>38 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurentCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
