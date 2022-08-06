import { Stack } from '@mui/material';
import React from 'react';
import { titleApp } from '../../model/model';

const styles = {
	color: 'rgb(25, 118, 210)',
	justifySelf: 'center',
	alignItems: 'center',
	fontSize: '2rem',
	marginTop: '10%'
}

function HomePage() {
	return (
		<Stack style={styles}>
				{titleApp} APP
		</Stack>
	)
}

export default HomePage;