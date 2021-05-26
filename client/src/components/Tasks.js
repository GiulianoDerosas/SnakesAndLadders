import React from 'react';

const Tasks = ({randomTask, randomAction, noTask}) => {


    return (
 
    <div className="task-container">
      <div className="nes-container with-title is-centered">
        <h2 className="title">Tasks!</h2>
        <p className="flashing-tasks">{randomTask}</p>
        <p className="flashing-tasks">{randomAction}</p>
        <p className="flashing-tasks">{noTask}</p>
        <br></br>
        <p className="fade-quote">"24 hours in a day. 24 beers in a case. Coincidence? I think not." ~ H.L. Mencken"</p>
      </div>
    </div>
    )
};

export default Tasks;




