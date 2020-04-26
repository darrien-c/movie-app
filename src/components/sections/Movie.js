import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL , STORAGE_FAVOURITE_MOVIE } from '../../global/variables';
import  AddToFavourites  from './AddToFavourites'; 
//import  Favourites  from '../Favourites';
import { setStorage, getStorage, removeFromStorage, isItemInStorage, removeOneFromStorage } from '../../utilities/storageMaker';
//import YourFavourites  from './AddToFavourites';
import SubHeader from './SubHeader';

const Movie = (props) => {

    const movieId = props.match.params.movieId
    const [movie, setMovie] = useState([]);
    
   
    useEffect(() => {
        const movieList = [];
        const movieId = props.match.params.movieId;
        const fetchMovie = async () => {
    
            const response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
            const data = await response.json();
            setMovie(data);   
                //movieList.push(data.)
            }
            fetchMovie();
        }, [movie]); 

        
        const handleRemoveFromFavourites = () => {
            removeOneFromStorage(movieId);
            //setFavIndexNumber(-1); 
        
          }

    return (
        <main>
            <div className="filter-menu">
                <SubHeader />
            </div>
            <section className="section-01">   
                      {movie.backdrop_path && (
                            <img className="poster-backdrop"
                                src={`${IMAGE_URL}original${movie.backdrop_path}`}
                                alt="movie poster"/>
                        )}                     
                <div className="individual-movie-container">                         
                        <div className="individual-movie-info">
                            <div className="movie-display">
                                <div className="solo-poster">
                                    {movie.poster_path && (
                                        <img
                                            src={`${IMAGE_URL}w300${movie.poster_path}`}
                                            alt="movie poster"/>
                                    )}
                                </div>
                            </div>
                            
                            <div className="solo-titles">
                                <h1>{movie.title}</h1>
                                <h3>{movie.original_title}</h3>
                            </div>
                            <div className="solo-group">
                                <p className="solo-release">{movie.status}: {movie.release_date}</p>
                                <i className="fa fa-star"><span>{movie.vote_average} / 10</span></i>
                                <p className="movie-solo-overview">{movie.overview}</p>

                         <AddToFavourites movie={movie} id={movie.id} movieparams={movieId}/> 

                        </div>                                 
                    </div>                  
                </div>               
            </section>
        </main>
    )
}

export default Movie;
