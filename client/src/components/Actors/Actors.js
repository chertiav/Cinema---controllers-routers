import { Button, Stack } from '@mui/material';
import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import ActorsItem from './ActorsItem';
import ActorsList from './ActorsList';

function Actors() {

	return (
		<>
			<Stack margin={1}>
				<Link to='new'>
					<Button	variant='contained' color={'success'}>
						Add new actor
					</Button>
				</Link>
			</Stack>
			<Routes>
				<Route path=':id' element={<ActorsItem />}/>
				<Route path='/' element={<ActorsList />}/>
				<Route path='new' element={<Navigate to='/actors/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Actors;