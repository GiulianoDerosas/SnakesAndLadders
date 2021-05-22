import React, {useState} from 'react'
const Dice = () => {

    const [rollValue, setRollValue] = useState(null);

    function onClick () {
        let roll = Math.floor(Math.random() * 6) +1;
        setRollValue(roll)
}

return (
    <>
    <p>You rolled a {rollValue}</p>
    <button onClick={onClick}>Roll Dice</button>
    </>
)

}

export default Dice;
