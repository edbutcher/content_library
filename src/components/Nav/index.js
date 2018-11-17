import React from 'react';

import { NavLink } from 'react-router-dom';
import iconMenu from './../../images/icons/icon-menu.svg';
import './style.css';

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

    render() {
        return(
            <nav className="Navbar">
                    <NavLink to="/" activeClassName="Navbar__Link--active" exact className="Navbar__Link Navbar__Link-brand">
                        Library
                    </NavLink>
                    <div className="Navbar__Link Navbar__Link-toggle" onClick={this.handleClick} >
                        <img src={iconMenu} alt="icon menu" />
                    </div>
                    <div className={this.state.isActive ? "Navbar__Items Navbar__ToggleShow" : "Navbar__Items"}>
                        <NavLink to="/media" activeClassName="Navbar__Link--active" className="Navbar__Link" >Media</NavLink>
                        {/* <NavLink to="/upload" activeClassName="Navbar__Link--active" className="Navbar__Link">Upload</NavLink> */}
                        <NavLink to="/contact" activeClassName="Navbar__Link--active" className="Navbar__Link">Contact</NavLink>
                    </div>
            </nav>
        );
    };
};

export default Nav;