import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  /* toolbar = header-bar
      toolbar__navigation = navbar
      toolbar__logo = header-logo
       toolbar_navigation-items = navbar-items*/
  return (
    <header className="header-bar">
      
      <nav className="navbar">
        <div className="header-logo">
          <h1>Movie<span>Go</span></h1>
        </div>
        <div className="navbar-items">
          <ul>
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/individual'}>Individual</NavLink></li>
            <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
          </ul>
        </div>
      </nav>
  </header >
  );
}
export default Header;
