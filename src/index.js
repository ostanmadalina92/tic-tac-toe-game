import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WinState } from "./context/winStateContext";
import { GameState } from "./context/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WinState>
      <GameState>
        <App />
      </GameState>
    </WinState>
  </React.StrictMode>
);

reportWebVitals();
