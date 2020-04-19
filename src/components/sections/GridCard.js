import React, { useState } from 'react';
import {  IMAGE_URL} from '../../global/variables';
import { BrowserRouter as Redirect } from 'react-router-dom';

const makeMovieArr = (movies) => {

    movies.sort(function(a, b){
        return b.vote_average - a.vote_average;
    })

    movies.length = 12;

    return movies.map((movie, i) =>{
        return (
            <section className="movies-container" key={i}>
                <div className="movie">
                    <a href={`/movie/${movie.id}`}>
                    <img src={`${IMAGE_URL}w185${movie.poster_path}`} alt={movie.title}></img></a>
                    <h2>{movie.title}</h2>
                    <h3>{movie.original_title}</h3>
                    <div className="movie-released">{movie.release_date}</div>
                    <div className="movie-rating">{movie.vote_average}</div>
                    <div className="movie-overview">{movie.overview}</div>
                    <button>Login</button>
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




