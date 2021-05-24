import { useState } from 'react';
const PlayerForm = ({addPlayer}) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [xAxis] = useState(0)
  const [yAxis] = useState(675)
  const [currentSquare] = useState(0)
//   const [players, setPlayers] = useState([])

  const handleNameChange = (ev) => setName(ev.target.value);
  const handleColorChange = (ev) => setColor(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();
    addPlayer({
      name: name,
      color: color,
      xAxis: xAxis,
      yAxis: yAxis,
      currentSquare: currentSquare
    });

    setName("");
    setColor("");
  }

  return (
      <>
    <form onSubmit={handleSubmit}>
      <h3>Add a player</h3>
      <div className="form">
        <label htmlFor="name">Guest Name:</label>
        <input
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          required 
          onChange={handleNameChange}
        />
      </div>
      <div className="form">
        <label htmlFor="color">Choose Color:</label>
        <select  
          id="color" 
          name="color" 
          value={color} 
          required 
          onChange={handleColorChange}
        >
            <option value="#0099ff">Select A Color</option>
            <option value="#0099ff">Blue</option>
            <option value="#ffcc00">Yellow</option>
            <option value="#00cc00">Green</option>
            <option value="#cc00ff">Pink</option>
        </select>
      </div>
      <input type="submit" name="submit" value="Save" />
    </form>
    </>
  )
};
export default PlayerForm;