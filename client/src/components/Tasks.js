import React from 'react';

const Tasks = ({randomTask, randomAction, noTask, previousPlayer, livePlayer}) => {


    return (
 
    <div className="task-container">
      <div className="nes-container with-title is-centered">
        <h2 className="title">Player Tasks!</h2>
        <p className="fade-quote">{livePlayer.name}'s Roll</p>
        <br></br>
        <p className="flashing-tasks">{previousPlayer.name}{randomTask}{randomAction}{noTask}</p>
      </div>
    </div>
    )
};

export default Tasks;