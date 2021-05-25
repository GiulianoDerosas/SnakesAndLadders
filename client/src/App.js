import Game from "./containers/game"
import React from 'react';
import "nes.css/css/nes.min.css";

function App() {
  return (
    <div className="App">
      <p>Snakes and Ladders</p>
      <Game/>
    </div>
  );
}

export default App;
