import React from 'react';

import './style.css';

class VideoPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    render() {
        let {fileName, type, url } = this.props.video;
        
        return <div>
            <h3>{fileName}</h3>
            <video controls>
                <source 
                    src={`${url}${fileName}`} 
                    type={type}
                />
            </video>
        </div>
    }
    
}

export default VideoPart;