import React from 'react';

import './style.css';

class MediaPage extends React.Component {
    render() {
        return(
            <div className="media__container">
                <div>Media Page!</div>
                <div>Searching input</div>
                <div>
                    <div className="gallery__item">
                        <img className="gallery__image" src="/images/gallery/random_img_4.jpg" alt="random"/>
                    </div>
                    <div>
                        <h1>Title of item</h1>
                    </div>
                </div>
                <div>Client pagination</div>
            </div>
            
        );
    };
};

export default MediaPage;