import React from 'react';
import PropTypes from 'prop-types';
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

Home.propTypes = {
    searchValue: PropTypes.string,
    allCharacters: PropTypes.array,
    handleChange: PropTypes.func
};

export default Home;