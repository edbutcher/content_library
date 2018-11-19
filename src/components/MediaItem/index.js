import React from 'react';

import axios from 'axios';
import ImagePart from '../ImagePart';

import './style.css';

class MediaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    componentDidMount() {
        let fileId = this.props.match.params.id
        axios.get(`http://localhost:9000/file_info/${fileId}`)
            .then(response => this.setState({selectedItem: response.data}))
    }

    render() {
        let { selectedItem } = this.state
        // selectedItem.url = 'http://localhost:9000/file/';
        return <ImagePart selectedItem={selectedItem}/>
    }
    
}

export default MediaItem;