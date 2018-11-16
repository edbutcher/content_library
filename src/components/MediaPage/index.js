import React from 'react';

import axios from 'axios';
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
                                <div className="gallery__item">
                                    { 
                                        item.type === 'image/jpeg' && 
                                        <img 
                                            src={`${url}${item.fileName}`} 
                                            alt={item.fileName ? item.fileName : 'image crash'}
                                        />
                                    }
                                    { 
                                        item.type === 'audio/mpeg' && 
                                        <audio controls>
                                            <source 
                                                src={`${url}${item.fileName}`} 
                                                type={item.type} 
                                                alt={item.fileName ? item.fileName : 'image crash'}
                                            />
                                        </audio>
                                    }
                                    {
                                        item.type === 'video/mp4' && 
                                        <video controls>
                                            <source 
                                                src={`${url}${item.fileName}`} 
                                                type={item.type}
                                            />
                                        </video>
                                    }
                                </div>
                                <div>
                                    <h1>{item.fileName}</h1>
                                </div>
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