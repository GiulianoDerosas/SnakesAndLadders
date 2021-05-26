import Game from "./containers/game"
import "nes.css/css/nes.min.css";
// npm install nes.css

function App() {
  return (
    <div className="App">
      <h1>Snakes and Ladders</h1>
      <Game/>
    </div>
  );
}

export default App;
