import React, { useEffect, useState, setState, useReducer } from 'react'
import {  API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage, removeFromStorage, isItemInStorage } from '../../utilities/storageMaker';
import Favourites from '../Favourites';

const AddToFavourites = (props) => {
  
  const [ movie, setMovie ] = useState([{props}]);
  const [error, setError] = useState(false);

  const handleAddMovie = () => {
     //var favMovie = localStorage.setItem('movie', JSON.stringify(props));
      setStorage(props);

     
 /*      let storedArray = JSON.parse(localStorage.getItem('movie-current-favs')); 
      const items = Object.values(storedArray);    
 */
  }
  
    return (
        <div className="fav-wrapper">
          {error && <p>Movie has already been added to favourites.</p>}
            <button className="fav-button" onClick={ () => handleAddMovie(props)}>Add to Favourites</button>
        </div> 
      
    )
} 
export default AddToFavourites;


const findMovie = (props) => {

console.log(props);
 let items = getStorage();
 let newArray  = JSON.parse(localStorage.getItem("movie-current-favs"));
 newArray.splice(props, 1);


  console.log(newArray);
  localStorage.setItem("movie-current-favs", JSON.stringify(newArray));
}


const FavouritesArray = (props) => {     

  let storedMovies  = JSON.parse(localStorage.getItem('movie-current-favs')); 
  
  if(storedMovies == null) storedMovies = [];    
  
  let results = Object.values(storedMovies);  
  let favID = Object.keys(storedMovies);

    return results.map((result, i) => {    
      return (    

        <section key={i} className="movies-container">
          <div className="movies-container">
              <div className="movies">
              <h2>{result.movie.title}</h2>
              <img className="fav-movies" src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img>
              <div className="remove-wrapper">
                <button className="remove-btn" onClick={ () => removeFromStorage(result.movie.id)}>Remove</button>  
                <button onClick={ () => findMovie(result)}>Find movie</button> 
              </div>
            </div>
          </div>
        </section>
        
      )
    })   
}



      
export const DisplayFavArray = (props) => {
  return(
    <div>
      {FavouritesArray(props.movie)}

    </div>
  )
}


    

    

