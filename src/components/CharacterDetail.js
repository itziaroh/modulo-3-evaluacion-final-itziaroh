import React from 'react';
import Header from './Header';

const CharacterDetail = props => {
    const { image, name, status, species, origin, episode } = props.character;
    return (
        <div className="detail-wrapper">
            <Header />
            <div className="character_detail-card">
                <img src={image} alt={name} className="character_detail-image" />
                <div className="character_card-info">
                    <h4 className="character_card-name">{name}</h4>
                    <p className="character_card-status">Status: {status}</p>
                    <p className="character_card-specie">Species: {species}</p>
                    {/* <p>Origin: {origin.name}</p>
                <p>Episodes: {episode.length}</p> */}
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail;