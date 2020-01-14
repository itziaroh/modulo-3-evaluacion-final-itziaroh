import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    const { image, name, status, species, origin, episode } = props.character;

    return (
        <div className="detail-wrapper">
            <Header />
            <Link to={'/character/'} className="back_btn">Back</Link>
            <div className="character_detail-card">
                <img src={image} alt={name} className="character_detail-image" />
                <div className="character_card-info">
                    <h4 className="character_card-name">{name}</h4>
                    <p className="character_card-status">Status: {status === 'Alive' ? status + ' 💃🏻' : status === 'Dead' ? status + ' ☠' : status + ' 🤷🏻‍♀'}</p>
                    <p className="character_card-specie">Species: {species === 'Human' ? species + ' 💁🏻‍♂' : species + '👽'}</p>
                    {/* <p>Origin: {origin.name}</p>
                    <p>Episodes: {episode.length}</p> */}
                </div>
            </div>
        </div >
    )
}

CharacterDetail.propTypes = {
    character: PropTypes.object
};

export default CharacterDetail;