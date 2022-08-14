import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Link, Routes } from 'react-router-dom'
import { getAllMoviesAction } from '../../store/actions/moviesActions';
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function Movies() {

	const {moviesList: {movies}} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllMoviesAction())
	}, [dispatch]);

	return (
		<>
			<Stack display={'flex'} justifyContent={'space-between'} margin={1}>
				<Link to='new'>
					<Button	variant='contained' color={'success'}>
						Add new movie
					</Button>
				</Link>
			</Stack>
			<Routes>
				<Route path=':id' element={<MovieItem movies={movies}/>}/>
				<Route path='/' element={<MovieList movies={movies}/>}/>
				<Route path='new' element={<Navigate to='/movies/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Movies;