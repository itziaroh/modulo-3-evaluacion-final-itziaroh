import React from 'react';

const SearchInput = props => {

    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default SearchInput;