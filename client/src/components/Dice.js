import React from 'react'

const Dice = ({getRoll}) => {

    let newRoll
    function onClick() {
        newRoll = Math.floor(Math.random() * 6) + 1;
        if (newRoll === 1) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/wNVtBmy/dice1.png")
        } else if (newRoll === 2) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/9sZWS55/dice2.png")
        } else if (newRoll === 3) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/m5MRw6C/dice3.png")
        } else if (newRoll === 4) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/PQqZjdh/dice4.png")
        } else if (newRoll === 5) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/ZXFt9Ry/dice5.png")
        } else if (newRoll === 6) {
            document.querySelector(".dice-image").setAttribute("src",
            "https://i.ibb.co/VLcm8HC/dice6.png")
        }
        console.log(newRoll);
        getRoll(newRoll)
    }

return (
        <div>
            <div className="dice">
                <img className="dice-image" alt="" src="https://i.ibb.co/wNVtBmy/dice1.png"/>
            </div>
            <br />
            <div className="dice-container">
                <button className="nes-btn is-warning" onClick={onClick}>Roll Dice</button>
            </div>
        </div>
    )

}
        
export default Dice;