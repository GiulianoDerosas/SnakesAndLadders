import React, {useState, useEffect} from 'react';
import UserForm from '../components/UserForm.js'

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

    return (
        <UserForm />
    )

}

export default Game;