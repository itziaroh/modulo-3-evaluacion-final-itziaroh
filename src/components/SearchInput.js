import React from 'react';

const SearchInput = props => {

    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    return (
        <div className="input_wrapper">
            <h3 className="input_label">Rick and Morty characters finder</h3>
            <input type="text" onChange={handleChange} className="input_search" />
        </div>
    )
}

export default SearchInput;