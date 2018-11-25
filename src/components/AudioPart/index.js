import React from 'react';

import './style.scss';

const AudioPart = (props) => {
    const { fileName, type, url } = props.audio;

    return <audio controls>
        <h3>{fileName}</h3>
        <source 
            src={`${url}${fileName}`} 
            type={type} 
        />
    </audio>
}

export default AudioPart;