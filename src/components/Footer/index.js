import React from 'react';

import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="footer__container">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/media" >Media</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
                <p>Library ©</p>
            </div>
        </footer>
    );
};

export default Footer;