import React, {useState} from 'react'


const Dice = () => {

    const [rollValue, setRollValue] = useState(null);

    function onClick () {
        let roll = Math.floor(Math.random() * 6) +1;
        setRollValue(roll)

        document.querySelector(".dice-image").setAttribute("src",
        "https://media.geeksforgeeks.org/wp-content/uploads/2020050814100"+ roll + "/dice" + roll + ".png");}


    return (
        <>
        <div class="dice">
            <img class="dice-image" alt="" src=""/>
        </div>
        <p>You rolled a {rollValue}</p>
        <button onClick={onClick}>Roll Dice</button>
        </>
        )
    }

export default Dice;