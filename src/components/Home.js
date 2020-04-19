import React, { useState, useEffect } from 'react';
import { API_URL_POPULAR} from '../global/variables';
import { GridCard } from '../components/sections/GridCard';
import SubHeader from '../components/sections/SubHeader';


const Home = (props) => {
	
const [movies, setMovies] = useState([]);


	useEffect(() => {

	const fetchMovies = async () => {

			const response = await fetch(`${API_URL_POPULAR}`);
			const data = await response.json();
			const movies = data.results;
			setMovies(movies);
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
export default Home;