import Game from "./containers/game"
import "nes.css/css/nes.min.css";
// npm install nes.css

function App() {
  return (
    <div className="App">
      <p>Snakes and Ladders</p>
      <Game/>
    </div>
  );
}

export default App;
