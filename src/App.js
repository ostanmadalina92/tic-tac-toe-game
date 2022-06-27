import Start from "./components/startgame/start";
import Board from "./components/boardgame/board";
import WinState from "./components/winstate/winState";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Start /> */}
        <Board />
      </div>
      <WinState />
    </div>
  );
}

export default App;
