import { createContext, useState } from "react";

const GameContext = createContext();

const GameState = (props) => {
  const [screen, setScreen] = useState("start");

  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("user");

  const [squares, setSquares] = useState(new Array(9).fill(''));
  const [xnext, setXnext] = useState(false);

  const changePlayMode =  mode => {
      setPlayMode(mode);
      setScreen("game");
  }

  const handleSquareClick = (ix) => {
    
    const currentUser = xnext ? 'o' : 'x';
    if(playMode === 'cpu' && currentUser !== activeUser){
        return;
    }

    let ns = [...squares];
    ns[ix] = !xnext ? 'x' : 'o';

    setSquares(ns);
    setXnext(!xnext);

  }
    const checkWinner = (ns) => {
        
    }
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
