import React, { Component } from 'react';

import axios from 'axios';

import FormUplod from '../FormUpload';
import InputSelector from '../InputSelector';
import PrevIconComponent from '../PrevIconComponent';

import './style.scss';

class MediaPage extends Component {
    state = {
        error: null,
        isLoaded: false,
        data: [],
        selectorCategory: 'all',
        chank: 0
    }

    componentDidMount() {
        axios.get('http://localhost:9000/file_info')
            .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    data: result.data,
                    chank: Math.ceil(result.data.length /10)
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

    selectorFilter = arr => {
        if(this.state.selectorCategory === 'all') {
            return arr
        }

        return arr.filter(item => item.type.split('/')[0] === this.state.selectorCategory)
    }

    selectorFilterChange = value => this.setState({selectorCategory: value})

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
                    <InputSelector 
                        selectorCategory={this.state.selectorCategory} 
                        selectorFilterChange={this.selectorFilterChange}
                    />
                    <div>Search input</div>
                    <div className="mediapage__container">
                        { 
                            this.selectorFilter(data).map((item, index) => <PrevIconComponent item={item} key={index}/>)
                        }
                    </div>
                    <div>Client pagination {this.state.chank}</div>
                </div>
            );
          }
    };
};

export default MediaPage;