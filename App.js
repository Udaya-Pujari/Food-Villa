
import React from "react";
import ReactDOM from "react-dom/client";

// Functional component

const Title = () => <h1 className="head">This is the tile component</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Welcome to the heading component</h1>
  </div>
);

// const HeadingComponent = () => {
//   return <h1>This is just returned the function</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
