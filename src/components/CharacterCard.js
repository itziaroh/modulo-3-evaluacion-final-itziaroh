import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <div className="character_wrapper">
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image} alt={props.character.name} className="character_img" />
                <h4 className="character_name">{props.character.name}</h4>
                <p className="character_specie">{props.character.species}</p>
            </Link>
        </div>
    )
}

export default CharacterCard;