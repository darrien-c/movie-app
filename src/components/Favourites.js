import React, { useState } from 'react';
import { DisplayFavArray , removeOneMovie} from '../components/sections/AddToFavourites';
import SubHeader from './sections/SubHeader';
import { removeFromStorage } from '../utilities/storageMaker';
import { IMAGE_URL } from '../global/variables';


const Favourites = (props) => {

   
   const [ favStorage, setFavStorage ] = useState(false);
   let favMovies = localStorage.getItem('movie-current-favs');


   
   const displayFavouritedMovies = () => {
      let favMovies = localStorage.getItem('movie-current-favs');

      if( favMovies === '[]' || favMovies === null) {
        // setFavStorage(true);
         return(           
            <h2><span className="oops-intro">Oops!</span> You don't have any favourite movies!</h2>
         );
      }
   }

   const FavouritesArray = (props) => {     

      let storedMovies  = JSON.parse(localStorage.getItem('movie-current-favs')); 
      
      if(storedMovies == null) storedMovies = [];    
      
      let results = Object.values(storedMovies);  
      let favKey = Object.keys(storedMovies);
    
        return results.map((result, i) => {  
         
          return (    
    
              <div key={i} className="movies-box">
                  <h2>{result.movie.title}</h2>
                  <img className="fav-movies" src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img>
                
                 <div className="remove-wrapper">
                    <button className="remove-btn" onClick={ () => removeOneMovie(result)}>Remove</button> 
                  </div> 
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
            <div className="remove-all-wrapper" >
                  <button className="remove-all-btn" onClick={ () => removeFromStorage()}>Remove All Favourites</button> 
            </div>

            { displayFavouritedMovies() }

            <div className="fav-movies-wrapper">
               <div  className="fav-movies-container">
{/*  <DisplayFavArray/> */}

{FavouritesArray()}

               </div>
            </div>
         </div> 
     </main>  
    ) 
}
export default Favourites;
