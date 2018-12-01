import React from 'react';

import { NavLink } from 'react-router-dom';

import iconMenu from './../../images/icons/icon-menu.svg';
import './style.scss';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    hideClick() {
        this.setState(state => ({
            isActive: false
        }));
    }

    render() {
        return(
            <nav className="Navbar">
                <div className="Navbar__title">
                    <NavLink 
                        to="/" 
                        exact 
                        className="Navbar__Link Navbar__Link-brand" 
                        activeClassName="active" 
                        onClick={this.hideClick}
                    >
                        Library
                    </NavLink>
                    <img 
                        className="Navbar__Link Navbar__Link-toggle"
                        onClick={this.handleClick}
                        src={iconMenu} 
                        alt="icon menu" 
                    />
                </div>

                <div className={this.state.isActive ? "Navbar__Items-toggleShow" : "Navbar__Items"}>
                    <NavLink 
                        to="/media" 
                        className="Navbar__Link" 
                        activeClassName="active" 
                        onClick={this.hideClick}
                    >
                        Media
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className="Navbar__Link" 
                        activeClassName="active" 
                        onClick={this.hideClick}
                    >
                        Contacts
                    </NavLink>
                </div>
            </nav>
        );
    };
};

export default Nav;