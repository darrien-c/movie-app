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

     
      let storedArray = JSON.parse(localStorage.getItem('movie-current-favs')); 
      const items = Object.values(storedArray);    


      items.reduce((unique, item) => {
        console.log(
          item,
          unique,
          unique.includes(item),
          unique.includes(item) ? unique : [...unique, item] ,
        );
          return unique.includes(item) ? unique : [...unique, item]
      }, []);

      
 
  }
  
    return (
        <div className="fav-wrapper">
          {error && <p>Movie has already been added to favourites.</p>}
            <button className="fav-button" onClick={ () => handleAddMovie(props)}>Add to Favourites</button>
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

        <section key={i} className="movies-container">
          <div className="movies-container">
              <div className="movies">
              <h2>{result.movie.title}</h2>
              <img className="fav-movies" src={`${IMAGE_URL}w185${result.movie.poster_path}`} alt={result.movie.title}></img>
              <div className="remove-wrapper"><button className="remove-btn" onClick={ () => removeFromStorage()}>Remove</button> </div>
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


    

    

