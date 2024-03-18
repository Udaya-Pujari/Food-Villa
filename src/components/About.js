import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <div>
        <h1>About us</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* giving/passing the props for User function */}
        <User name={'Udaya Puajri'} />

        {/* giving/passing the props to the USerClass */}
        <UserClass name={"Udaya Pujari from class component recived props"} location={"karnataka"}/>
      </div>
    </>
  );
};

export default About;
