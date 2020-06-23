import React, { useState } from 'react';
import {  IMAGE_URL} from '../../global/variables';
import { BrowserRouter as Redirect, Link, NavLink, Route } from 'react-router-dom';



const makeMovieArr = (movies) => {

    movies.sort(function(a, b){
        return b.vote_average - a.vote_average;
    })

    movies.length = 12;

    return movies.map((movie, i) =>{
        return (
            <div className="movies-container" key={i}>
                <div className="movies">
                    <div className="box">
                        <Link to={`/movie-app/movie/${movie.id}`}>
                        <img className="movie-poster" src={`${IMAGE_URL}w185${movie.poster_path}`} alt={movie.title}></img></Link>
                        <h2>{movie.title}</h2>
                    </div>
                    <p className="movie-released">{movie.release_date}</p>
                    <p className="movie-overview"><span className="overflow-elip">{movie.overview}</span></p>
                   <p><span className="rating-circle">{movie.vote_average}</span></p> 
                  <Link to={`/movie-app/movie/${movie.id}`} className="viewmore-btn">Read more<i className="fas fa-arrow-right arrow"></i></Link>
                </div>            
            </div>
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



const makeMovie = (movies) => {

    let movie  = JSON.parse(localStorage.getItem('favs', movies));
    const { id: movieId } = movie;


    return movie.map((item, i) => {
        return (
        <div key={i}>
            <h1>Hello</h1>
            <h1>{item.id}</h1>
        </div>
        )}
    )


}


export const DisplayMovie = (props) => {
    return (
        <div>
            {makeMovie(props.movies)}
        </div>
    )
}