import { useState, createContext } from "react";

const WinStateContext = createContext();

const WinState = (props) => {

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner");

  const showWinState = () => setShow(true);
  const hideWinState = () => setShow(false);

  return (
  <WinStateContext.Provider 
  value={{show, 
          winStateMode: mode,
          setWinStateMode: setMode,
          showWinState, 
          hideWinState,}}>
      {props.children}
  </WinStateContext.Provider>
  );
};

export { WinStateContext, WinState };
