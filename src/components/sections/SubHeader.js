import React from 'react'
import { BrowserRouter as Link, NavLink} from 'react-router-dom';


const SubHeader = () => {

    return (
        <div className="movies-filter">
           <ul>
           <NavLink to='/'><li className="btn-inverted">Popular</li></NavLink>
           <NavLink to='/toprated'><li className="btn-inverted">Top Rated</li></NavLink>
           <NavLink to='/nowplaying'><li className="btn-inverted">Now Playing</li></NavLink>
            <NavLink to='/upcoming'><li className="btn-inverted">Upcoming</li></NavLink>
           </ul>
        </div>
    )
}

export default SubHeader;
