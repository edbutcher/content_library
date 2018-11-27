import React from 'react';

import axios from 'axios';
import ImagePart from '../ImagePart';
import VideoPart from '../VideoPart';
import AudioPart from '../AudioPart';

import './style.css';

class MediaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        }
    };

    componentDidMount() {
        let fileId = this.props.match.params.id

        axios.get(`http://localhost:9000/file_info/${fileId}`)
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

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
              const type = data.type
            return (
                (type === 'image/jpeg' && <ImagePart selectedItem={data}/>) ||
                (type === 'video/mp4' && <VideoPart selectedItem={data} />) ||
                (type === 'audio/mpeg' && <AudioPart selectedItem={data} />)
            )
          }
    }
    
}

export default MediaItem;