import { useState } from "react";

//reciving the props from About.js
const User = (props) => {
  //creating the state variable in the functional component
  // we make use of useState hook to create a state variable in the finctional component.
  //to update the state variable we make use of setState variable,
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="user-card">
        <h1>count : {count}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Location : karnataka</h3>
        <h4>Contact : udaysp194@gmail.com</h4>
      </div>
    </>
  );
};
export default User;
