import { Button, Stack } from '@mui/material';
import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import DirectorsItem from './DirectorsItem';
import DirectorsList from './DirectorsList';

function Directors() {

	return (
		<>
			<Stack display={'flex'} justifyContent={'space-between'} margin={1}>
				<Link to='new'>
					<Button	variant='contained' color={'success'}>
						Add new director
					</Button>
				</Link>
				<Routes>
					<Route path=':id' element={<DirectorsItem />}></Route>
					<Route path='/' element={<DirectorsList />}></Route>
					<Route path='new' element={<Navigate to='/directors/new/:id'/>}></Route>
				</Routes>
			</Stack>
		</>
	)
}

export default Directors;