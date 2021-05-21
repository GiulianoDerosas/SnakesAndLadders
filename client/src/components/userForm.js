import React, {useState} from 'react';

const UserForm = () => {

    const [formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        postPlayers(formData)
        .then(data => addUser(data))
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Player Name</label>
            <input onChange={onChange} type="text" id="player_name"/>
            <label>Counter</label>
            <select onChange={onChange} id="player_counter">
            <option id="player_counter">SPRITE1</option>
            <option id="player_counter">SPRITE2</option>
            <option id="player_counter">SPRITE3</option>
            </select>
            <input type='Submit' value='Add Player'></input>
        </form>
    )
}

export default UserForm;