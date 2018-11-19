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
        const selectedItem = this.props.selectedItem;
        console.log(this.props.selectedItem)
        let url = 'http://localhost:9000/file/';

        return (<div>
            1
            {/* <h3>{this.props.selectedItem.fileName}</h3> */}
            {/* <img 
                src={`${url}${fileName}`} 
                alt={fileName ? fileName : 'image crash'}
            /> */}
        </div>)
    }
    
}

export default ImagePart;