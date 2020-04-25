import React, { useEffect, useState } from 'react';
import { DisplayFavArray } from '../components/sections/AddToFavourites';
import SubHeader from './sections/SubHeader';



const Favourites = (props) => {
   
   const displayFavouritedMovies = () => {
      let favMovies = localStorage.getItem('movie-current-favs');

      if( favMovies === '[]') {
         return(           
            <h2><span className="oops-intro">Oops!</span> You don't have any favourite movies!</h2>
         );
      }
   }
   


   return (
      <main>
         <div className="filter-menu">
            <SubHeader />
         </div>
         <div className="section-01">
            <h1>Favourites</h1>
            { displayFavouritedMovies() }
           
            <DisplayFavArray/>
         </div> 
     </main>  
    ) 
}
export default Favourites;
