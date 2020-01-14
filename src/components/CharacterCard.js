import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <div className="character_wrapper">
            <Link to={`/character/${props.character.id}`}>
                <img src={props.character.image} alt={props.character.name} className="character_img-photo" />
                <div className="character_info">
                    <h4 className="character_info-name">{props.character.name}</h4>
                    <p className="character_info-specie">{props.character.species}</p>
                </div>
            </Link>
        </div>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.object
};

export default CharacterCard;