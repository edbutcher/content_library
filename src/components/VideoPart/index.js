import React from 'react';

import './style.css';

const VideoPart = (props) => {
    const { fileName, type } = props.selectedItem;
    const url = 'http://localhost:9000/file/';
    
    return <div>
        <video controls>
            <source 
                src={`${url}${fileName}`} 
                type={type}
            />
        </video>
        <h3>{fileName}</h3>
    </div>

    
}

export default VideoPart;