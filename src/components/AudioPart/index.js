import React from 'react';

import './style.css';

const AudioPart = (props) => {
    const { fileName, type } = props.audio;
    const url = 'http://localhost:9000/file/';

    return <audio controls>
        <h3>{fileName}</h3>
    <source 
        src={`${url}${fileName}`} 
        type={type} 
    />
</audio>
}

export default AudioPart;