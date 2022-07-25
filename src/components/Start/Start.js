import React from "react";
import "./Start.css";

function Start() {
  return (
    <div className="start">
      <div className="box-welcome">
        <h1 className="welcome">Welcome to our</h1>
        <h1 className="welcome">Shop</h1>
        <video
          className="gif-start"
          src="./cartFruit.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
        <video
          className="gif-start"
          src="./basketFruit.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
        <video
          className="gif-start"
          src="./carrot.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
}

export default Start;
