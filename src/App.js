import Start from "./components/startgame/start";
import Board from "./components/boardgame/board";
import WinState from "./components/winstate/winState";
import { useContext } from "react";
import { GameContext } from "./context/GameContext";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === 'start' && <Start />}
        {screen === 'game' && <Board />}
      </div>
      <WinState />
    </div>
  );
}

export default App;
