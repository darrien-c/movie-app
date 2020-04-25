import React, { useEffect, useState, setState, useReducer } from 'react'
import {  API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage, removeFromStorage, isItemInStorage } from '../../utilities/storageMaker';
import Favourites from '../Favourites';

const AddToFavourites = (props) => {
  
  const [ movie, setMovie ] = useState([{props}]);
  const [error, setError] = useState(false);

  const handleAddMovie = () => {
      setStorage(props);
  }

  const hasDuplicates = (props) => {
    let newArray  = JSON.parse(localStorage.getItem("movie-current-favs"));

    const scan_arr = [];

    const scan = ( id, value = undefined) => {
      return { id: id, value: value};
    };

    const update = item => {
      item.count = item.count || 1;

      const existingItem = scan_arr.find( i => i.id === item.id);

      if( existingItem ) {
        setError(true);
        console.log('exist');
      }else {
        console.log('not exist');
      }
    };




    } 

  
    return (
        <div className="fav-wrapper">

            <button className="fav-button" onClick={ () => {handleAddMovie(props); hasDuplicates(props)}}>Add to Favourites</button>
            {error && <p className="text-popup">Movie has already been added to favourites.</p>}
        </div> 
      
    )
} 
export default AddToFavourites;


export const removeOneMovie = (props) => {

  let newArray  = JSON.parse(localStorage.getItem("movie-current-favs"));
  newArray.splice(props, 1);
  localStorage.setItem("movie-current-favs", JSON.stringify(newArray));

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



      
export const DisplayFavArray = (props) => {
  return(
    <div>
      {FavouritesArray(props.movie)}

    </div>
  )
}


    

    

