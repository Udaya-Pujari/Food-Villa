//reciving the props from About.js
const User = (props) => {
  return (
    <>
      <div className="user-card">
        <h2>Name : {props.name}</h2>
        <h3>Location : karnataka</h3>
        <h4>Contact : udaysp194@gmail.com</h4>
      </div>
    </>
  );
};
export default User;
