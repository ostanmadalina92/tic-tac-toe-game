// Make sure Prettier is configured
// in order to have *pretty code*

import { useState, createContext } from "react";

const WinStateContext = createContext();

const WinState = props => {
  // Use variable names that
  // better tell the reader what
  // its purpose is
  const [show, setShow] = useState(false);

  // You should create specialized functions
  // for this state setter aswell
  const [mode, setMode] = useState("winner");

  const showWinState = () => setShow(true);
  const hideWinState = () => setShow(false);

  return (
    <WinStateContext.Provider
      value={{ show, winStateMode: mode, setWinStateMode: setMode, showWinState, hideWinState }}
    >
      {props.children}
    </WinStateContext.Provider>
  );
};

// You should also export a hook for
// consuming this context
//
// https://kyleshevlin.com/how-to-use-react-context-effectively

export { WinStateContext, WinState };
