import React from 'react';

import './style.scss';

const AudioPart = (props) => {
    const { fileName, type } = props.selectedItem;
    const url = 'http://localhost:9000/file/';

    return <div>
        <audio controls>
        <source 
            src={`${url}${fileName}`} 
            type={type} 
        />
         </audio>
    <h3>{fileName}</h3>
    </div>
}

export default AudioPart;