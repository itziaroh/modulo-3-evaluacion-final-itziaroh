import React from 'react';

const CharacterCard = props => {
    return (
        <div>
            <img src={props.imgUrl} alt={props.name} />
            <h4>{props.name}</h4>
            <p>{props.specie}</p>
        </div>
    )
}

export default CharacterCard;