import React from 'react'
import { BrowserRouter as Link, NavLink} from 'react-router-dom';


const SubHeader = () => {

    return (
        <div className="movies-filter">
           <ul>
               <li><NavLink to='/'>Popular</NavLink></li>
               <li><NavLink to='/toprated'>Top Rated</NavLink></li>
               <li><NavLink to='/nowplaying'>Now Playing</NavLink></li>
               <li><NavLink to='/upcoming'>Upcoming</NavLink></li>
           </ul>
        </div>
    )
}

export default SubHeader;
