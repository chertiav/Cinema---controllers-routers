import { Stack } from '@mui/material';
import React from 'react';
import { titleApp } from '../../model/model';

function AppFooter() {
	const year = new Date().getFullYear();
	return (
		<Stack>© {year} {titleApp}</Stack>
	)
}
export default AppFooter;