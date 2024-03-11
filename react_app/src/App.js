import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Pagination from './Components/Pagination';

const App = () => {
	
	//Pagination Settings
	const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
	
	//Movies request from json:api
 	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://decoupled.lndo.site/jsonapi/node/movie`;

		const response = await fetch(url, {mode:'cors'});
		const responseJson = await response.json();

		if (responseJson.data) {
			setMovies(responseJson.data);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	//Pagination calc
	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
	const nPages = Math.ceil(movies.length / moviesPerPage)


	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={currentMovies} />
				<Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
			</div>
		</div>

	);
};
  
export default App;






