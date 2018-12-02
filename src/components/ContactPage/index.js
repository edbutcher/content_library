import React from 'react';

import GoogleMapPart from '../GoogleMapPart';
import myConfig from '../../myConfig';

import conversation from '../../images/contact/conversation.jpg';
import unicorn from '../../images/icons/unicorn.svg';

import './style.scss';


const ContactPage = () => {
    return(
        <main>
            <section >
                <div className="contactTitle">
                    <div className="contactTitle__text">
                        <h1>Library</h1>
                        <p>We are committed to giving everyone the opportunity to share</p>
                        </div>
                    <img className="contactTitle__image" src={ conversation } alt="img"/>
                </div>
            </section>

            <section className="contact__container">
                <div className="contact__title">
                    <h1>Adress</h1>
                    <p>
                        1, Maidan Nezalezhnosti, Kyiv, 02000
                        <br/>
                        Phone number: +380 77 777 7777
                    </p>
                </div>
                <div className="contact__image">
                    <GoogleMapPart 
                        isMarkerShown
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${myConfig.mapsKey}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `40rem` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </section>

            <section className="contact__container">
                <div className="contact__title">
                    <h1>Page Founder</h1>
                    <p>
                        Name: Aleksandr Poliakov
                        <br/>
                        Position: Senior dreamer
                    </p>
                </div>
                <div className="contact__image">
                    <img src={ unicorn } alt="img"/>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;