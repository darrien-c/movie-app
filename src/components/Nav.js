import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return(
        <div id="hamburger-wrapper">
        <div className="hamburger-menu icon">
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
        </div>
        <div className="nav-bar">
            <nav className="nav-list">
                <ul>
                    <li className="nav-link"><NavLink to = {'/'} exact>Home</NavLink></li>
                    <li className="nav-link"><NavLink to={'/individual'}>Individual</NavLink></li>
                    <li className="nav-link"><NavLink to={'/favourites'}>Favourites</NavLink></li>
                    <li className="nav-link"><NavLink to={'/about'}>About</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>  
    )
}
export default Nav;
