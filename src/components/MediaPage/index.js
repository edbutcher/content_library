import React from 'react';

import axios from 'axios';
import VideoPart from './../VideoPart';
import ImagePart from './../ImagePart';
import AudioPart from './../AudioPart';
import './style.css';

class MediaPage extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/file_info')
            .then(response => this.setState({data: response.data}))
    }

    render() {
        const { data } = this.state;
        const url = 'http://localhost:9000/file/';

        return(
            <div className="media__container">
                <div>Media Page!</div>
                <div>Searching input</div>
                {
                    data.map((item, index) => {
                        return(
                            <div key={index}>
                                { item.type === 'image/jpeg' && <ImagePart image={item} /> }
                                { item.type === 'audio/mpeg' && <AudioPart audio={item} /> }
                                { item.type === 'video/mp4' && <VideoPart video={item} /> }
                            </div>
                        )
                    })
                }
                
                <div>Client pagination</div>
            </div>
            
        );
    };
};

export default MediaPage;