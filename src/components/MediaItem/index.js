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
        const { selectedItem } = this.state
        // selectedItem.url = 'http://localhost:9000/file/';
        console.log(selectedItem);
        return <ImagePart image={selectedItem}/>
    }
    
}

export default MediaItem;