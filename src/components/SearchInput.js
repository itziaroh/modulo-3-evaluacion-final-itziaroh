import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = props => {

    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    return (
        <div className="input_wrapper">
            <h3 className="input_label">Rick and Morty characters finder</h3>
            <input type="text" onChange={handleChange} className="input_search" placeholder="Enter character name..." />
        </div>
    )
}

SearchInput.propTypes = {
    handleChange: PropTypes.func
};

export default SearchInput;