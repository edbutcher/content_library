import React from 'react';

import './style.css';

class ImagePart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    render() {
        let {fileName } = this.props.image;
        let url = 'http://localhost:9000/file/';

        return <div>
            <h3>{fileName}</h3>
            <img 
                src={`${url}${fileName}`} 
                alt={fileName ? fileName : 'image crash'}
            />
        </div>
    }
    
}

export default ImagePart;