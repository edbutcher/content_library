import React from 'react';

import sound from './../../images/carousel/sound.jpg';
import video from './../../images/carousel/video.jpg';
import text from './../../images/carousel/text.jpg';
import add_yours from './../../images/carousel/add_yours.jpg';
import './style.scss';

class ImageCarousel extends React.Component {
    state = {
        activeIndex: 0,
        carousel: [
            {
                "title": "watch the video",
                "src": video
            },
            {
                "title": "listen to audio",
                "src": sound
            },
            {
                "title": "read the text",
                "src": text
            },
            {
                "title": "add yours",
                "src": add_yours
            }
        ]
    }

    onNextClick = () => {
        if(this.state.activeIndex < this.state.carousel.length -1) {
            this.setState({activeIndex: this.state.activeIndex + 1});
        } else {
            this.setState({activeIndex: 0});
        }
    }

    onPrevClick = () => {
        if(this.state.activeIndex > 0) {
            this.setState({activeIndex: this.state.activeIndex - 1});
        } else {
            this.setState({activeIndex: this.state.carousel.length -1});
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
                        this.state.carousel.map((item, index) => {
                            return (
                                <div className="slide" key={index}>
                                    <h1 className="slide__text">{item.title}</h1>
                                    <img className="slide__image" src={item.src} alt={item.title}/>
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