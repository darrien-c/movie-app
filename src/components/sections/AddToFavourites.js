import React, { useEffect, useState, setState, useReducer } from 'react'
import {  API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage, removeFromStorage, isItemInStorage } from '../../utilities/storageMaker';
import Favourites from '../Favourites';
import Movie from './Movie';

const AddToFavourites = (props) => {

  let favouritesArray = getStorage('movie-current-favs');
  
  const [error, setError] = useState(false);
  const [favIndexNumber, setFavIndexNumber] = useState(-1);
  const[result, setResult] = useState(favouritesArray);



  const handleAddMovie = () => {
      setStorage(props);
      let favsFromStorage = getStorage();
      favsFromStorage.push(result);
      setFavIndexNumber(favsFromStorage.length - 1);
  }

     
  const handleRemoveFromFavourites = () => {

    removeFromStorage(favIndexNumber);
    setFavIndexNumber(-1); 
}

    return (
        <div className="fav-wrapper">
         {/*    {error && <p className="text-popup">Movie has already been added to favourites.</p>} */}

            {/* <button className="fav-button" onClick={ () => handleAddMovie(props)}>Add to Favourites</button> */}
             {favIndexNumber >= 0 ?                               
                        <button className="fav-button" onClick={ () => {handleRemoveFromFavourites(props); removeFromStorage()}}>Remove From Favourites<i className="fas fa-heart-broken"></i></button>
                         :
                        <button className="fav-button" onClick={ () => handleAddMovie(props)}>Add to Favourites<i className="fas fa-heart"></i></button>}
        </div> 
    )
} 
export default AddToFavourites;


export const removeOneMovie = (id) => {

/*   let newArray  = JSON.parse(localStorage.getItem("movie-current-favs"));
  newArray.splice(props, 1);
  localStorage.setItem("movie-current-favs", JSON.stringify(newArray)); */

  let favouritesArray = getStorage('movie-current-favs');
  if(favouritesArray.includes(id, 0)) {
    const index = favouritesArray.indexOf(id);
    favouritesArray.splice(index, 1);
  }

  setStorage(favouritesArray, 'move-current-favs');
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
            {/* 
              <div className="remove-wrapper">
                <button className="remove-btn" onClick={ () => removeOneMovie(result)}>Remove</button> 
              </div> */}
              <div className="remove-wrapper">
                <button className="remove-btn" onClick={ () => removeFromStorage()}>Remove</button> 
              </div>
          </div>
          
          
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


    

    

