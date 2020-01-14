import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <div className="character_wrapper">
            <Link to={`/character/${props.character.id}`}>
                <div className="character_img-wrapper">
                    <img src={props.character.image} alt={props.character.name} className="character_img-photo" />
                </div>
                <div className="character_info">
                    <h4 className="character_info-name">{props.character.name}</h4>
                    <p className="character_info-specie">{props.character.species}</p>
                </div>
            </Link>
        </div>
    )
}

export default CharacterCard;