import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../global/variables';
import { AddToFavourites } from '../sections/AddToFavourites';
import  Favourites  from '../Favourites';


const Movie = (props) => {

    const movieId = props.match.params.movieId

    const [movie, setMovie] = useState([]);


    
    useEffect(() => {

        const movieId = props.match.params.movieId
    
        const fetchMovie = async () => {
    
                const response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
                const data = await response.json();
                setMovie(data);
            }
            fetchMovie();


        
        }, [movie]); 
    

    return (
        <section>
            <div>
         {/*        <div>
                {movie.backdrop_path && (
                        <img
                            src={`${IMAGE_URL}original${movie.backdrop_path}`}
                            alt="movie poster"/>
                    )}
                </div> */}
                <h1>MoviePage</h1>
                
                <div>
                    {movie.poster_path && (
                        <img
                            src={`${IMAGE_URL}w300${movie.poster_path}`}
                            alt="movie poster"/>
                    )}
                </div>
                <div>
               
                <AddToFavourites addMovie={movie} />
                    <h1>{movie.title}</h1>
                    <p>{movie.vote_average}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </section>
  
    )
}

export default Movie;
