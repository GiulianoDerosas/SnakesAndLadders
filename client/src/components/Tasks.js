import React from 'react';

const Tasks = ({tasks, onTaskClick}) => {

    

    return (
        console.log(tasks)
        <p onClick={onTaskClick}>{tasks[0].task}</p>
    )
};

export default Tasks;

// button click and grab a task

// getTasks() in GameService

