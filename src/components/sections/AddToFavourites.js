import React, { useEffect, useState, setState, useReducer } from 'react'
import {  IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage } from '../../utilities/storageMaker';



const AddToFavourites = (props) => {

  
  const [ movie, setMovie ] = useState([{props}]);

  const handleAddMovie = () => {
      var favMovie = localStorage.setItem('movie', JSON.stringify(props));
      setStorage(props);
  }  
  
    return (
        <div>
            <button onClick={handleAddMovie}>Add to Favourites</button>
        </div> 
      
    )
} 
export default AddToFavourites;


const FavouritesArray = (props) => {     


  let storedMovies  = JSON.parse(localStorage.getItem('movie-current-favs')); 

  if(storedMovies == null) storedMovies = [];    
  
  var results = Object.values(storedMovies);  

    return results.map((result, i) => {    
      console.log(result.movie.title)
      return (    

        <section key={i}>
          <div className="section-01">    
            <h1>Favourite Page</h1>
            <h1>{result.movie.title}</h1>
            <img src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img>
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


    

    

