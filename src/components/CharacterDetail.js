import React from 'react';

const CharacterDetail = props => {
    return (
        <div className="character_detail-card">
            <img src={props.imgUrl} alt={props.name} />
            <div className="character_card-info">
                <h4>{props.name}</h4>
                <p>Status: {props.status}</p>
                <p>Species: {props.specie}</p>
                <p>Origin: {props.origin}</p>
                <p>Episodes: {props.episodes}</p>
            </div>
        </div>
    )
}

export default CharacterDetail;