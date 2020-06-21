import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () =>(
    <div className="navbar-items">
        <ul >
            <li ><NavLink to={'/movie-app'} exact>Home</NavLink></li>
            <li><NavLink to={'/movie-app/favourites'}>Favourites</NavLink></li>
            <li><NavLink to={'/movie-app/about'}>About</NavLink></li>
    </ul>
  </div>
    )

export default Nav;
