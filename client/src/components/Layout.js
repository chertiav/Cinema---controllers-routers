import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
//=============================================
import AppHeader from '../components/Header/AppHeader'
import CinemaService from './Service/CinemaService';
import AppFooter from './Footer/AppFooter';
import Navbar from '../UI/Navbar/Navbar';
import Loader from '../UI/Loader/Loader';



function Layout() {

	const {
		studiosList: {isFetching: studiosIsFetching, error: studiosError},
		moviesList: {isFetching: moviesIsFetching, error: moviesError},
		actorsList: {isFetching: actorsIsFetching, error: actorsError},
		directorsList: {isFetching: directorsIsFetching,  error: directorsError}
	} = useSelector(state => state);

	const isFetching = studiosIsFetching || moviesIsFetching
		|| actorsIsFetching || directorsIsFetching;

	const error = studiosError || moviesError
		|| actorsError || directorsError;

	const withHeder = 12;
	const withFooter = 12;
	const withNav = 2;
	const withMain = 6;
	const withService = 4;

	return (
		<>
		{isFetching && <Loader/>}
		<Box className={isFetching && "fetghing"}>
			<Grid container minHeight={'100vh'}	flexDirection={'column'}>
				<Grid
					item	lg={withHeder} md={withHeder}
						xl={withHeder} sm={withHeder} xs={withHeder}
				>
					<AppHeader />
				</Grid>
				<Grid
					container	marginTop={1} marginBottom={1}
					spacing={1} flex={'1 1 auto'} padding={1}
				>
					<Grid
						item lg={withNav} md={withNav}
							xl={withNav} sm={withNav} xs={withNav}
					>
						<Navbar />
					</Grid>
					<Grid
						item lg={withMain} md={withMain}
							xl={withMain} sm={withMain} xs={withMain}
					>
						{error && <span className="error">{error.code} {error.message}</span>}
						<Outlet/>
					</Grid>
					<Grid
						item lg={withService} md={withService}
							xl={withService} sm={withService} xs={withService}
					>
						<CinemaService />
					</Grid>
				</Grid>
				<Grid
					item lg={withFooter} md={withFooter}
						xl={withFooter} sm={withFooter} xs={withFooter}
					backgroundColor={'rgb(25, 118, 210)'}
					padding={2} textAlign={'center'}
				>
					<AppFooter />
				</Grid>
			</Grid>
		</Box>
		</>
	)
}

export default Layout;