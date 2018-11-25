import React, { Component } from 'react';

import './style.scss';

class InputSelector extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 'all' }
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label>
                Select type of files:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="all">all</option>
                    <option value="image">image</option>
                    <option value="audio">audio</option>
                    <option value="video">video</option>
                </select>
                </label>
            </div>
        )
    };
};

export default InputSelector;