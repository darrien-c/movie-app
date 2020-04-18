import React , { useEffect, useState, setState }from 'react';
import { API_URL , API_KEY, API_URL_POPULAR, IMAGE_URL} from '../../global/variables';


const makeMovieArr = (movies) => {
    return movies.map((movie, i) =>{
        return (
            <div key={i}>
                <h1>{movie.title}</h1>
                <img src={`${IMAGE_URL}w500${movie.poster_path}`} alt></img>
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

