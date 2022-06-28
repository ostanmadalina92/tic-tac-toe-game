import React, { useContext } from "react";
import Win from "./win";
import Restart from "./restart";
import { WinStateContext } from "../../context/winStateContext";

const WinState = () => {

  const {show, winStateMode} = useContext(WinStateContext)
  return (
    <>
      {show && (
        <div className="winState">
          <div className="win__content">
            <div className="container">
              {winStateMode === "winner" && <Win />}
              {winStateMode === "start" && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WinState;
