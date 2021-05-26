import React, { useState } from 'react'

const Dice = ({getRoll, livePlayer}) => {

    let newRoll
    
    function onClick() {
        newRoll = Math.floor(Math.random() * 6) + 1;
        if (newRoll === 1) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png")
        } else if (newRoll === 2) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png")
        } else {
        document.querySelector(".dice-image").setAttribute("src",
        "https://media.geeksforgeeks.org/wp-content/uploads/2020050814100"+newRoll+"/dice" + newRoll +".png")}
        getRoll(newRoll)
    }



return (
        <div>
            <div className="dice">
                <img className="dice-image" alt="" src="https://media.istockphoto.com/vectors/drunk-guy-with-two-bottles-of-beerwine-cartoon-pixel-art-character-vector-id1147100739"/>
            </div>

            <div className="dice-container">
                <button className="nes-btn is-success" onClick={onClick}>Roll Dice</button>
            </div>
        </div>
    )

}
        
export default Dice;