import { Button, Stack } from '@mui/material';
import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import StudiosItem from './StudiosItem';
import StudiosList from './StudiosList';

function Studios() {


	return (
		<>
			<Stack display={'flex'} justifyContent={'space-between'} margin={1}>
				<Link to='new'>
					<Button	variant='contained' color={'success'}>
						Add new studio
					</Button>
				</Link>
			</Stack>
			<Routes>
				<Route path=':id' element={<StudiosItem />}/>
				<Route path='/' element={<StudiosList />}/>
				<Route path='new' element={<Navigate to='/studios/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Studios;