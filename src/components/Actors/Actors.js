import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActorsAction } from '../../store/actions/actorsActions';
import ActorsItem from './ActorsItem';
import ActorsList from './ActorsList';

function Actors() {

	const {actorsList: {actors}} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllActorsAction())
	}, [dispatch]);

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
				<Route path=':id' element={<ActorsItem actors={actors}/>}/>
				<Route path='/' element={<ActorsList actors={actors}/>}/>
				<Route path='new' element={<Navigate to='/actors/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Actors;