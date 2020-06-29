import React, { useState } from 'react';
import SubHeader from './sections/SubHeader';
import { removeAllFromStorage } from '../utilities/storageMaker';
import { IMAGE_URL } from '../global/variables';


const Favourites = (props) => {
   

   const [ favStorage, setFavStorage ] = useState(false);
   let favMovies = localStorage.getItem('favs');
   
   
   const displayFavouritedMovies = () => {
      let favMovies = localStorage.getItem('favs');

      if( favMovies === '[]' || favMovies === null) {
         return(           
            <h2><span className="oops-intro">Oops!</span> You don't have any favourite movies!</h2>
         );
      }
   }



   const FavouritesArray = (props) => {     

      let storedMovies  = JSON.parse(localStorage.getItem('favs'));       
      if(storedMovies == null) storedMovies = [];          
      let results = Object.values(storedMovies);  
      let favKey = Object.keys(storedMovies);
    
        return results.map((result, i) => {  
          return (    
              <div key={i} className="movies-box">
                  <h2>{result.movie.title} </h2>
                  <a href={`/movie-app/movie/${result.movie.id}`}><img className="fav-movies" src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img></a>
                  <br />
                  <a href={`/movie-app/movie/${result.movie.id}`} > <button className="viewmore-btn fav-readmore-btn">Read more<i className="fas fa-arrow-right arrow"></i></button></a>
               
              </div>                           
          )
        })   
    }


   return (
      <main>
         <div className="filter-menu">
            <SubHeader />
         </div>
         <div className="section-01">
            <h1>Favourites</h1>
      {/*       <div className="remove-all-wrapper" >
                  <button className="remove-all-btn" onClick={ () => removeAllFromStorage()}>Remove All Favourites</button> 
            </div> */}

            { displayFavouritedMovies() }

            <div className="fav-movies-wrapper">
               <div  className="fav-movies-container">

               { FavouritesArray() }

               </div>
            </div>
         </div> 
     </main>  
    ) 
}
export default Favourites;
