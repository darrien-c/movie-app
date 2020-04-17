import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import HamburgerToggle from '../components/sideToggle/hamburgerToggle';


const Header = (props) => (
  /* toolbar = header-bar
      toolbar__navigation = navbar
      toolbar__logo = header-logo
       toolbar_navigation-items = navbar-items*/

    <header className="header-bar">
      <nav className="navbar">
        <div className="toggle-hamburger-button">
          <HamburgerToggle click={props.sideToggleClickHandler}/>
        </div>

        <div className="header-logo">
          <NavLink to = {'/'}><h1>Movie<span>Go</span></h1></NavLink>
        </div>
          <Nav />
      </nav>
  </header >
  );

export default Header;
