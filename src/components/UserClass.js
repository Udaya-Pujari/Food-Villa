import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  //receiving the pops from About.js
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        login: "dummy name",
        location: "default location",
        avatar_url: "http://dummy.com",
      },
    };
  }

  //In class based components you can make the componentDidmount as async as below shown
  async componentDidMount() {
    //API call
    const data = await fetch("https://api.github.com/users/Udaya-Pujari-194");
    const convertToJson = await data.json();
    console.log(convertToJson);


    //updating my state
    this.setState({
      userInfo: convertToJson,
    });
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("componrent will unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { login, location ,avatar_url} = this.state.userInfo;

    return (
      <>
        <div className="user-card">
          <img src={avatar_url} />
          <h2>Name : {login}</h2>
          <h3>Location : {location}</h3>
          <h4>Contact : udaysp194@gmail.com</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
