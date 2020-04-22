import React, { useEffect, useState, setState, useReducer } from 'react'
import {  API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { setStorage, getStorage, removeFromStorage } from '../../utilities/storageMaker';
import Favourites from '../Favourites';

const AddToFavourites = (props) => {
  
  const [ movie, setMovie ] = useState([{props}]);
  const [error, setError] = useState(false);

  const handleAddMovie = () => {
     // var favMovie = localStorage.setItem('movie', JSON.stringify(props));
      setStorage(props);

      let storedArray = JSON.parse(localStorage.getItem('movie-current-favs')); 
      var items = Object.values(storedArray);    
      var sorted_arr = storedArray.slice().sort(); 
   
      for(var i = 0; i < sorted_arr.length - 1; i++){
        if(sorted_arr[i + 1] === sorted_arr[i + 1]){    
         // removeFromStorage(sorted_arr);
          setError(true);   
        }
        console.log('theres a dupe');       
      }  
 
  }
  
    return (
        <div>
          {error && <p>Movie has already been added to favourites.</p>}
            <button onClick={handleAddMovie}>Add to Favourites</button>
        </div> 
      
    )
} 
export default AddToFavourites;




/* const YourFavourites = (props) => {

  const [movies, setFavourites] = useState(getStorage());
  const [moviesNames, setFavouriteNames] = useState(getStorage());
  const [FavData, setFavData] = useState([]);


const handleRemoveMovie = (movie) => {


    let storedArray = JSON.parse(localStorage.getItem('movie-current-favs')); 
    
    const updatedFavArray = removeFromStorage(movie);

    setFavourites(updatedFavArray);
    setFavouriteNames(updatedFavArray.map(movieObj => movieObj.movie));

    const newFavArr = [...FavData];
    const isFav = (current) => current.movie === movie;
    let indexOfItemToRemove = newFavArr.findIndex(isFav);
    newFavArr.splice(indexOfItemToRemove, 1);
    setFavData(newFavArr);
 }

  const movieId = props.match.params.movieId;

    useEffect(() => {
      if(Array.isArray(movies) && movies.length > 0) {

        const newFavArr = [];
        const fetchData = async () => {
          for(let i = 0; i < movies.length; i++){
            const res = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
            let data = await res.json();
            newFavArr.push(data.movies[i]);
          }
          setFavData(newFavArr);
        }
        fetchData();
      }   

  }, [movies])

  return (
  <button onClick = { () => handleRemoveMovie()}></button>
  )
}  */



const FavouritesArray = (props) => {     

  let storedMovies  = JSON.parse(localStorage.getItem('movie-current-favs')); 
  
  if(storedMovies == null) storedMovies = [];    
  
  var results = Object.values(storedMovies);  

    return results.map((result, i) => {    
      return (    

        <section key={i}>
          <div className="section-01">    
            <h1>Favourite Page</h1>
            <button onClick={ () => removeFromStorage(props)}>Remove</button> 

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


    

    

