import React from 'react';

import GoogleMapPart from './../GoogleMapPart';
import conversation from './../../images/contact/conversation.jpg';

import './style.scss';
import myConfig from '../../myConfig';


const ContactPage = () => {
    return(
        <main>
            <section >
                <div className="contactTitle">
                    <div className="contactTitle__text">
                        <h1>Library</h1>
                        <p>We strive to give everyone the opportunity to show themselves and see others.</p>
                        </div>
                    <img className="contactTitle__image" src={conversation} alt="img"/>
                </div>
            </section>
            <section className="contact__container">
                <div>
                    <GoogleMapPart isMarkerShown
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${myConfig.mapsKey}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div>
                    <p>Adress: 1, Maidan Nezalezhnosti, Kyiv, 02000</p>
                    <p>Phone number: +380 77 777 7777 (number is unavailable)</p>
                </div>    
            </section>
            <section className="contact__container">Img with name</section>
        </main>
    );
};

export default ContactPage;