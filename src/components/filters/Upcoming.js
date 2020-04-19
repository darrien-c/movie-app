import React, { useState, useEffect } from 'react';
import { API_URL_UPCOMING } from '../../global/variables';
import { GridCard } from '../sections/GridCard';
import SubHeader from '../sections/SubHeader';


const Upcoming = (props) => {
	
const [movies, setMovies] = useState([]);

	useEffect(() => {

	const fetchMovies = async () => {

			const response = await fetch(`${API_URL_UPCOMING}`);
			const data = await response.json();
			const movies = data.results;
			setMovies(movies);
			console.log(movies);
		}
		fetchMovies();
	}, []); 

	return (
	
	<main>
		<section className="section-01">
		<SubHeader />
		{movies && <GridCard movies={movies}/>}

		</section>
	</main>
	)
}; 

export default Upcoming;
