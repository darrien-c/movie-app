import React from 'react'
import { BrowserRouter as Link, NavLink} from 'react-router-dom';
import Footer from '../Footer';

const SubHeader = () => {

    return (
        <div className="movies-filter">
           <ul>
           <NavLink to='/movie-app'><li className="filter-link "><i className="fas fa-fire"></i>Popular</li></NavLink>
           <NavLink to='/movie-app/toprated'><li className="filter-link "><i className="fas fa-star"></i>Top Rated</li></NavLink>
           <NavLink to='/movie-app/nowplaying'><li className="filter-link "><i className="fab fa-sketch"></i>Now Playing</li></NavLink>
            <NavLink to='/movie-app/upcoming'><li className="filter-link "><i className="far fa-hourglass"></i>Upcoming</li></NavLink>
           </ul>
        </div>
    )
}

export default SubHeader;
