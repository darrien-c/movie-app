import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () =>(
    <div className="navbar-items">
        <ul >
            <li ><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/individual'}>Individual</NavLink></li>
            <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
    </ul>
  </div>
    )

export default Nav;
