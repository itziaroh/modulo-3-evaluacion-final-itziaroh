import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';


const CharacterList = props => {

    const searchValue = props.searchValue.toLowerCase()
    return (
        <ul className="character_list">
            {props.allCharacters
                .filter(character => searchValue === '' || character.name.toLowerCase().includes(searchValue))
                .map(character => {
                    return (
                        <li key={character.id} className="character_item">
                            <CharacterCard
                                character={character}
                            />
                        </li>
                    )
                })}
        </ul>
    )
}

CharacterList.propTypes = {
    searchValue: PropTypes.string,
    allCharacters: PropTypes.array
};

export default CharacterList;