import React, { useContext } from "react";
import { WinStateContext } from "../../context/winStateContext";
import { GameContext } from "../../context/GameContext";

const Restart = () => {
  const { handleReset } = useContext(GameContext);
  const { hideWinState } = useContext(WinStateContext);

  return (
    <div className="restart">
      <h2 className="restart__title">Restart Game ?</h2>
      <div className="restart__btns">
        <button className="btn btn-sm" onClick={hideWinState}>
          
          no, cancel
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleReset}>
          
          yes, restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
