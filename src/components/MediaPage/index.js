import React from 'react';

import axios from 'axios';

import FormUplod from '../FormUpload';
import InputSelector from '../InputSelector';
import PrevIconComponent from '../PrevIconComponent';

import './style.scss';

class MediaPage extends React.Component {
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

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return(
                <div className="media__container">
                    <FormUplod />
                    <InputSelector />
                    <div>Search input</div>
                    <div className="mediapage__container">
                        { 
                            data.map((item, index) => <PrevIconComponent item={item} key={index}/>)
                        }
                    </div>
                    <div>Client pagination</div>
                </div>
            );
          }
    };
};

export default MediaPage;