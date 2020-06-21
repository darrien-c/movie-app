import React from 'react';
import { NavLink } from 'react-router-dom';

const sideToggle = (props) => {

    let toggleClasses = ['side-toggle'];

    if(props.show){
        toggleClasses = 'side-toggle open';
    }

   return ( 
   <nav className={toggleClasses}>
        <ul>
            <li onClick={props.click}><NavLink to={'/movie-app'} exact>Home</NavLink></li>
            <li onClick={props.click}><NavLink to={'/movie-app/favourites'}>Favourites</NavLink></li>
            <li onClick={props.click}><NavLink to={'/movie-app/about'}>About</NavLink></li>
        </ul>
    </nav>
   )
};

export default sideToggle;