import React from "react";
class UserClass extends React.Component {
  //receiving the pops from About.js
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    // insted of writing always this.props.etc every time , I can destructure it like as below
    const { name, location } = this.props;
    return (
      <>
        <div className="user-card">
          {/* <h2>Name : {this.props.name}</h2>
          <h3>Location : {this.props.location}</h3> */}
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact : udaysp194@gmail.com</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
