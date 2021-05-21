import React, {useState, useEffect} from 'react';

const Game = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    })

    const getTasks = () => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(tasks => setTasks(tasks))
    }

    return(

    )

}

export default Game;