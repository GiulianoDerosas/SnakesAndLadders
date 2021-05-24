import React from 'react';
import PlayerItem from './PlayerItem'


const PlayerList = ({players}) => {

    const playerList = players.map((player, index) => {
        return <PlayerItem player={player} key={index}/>
    });

    return(
        <div>
            {playerList}
        </div>
    )

};

export default PlayerList;