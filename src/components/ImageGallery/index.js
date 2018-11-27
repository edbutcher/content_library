import React, { Component } from 'react';

import axios from 'axios';

import './style.scss';

class ImageGallery extends Component {
    state = {
        error: null,
        isLoaded: false,
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:9000/file_info')
            .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    data: result.data
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
    }

    render() {
        const { error, isLoaded, data } = this.state;
        const url = 'http://localhost:9000/file/';

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return(
                <section className="gallery">
                    {
                        data.filter(item => item.type.split('/')[0] === 'image')
                            .slice(0,10)
                            .map(item => {
                                return (
                                    <div className="gallery__item" key={item.fileId}>
                                        <img className="gallery__image" src={url + item.fileName} alt="img"/>
                                    </div>
                                )
                            })
                    }
                </section>
            );
          }

    }
};

export default ImageGallery;