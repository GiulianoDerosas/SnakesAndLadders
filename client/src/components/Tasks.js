import React from 'react';

const Tasks = ({tasks, task, randomTask, getRandomTask}) => {

    // const randomTask = getRandomTask()

    // const displayTask = 

    return (
        // <div>
        // {/* {randomTask} */}
        // {/* {task} */}
        // {/* <button onClick={getRandomTask}>Get Task</button> */}
        // {randomTask}
        // </div>

    <div className="task-container">
      <div className="nes-container with-title is-centered">
        <h2 className="title">Tasks!</h2>
        <p className="flashing-tasks">{randomTask}</p>
        <br></br>
        <p className="fade-quote">"24 hours in a day. 24 beers in a case. Coincidence? I think not." ~ H.L. Mencken"</p>
      </div>
    </div>
    )
};

export default Tasks;

// button click and grab a task



