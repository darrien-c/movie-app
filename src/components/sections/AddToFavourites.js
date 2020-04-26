import React, { useEffect, useState, setState } from 'react'
import {  API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage, isItemInStorage, removeAllFromStorage,  removeOneFromStorage } from '../../utilities/storageMaker';
import { STORAGE_FAVOURITE_MOVIES } from '../../global/variables';


const AddToFavourites = (props, id) => {

  let favouritesArray = getStorage('favs');  
  
  const [favIndexNumber, setFavIndexNumber] = useState(-1);
  const[result, setResult] = useState(favouritesArray);
 
 useEffect(()=> {
      setFavIndexNumber( isItemInStorage(props, 'favs'));
  }, [props]); 

  const handleAddMovie = () => {  
      setStorage(props);
      let favsFromStorage = getStorage();      
      favsFromStorage.push(result);   
      setFavIndexNumber(favsFromStorage.length - 1);
  }

     
 
  const handleRemoveFromFavourites = (props) => {
    removeOneFromStorage(props);
    setFavIndexNumber(-1); 
  }

 

  return (
        <div className="fav-wrapper">
              { favIndexNumber >= 0 ?   
                      <button className="fav-button" onClick={ ()=> handleRemoveFromFavourites(props)}>Remove From Favourites<i className="fas fa-heart-broken"></i></button>
                         :
                      <button className="fav-button" onClick={ () => handleAddMovie(props)}>Add to Favourites<i className="fas fa-heart"></i></button>} 

        </div> 
    )
} 
export default AddToFavourites;



const FavouritesArray = (props) => {     

  let storedMovies  = JSON.parse(localStorage.getItem('favs')); 
  
  if(storedMovies == null) storedMovies = [];    
  
  let results = Object.values(storedMovies);  
  let favKey = Object.keys(storedMovies);

    return results.map((result, i) => {  
     
      return (    

          <div key={i} className="movies-box">
              <h2>{result.movie.title}</h2>
              <img className="fav-movies" src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img>
              <div className="remove-wrapper">
                <button className="remove-btn" onClick={ () => removeAllFromStorage()}>Remove</button> 
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


    

    

