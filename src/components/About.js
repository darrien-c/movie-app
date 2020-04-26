import React , { useEffect, useState} from 'react';
import SubHeader from '../components/sections/SubHeader';
import { GridCard } from '../components/sections/GridCard';
import LessProminentLogo from '../tmdb_less-prominate.svg';

const About = () => {




	return(
	
	<main>
		<div className="filter-menu">
			<SubHeader />
		</div>
		<section className="section-01">
			<div className="about-info">
				<h1>About</h1>
				<p>This Movie Search Application is built to demonstrate the use of the JavaScript Framework - React. This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
				<img className="less-logo" src={LessProminentLogo} alt="TMDB Logo"></img>
			</div>

		</section>
	</main>
	)
}

export default About;