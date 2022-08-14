import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ActorsForm from '../Actors/ActorsForm';
import DirectorForm from '../Directors/DirectorForm';
import MovieForm from '../Movies/MovieForm';
import StudiosForm from '../Studios/StudiosForm';

const styles = {
	display: 'flex',
  padding: '5px',
  borderRadius: '4px',
  color: '#f1f1f1f1',
	backgroundColor: 'rgb(25,118,210)',
	border: '1px solid',
	letterSpacing: '0.1rem',
}

function CinemaService() {
	return (
		<>
			<span style={styles}>Cinema Service</span>
			<Routes>
				<Route path='/actors/new' element={<ActorsForm/>}/>
				<Route path='/actors/new/:id' element={<ActorsForm/>}/>
				<Route path='/directors/new' element={<DirectorForm/>}/>
				<Route path='/directors/new/:id' element={<DirectorForm/>}/>
				<Route path='/movies/new' element={<MovieForm/>}/>
				<Route path='/movies/new/:id' element={<MovieForm/>}/>
				<Route path='/studios/new' element={<StudiosForm/>}/>
				<Route path='/studios/new/:id' element={<StudiosForm/>}/>
			</Routes>
		</>
	);
}

export default CinemaService;