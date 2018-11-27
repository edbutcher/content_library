import React from 'react';

import './style.css';

const ImagePart = (props) => {
    const fileName = props.selectedItem.fileName;
    const url = 'http://localhost:9000/file/';

    return (<div>
        <img 
            src={`${url}${fileName}`} 
            alt={fileName ? fileName : 'image crash'}
        />
        <h3>{fileName}</h3>
    </div>)

    
}

export default ImagePart;