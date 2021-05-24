import React, {useState} from 'react';
import {postPlayer} from "../services/dbServices"

const PlayerForm = ({addPlayer}) => {

    const [formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postPlayer(formData)
        .then(data => addPlayer(data))
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Player One</label>
            <input required placeholder="enter your name"
                type="text"
                onChange={onChange}  
                id="name"
            />
            <label>Player Two</label>
            <input required placeholder="enter your name"
                type="text"
                onChange={onChange}  
                id="name"
            />
            <label>Player Three</label>
            <input placeholder="enter your name"
                type="text"
                onChange={onChange}  
                id="name"
            />
            <label>Player Four</label>
            <input placeholder="enter your name"
                type="text"
                onChange={onChange}  
                id="name"
            />
            {/* <label>Counter</label>
            <select 
                id="playerCounter"
                onChange={onChange}
            >
                <option value="👩🏼‍🦰">👩🏼‍🦰</option>
                <option value="👨🏾‍🦳">👨🏾‍🦳</option>
                <option value="🦹🏻‍♀️">🦹🏻‍♀️</option>
                <option value="💁🏾">💁🏾</option>
            </select> */}
            <button type='submit' id="save">Start Game</button>
        </form>
    )
}

export default PlayerForm;