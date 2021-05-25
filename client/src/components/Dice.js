import React, { useState } from 'react'

const Dice = () => {

    const [rollValue, setRollValue] = useState(null);

    function onClick() {
        let roll = Math.floor(Math.random() * 6) + 1;
        setRollValue(roll)
        if (roll === 1) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png")
        } else if (roll === 2) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png")
        } else {
        document.querySelector(".dice-image").setAttribute("src",
        "https://media.geeksforgeeks.org/wp-content/uploads/2020050814100"+roll+"/dice" + roll +".png")}
        console.log(roll);
    }

return (
        <div>
            <div className="dice">
                <img className="dice-image" alt="" src=""/>
            </div>
            <p>You rolled a {rollValue}</p>
            <button onClick={onClick}>Roll Dice</button>
        </div>
    )

}
        
export default Dice;