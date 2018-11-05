import React from 'react';

import './style.css';

const ImageGallery = (props) => {
    return(
        <section id="gallery">
            {
                props.gallery.map((item, index) => {
                    return (
                        <div className="gallery__item" key={index}>
                            <img className="gallery__image" src={item.src} alt={item.name}/>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default ImageGallery;