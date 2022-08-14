import { Button, Stack } from '@mui/material';
import React, { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import DirectorsItem from './DirectorsItem';
import DirectorsList from './DirectorsList';
import { getAllDirectorsAction } from '../../store/actions/directorsActions';

function Directors() {

	const {directorsList: {directors}} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDirectorsAction())
	}, [dispatch]);

	return (
		<>
			<Stack display={'flex'} justifyContent={'space-between'} margin={1}>
				<Link to='new'>
					<Button	variant='contained' color={'success'}>
						Add new director
					</Button>
				</Link>
				<Routes>
					<Route path=':id' element={<DirectorsItem directors={directors}/>}></Route>
					<Route path='/' element={<DirectorsList directors={directors}/>}></Route>
					<Route path='new' element={<Navigate to='/directors/new/:id'/>}></Route>
				</Routes>
			</Stack>
		</>
	)
}

export default Directors;