import React from 'react';

const Tasks = ({randomTask, randomAction, noTask, previousPlayer, livePlayer}) => {


    return (
 
    <div className="task-container">
      <div className="nes-container with-title is-centered">
        <h2 className="title">Player Tasks!</h2>
<<<<<<< HEAD
        <p className="flashing-tasks">{previousPlayer.name} {randomTask}{randomAction}{noTask}</p>
        <p>-- Up Next --</p>
        <br></br>
        <p className="fade-quote">{livePlayer.name}'s Roll</p>
=======
    
        {/* livePlayer ? */}
        <p className="fade-quote">{livePlayer.name}'s Roll</p>
        {/* <p>"Brace yourselves..."</p> */}
        
        <br></br>
        <p className="flashing-tasks">{previousPlayer.name}{randomTask}{randomAction}{noTask}</p>
>>>>>>> 877aeb8be191be3ae0b4c7fed0d5a6c0d43c2e08
      </div>
    </div>
    )
};

export default Tasks;