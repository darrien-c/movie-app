import React, { useState, useEffect } from 'react';
import { API_URL_NOWPLAYING } from '../../global/variables';
import { GridCard } from '../sections/GridCard';
import SubHeader from '../sections/SubHeader';


const NowPlaying = (props) => {
	
const [movies, setMovies] = useState([]);

	useEffect(() => {

	const fetchMovies = async () => {

			const response = await fetch(`${API_URL_NOWPLAYING}`);
			const data = await response.json();
			const movies = data.results;
			setMovies(movies);
		
		}
		fetchMovies();
	}, []); 

	return (
	
	<main>
		<div className="filter-menu">
			<SubHeader />
		</div>
		<section className="section-01">
			<h1>Now Playing</h1>
			{movies && <GridCard movies={movies}/>}
		</section>
	</main>
	)
}; 

export default NowPlaying;
