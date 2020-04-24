import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import HamburgerToggle from '../components/sideToggle/hamburgerToggle';
import logo from '../tmdb.svg';

const Header = (props) => (

    <header className="header-bar">
      <nav className="navbar">
        <div className="toggle-hamburger-button">
          <HamburgerToggle click={props.sideToggleClickHandler}/>
        </div>

        <div className="header-logo">
          <NavLink to = {'/'}><img src={logo} /></NavLink>
        </div>
          <Nav />
      </nav>
  </header >
  );

export default Header;
