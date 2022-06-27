import React from "react";
import Win from "./win";
import Restart from "./restart";

const WinState = () => {
  return (
    <div className="winState">
      <div className="win__content">
        <div className="container">
           {/* <Win/> */}
           <Restart />
        </div>
      </div>
    </div>
  );
};

export default WinState;
