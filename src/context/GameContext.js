import { createContext, useState, useContext } from "react";
import { calcWinner } from "../utilities/calcSquares";
import { WinStateContext } from "./winStateContext";

const GameContext = createContext();

const GameState = (props) => {
  const { showWinState, setWinStateMode } = useContext(WinStateContext);

  const [screen, setScreen] = useState("start");

  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("user");

  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);

  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);

  const [ties, setTies] = useState({x: 0 , o:0})

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen("game");
  };

  const handleSquareClick = (ix) => {
    const currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";

    setSquares(ns);
    setXnext(!xnext);
    checkWinner(ns);
  };
  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);

      const ti = {...ties}
      ti[isWinner.winner] += 1 
      setTies(ti)
      showWinState();
      setWinStateMode("winner");
    }
  };
  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        squares,
        handleSquareClick,
        setActiveUser,
        changePlayMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
