import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <div>
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image} alt={props.character.name} />
                <h4>{props.character.name}</h4>
                <p>{props.character.species}</p>
            </Link>
        </div>
    )
}

export default CharacterCard;