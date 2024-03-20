import React from "react";
class UserClass extends React.Component {
  //receiving the pops from About.js
  constructor(props) {
    super(props);

    //
    this.state = {
      //this is the way of creating the state variable in the class component
      count: 0,
      count2: 1,
    };

    console.log(props);
  }
  render() {
    // insted of writing always this.props.etc every time , I can destructure it like as below
    const { name, location } = this.props;
    //destructuring the states on the fly
    const { count, count2 } = this.state;
    return (
      <>
        <div className="user-card">
          {/* <h2>Name : {this.props.name}</h2>
          <h3>Location : {this.props.location}</h3> */}
          <h1>count : {this.state.count}</h1>
          <button
            onClick={() => {
              //NOTE: Never update the state variables directly(WRONG==> this.state.count=this.state.cont+1), insted make use of this.setState
              //CORRECT==> over here in the this.setState we pass in an object, and this object will contain the updated value of state variables
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Count Increase
          </button>
          {/**  i have directly used the cont2 bcz I ahve destructured: this.state  */}
          <h2>count1 :{count2}</h2>
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact : udaysp194@gmail.com</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
