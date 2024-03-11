import React from 'react';
import Grid from '@mui/material/Grid';


const MovieList = (props) => {
	return (
		<>
		<Grid container spacing={2}>
		{props.movies.map((movie, index) => (
				<Grid item xs={6} md={6}>
					<div >
						<h2>{movie.attributes.title}</h2>
						<b>Synopsis:</b> {movie.attributes.field_synopsis.substring(0,120)}...	<br></br>
						<b>Release Year:</b> {movie.attributes.field_release_year}
					</div>
				</Grid>
			))}
		</Grid>
					</>
	);
};

export default MovieList;