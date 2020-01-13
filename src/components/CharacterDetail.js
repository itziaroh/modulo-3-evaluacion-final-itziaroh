import React from 'react';

const CharacterDetail = props => {
    const { image, name, status, species, origin, episode } = props.character;
    return (
        <div className="character_detail-card">
            <img src={image} alt={name} />
            <div className="character_card-info">
                <h4>{name}</h4>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                {/* <p>Origin: {origin.name}</p>
                <p>Episodes: {episode.length}</p> */}
            </div>
        </div>
    )
}

export default CharacterDetail;