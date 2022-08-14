import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { getAllStudiosAction } from '../../store/actions/studiosActions';
import StudiosItem from './StudiosItem';
import StudiosList from './StudiosList';

function Studios() {

	const {studiosList: {studios}} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllStudiosAction())
	}, [dispatch]);

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
				<Route path=':id' element={<StudiosItem studios={studios}/>}/>
				<Route path='/' element={<StudiosList studios={studios}/>}/>
				<Route path='new' element={<Navigate to='/studios/new/:id'/>} />
			</Routes>
		</>
	)
}

export default Studios;