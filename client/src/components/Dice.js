import React, { useState } from 'react'

const Dice = ({getRoll}) => {

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
        console.log(newRoll);
        getRoll(newRoll)
    }



return (
        <>
            <div className="dice">
                <img className="dice-image" alt="" src=""/>
            </div>
            <p>You rolled a {newRoll}</p>
            <button onClick={onClick}>Roll Dice</button>
        </>
    )

}
        
export default Dice;