import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const searchValue = props.searchValue.toLowerCase()
    return (
        <ul>
            {props.allCharacters
                .filter(character => searchValue === '' || character.name.toLowerCase().includes(searchValue))
                .map(character => {
                    return (
                        <li key={character.id}>
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