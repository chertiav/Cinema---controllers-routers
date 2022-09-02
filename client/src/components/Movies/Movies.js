import { Button, Stack } from '@mui/material';
import React from 'react';
import { Navigate, Route, Link, Routes } from 'react-router-dom'
import MovieItem from './MovieItem';
import MovieList from './MovieList';

function Movies() {


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
				<Route path=':id' element={<MovieItem />}/>
				<Route path='/' element={<MovieList />}/>
				<Route path='new' element={<Navigate to='/movies/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Movies;