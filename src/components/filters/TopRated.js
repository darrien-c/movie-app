import React, { useState, useEffect } from 'react';
import { API_URL , API_KEY, API_URL_TOPRATED, IMAGE_URL} from '../../global/variables';
import { GridCard } from '../sections/GridCard';
import SubHeader from '../sections/SubHeader';


const TopRated = (props) => {
	
const [movies, setMovies] = useState([]);

	useEffect(() => {

	const fetchMovies = async () => {

			const response = await fetch(`${API_URL_TOPRATED}`);
			const data = await response.json();
			const movies = data.results;
			setMovies(movies);
			console.log(movies);
		}
		fetchMovies();
	}, []); 

	return (
	
	<main>
		<section>
		<SubHeader />
		{movies && <GridCard movies={movies}/>}

		</section>
	</main>
	)
}; 

export default TopRated;
