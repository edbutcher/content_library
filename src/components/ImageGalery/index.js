import React from 'react';

import r1 from '../../images/gallery/random_img_1.jpg';
import r2 from '../../images/gallery/random_img_2.jpg';
import r3 from '../../images/gallery/random_img_3.jpg';
import r4 from '../../images/gallery/random_img_4.jpg';
import r5 from '../../images/gallery/random_img_5.jpg';
import r6 from '../../images/gallery/random_img_6.jpg';
import r7 from '../../images/gallery/random_img_7.jpg';
import r8 from '../../images/gallery/random_img_8.jpg';
import r9 from '../../images/gallery/random_img_9.jpg';

import style from './style.css';

const ImageGallery = () => {
    let images = [r1, r2, r3, r4, r4, r5, r6, r7, r8, r9];
    return(
        <section className={style.gallery}>          
            {
                images.map((item, index) => {
                    return (
                        <div className={style.gallery__item} key={index}>
                            <img className={style.gallery__image} src={item} alt="img"/>
                        </div>
                    )
                })
            }
        </section>
    );

    
};

export default ImageGallery;