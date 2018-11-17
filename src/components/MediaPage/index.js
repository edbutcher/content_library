import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import headphones from './../../images/icons/headphones.svg';
import picture from './../../images/icons/picture.svg';
import videoCamera from './../../images/icons/video-camera.svg';
// import openBook from './../../images/icons/open-book-top-view.svg';

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

        return(
            <div className="media__container">
                <div>Searching input</div>
                <div className="mediapage__container">
                    {
                        data.map((item, index) => {
                            return(
                                (item.type === 'image/jpeg' || item.type === 'audio/mpeg' || item.type === 'video/mp4') && 
                                <div className="meadia__item" key={index}>
                                    <Link to={`/media/${item.fileId}`}>
                                        { item.type === 'image/jpeg' && <img src={picture} alt="img of img" /> }
                                        { item.type === 'audio/mpeg' && <img src={headphones} alt="music img" /> }
                                        { item.type === 'video/mp4' && <img src={videoCamera} alt="video img" /> }
                                        {/* { item.type === 'image/jpeg' && <img src={openBook} alt="text img" /> } */}
                                        <div>
                                            { item.fileName }
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div>Client pagination</div>
            </div>
            
        );
    };
};

export default MediaPage;