import React from 'react';

import './style.css';

class ImageCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }

    onNextClick() {
        if(this.state.activeIndex < this.props.carousel.length -1) {
            this.setState({activeIndex: this.state.activeIndex + 1});
        } else {
            this.setState({activeIndex: 0});
        }
    }

    onPrevClick() {
        if(this.state.activeIndex > 0) {
            this.setState({activeIndex: this.state.activeIndex - 1});
        } else {
            this.setState({activeIndex: this.props.carousel.length -1});
        }
    }

    render() {
        let sliderStyle ={
            transform:`translateX(${this.state.activeIndex * -25}%)`,
            transition: '0.4s'
        }
        
        return(
            <section className="carousel">
                <div onClick={this.onPrevClick} className="carousel__button">
                    <span className="button__arrow">◀</span>
                </div>
                <div onClick={this.onNextClick} className="carousel__button carousel__button--right">
                    <span className="button__arrow">▶</span>
                </div>
                
                <div className="carousel__container" style={sliderStyle}>
                    {
                        this.props.carousel.map((item, index) => {
                            return (
                                <div className="slide" key={index}>
                                    <h1 className="slide__text">{item.title}</h1>
                                    <img className="slide__image" src={item.src} alt={item.name}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    };
};

export default ImageCarousel;