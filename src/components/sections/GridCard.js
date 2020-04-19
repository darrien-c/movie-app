import React , { useEffect, useState, setState }from 'react';
import { API_URL , API_KEY, API_URL_POPULAR, IMAGE_URL} from '../../global/variables';


const makeMovieArr = (movies) => {

    movies.sort(function(a, b){
        return b.vote_average - a.vote_average;
    })

    return movies.map((movie, i) =>{
        return (
            <section key={i}>
                <h1></h1>
                <div className="movie">
                    <img src={`${IMAGE_URL}w185${movie.poster_path}`} alt={movie.title}></img>
                    <h2>{movie.title}</h2>
                    <h3>{movie.original_title}</h3>
                    <div className="movie-rating">{movie.vote_average}</div>
                    <div className="movie-overview">{movie.overview}</div>
                </div>
            </section>
        )
    })
}

export const GridCard = (props) => {

    return (
        <div>
            {makeMovieArr(props.movies)}
        </div>
    )
}

