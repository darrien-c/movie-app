import React, { useEffect, useState, setState, useReducer } from 'react'
import {  IMAGE_URL } from '../../global/variables';

export const AddToFavourites = (props) => {

  /*   const handleAddMovie = () => {

        const [ movie, setMovie ] = useState('');

        var favMovie = localStorage.setItem('movie', JSON.stringify(props))

    }   */

    function useLocalState(localItem) {

      const [loc, setState] = useState(localStorage.getItem(localItem));

        function setLoc(newItem) {
          localStorage.setItem(localItem, newItem);
          setState(newItem);
        }

      return [loc, setLoc]
    }

    const [ movie, setMovie ] = useState(props);

    var favMovie = localStorage.setItem('movie', JSON.stringify(props))

    return (
       /*  <div>
            <button onClick={handleAddMovie}>Add to Favourites</button>
        </div> */
        <div>
   
        <button onClick={ () => setMovie(favMovie)}>Add to Favourites</button>
    </div>
    )
}


export const FavouritesArray = (props) => {


  
   let [ movies , setFavArray] = useState([]);
    //localStorage.setItem('movie', JSON.stringify(movies));
    

    var movieList = [];
    
    
    var storedMovies  = JSON.parse(localStorage.getItem('movie'));  
    if(storedMovies == null) storedMovies = [];  

    var results = Object.values(storedMovies); 

  
         
    let totalArray = movieList.push(results);
  

    console.log(totalArray)
    console.log(movieList)

     return results.map((result, i) => {
    
      return (
    
        <section key={i}>
          <div className="section-01">    
            <h1>Favourite Page</h1>
            <h1>{result.title}</h1>
            <img src={`${IMAGE_URL}w185${result.poster_path}`} alt={result.title}></img>
          </div>
        </section>
      )
    
    }) 
    
      
    }
      
    
    

    

