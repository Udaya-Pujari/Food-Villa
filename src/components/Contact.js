import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold p-4 m-4">Contact us</h1>
        <form className="flex space-x-3">
          <input
            type="text"
            className="m-2 p-2 border border-black rounded-lg"
            placeholder="Name"
          />
          <input
            type="text"
            className="m-2 p-2 border border-black rounded-lg"
            placeholder="Message"
          />
          <button className="m-2 p-2 border bg-black text-white rounded-lg ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
