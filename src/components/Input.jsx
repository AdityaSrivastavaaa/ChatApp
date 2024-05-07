import React from "react";
import attach from "../assets/icons8-attach-24.png"
import image from "../assets/image.png"
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={image} alt=""  />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
