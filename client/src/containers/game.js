import React, {useState, useEffect} from 'react';

const Game = () => {

    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getTasks()
    })

    const getTasks = () => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(tasks => setTasks(tasks))
    }

    const postUser = (data) => {
        return fetch('http://localhost:5000/USERS', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    const addUser = (user) => {
        const tempUser = users.map(user => user);
        tempUser.push(user);
        setUsers(tempUser);
    }

    return(
        
    )

}

export default Game;