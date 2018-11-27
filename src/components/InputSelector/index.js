import React from 'react';

import style from './style.scss';

const InputSelector = (props) => {
    const { selectorCategory, selectorFilterChange} = props

    return (
        <div>
            <label>
            Select type of files:
            <select value={ selectorCategory } onChange={ event => selectorFilterChange(event.target.value) }>
                <option style={style} value="all">all</option>
                <option value="image">image</option>
                <option value="audio">audio</option>
                <option value="video">video</option>
            </select>
            </label>
        </div>
    )

};

export default InputSelector;