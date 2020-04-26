import React from 'react'
import { BrowserRouter as Link, NavLink} from 'react-router-dom';


const SubHeader = () => {

    return (
        <div className="movies-filter">
           <ul>
           <NavLink to='/'><li className="filter-link "><i className="fas fa-fire"></i>Popular</li></NavLink>
           <NavLink to='/toprated'><li className="filter-link "><i className="fas fa-star"></i>Top Rated</li></NavLink>
           <NavLink to='/nowplaying'><li className="filter-link "><i className="fab fa-sketch"></i>Now Playing</li></NavLink>
            <NavLink to='/upcoming'><li className="filter-link "><i className="far fa-hourglass"></i>Upcoming</li></NavLink>
           </ul>
        </div>
    )
}

export default SubHeader;
