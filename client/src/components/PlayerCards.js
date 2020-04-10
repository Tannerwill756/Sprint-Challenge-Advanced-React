import React from 'react';

function PlayerCards (props) {

    return(
        <div>
        {props.playerData.map((info) => (
            <div key={info.id}>
                <h2>{info.name}</h2>
                <p>Country: {info.country}</p>
                <p>Number of Searches: {info.searches}</p>
            </div>
        ))}
        </div>
    )
}

export default PlayerCards;