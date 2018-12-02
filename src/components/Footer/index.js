import React from 'react';

import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <NavLink 
                        exact 
                        to="/" 
                        className="footer__link"
                        activeClassName="active" 
                    >
                        Home
                    </NavLink>
                    <NavLink  
                        to="/media" 
                        className="footer__link" 
                        activeClassName="active" 
                    >
                        Media
                    </NavLink>
                    <NavLink  
                        to="/contact" 
                        className="footer__link" 
                        activeClassName="active" 
                    >
                        Contacts
                    </NavLink>
                </div>
                
                <p className="footer__item">Library ©</p>
            </div>
        </footer>
    );
};

export default Footer;