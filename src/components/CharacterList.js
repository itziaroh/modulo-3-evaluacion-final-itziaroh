import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    return (
        <ul>
            {props.allCharacters.map(character => {
                return (
                    <li>
                        <CharacterCard
                            imgUrl={character.image}
                            name={character.name}
                            specie={character.species}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default CharacterList;