import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import CharacterList from './CharacterList';

const Home = props => {
    return (
        <div className="home_wrapper">
            <Header />
            <SearchInput
                handleChange={props.handleChange}
            />
            <CharacterList
                allCharacters={props.allCharacters}
                searchValue={props.searchValue}
            />
        </div>
    )
}

export default Home;