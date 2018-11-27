import React from 'react';

import ImageCarousel from '../ImageCarousel';
import ImageGallery from '../ImageGallery';

import './style.css';

const HomePage = () => {
    return(
        <main className="main">

            <ImageCarousel />

            <section className="homepage__container">
                <h1 className="homepage__title">Text of HomePage</h1>
                <p className="homepage__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id eaque laudantium vel, unde maxime perspiciatis 
                    doloremque nemo illum esse libero deleniti maiores beatae et ratione molestiae? Illum quos voluptatibus fugiat ipsum. 
                    Officiis quia sequi ducimus, veniam cumque iure, repellendus totam magni itaque consectetur quas asperiores aliquid 
                    dicta blanditiis ipsum officia numquam quibusdam enim tempore, saepe consequuntur distinctio nostrum ad.
                </p>
            </section>

            <ImageGallery />

            <section className="homepage__container">
                <h1 className="homepage__title">Text of HomePage</h1>
                <p className="homepage__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id eaque laudantium vel, unde maxime perspiciatis 
                    doloremque nemo illum esse libero deleniti maiores beatae et ratione molestiae? Illum quos voluptatibus fugiat ipsum. 
                    Officiis quia sequi ducimus, veniam cumque iure, repellendus totam magni itaque consectetur quas asperiores aliquid 
                    dicta blanditiis ipsum officia numquam quibusdam enim tempore, saepe consequuntur distinctio nostrum ad.
                </p>
            </section>
        </main>
    );
};

export default HomePage;