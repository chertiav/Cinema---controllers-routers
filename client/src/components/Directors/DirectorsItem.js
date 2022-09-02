import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyDirector } from '../../model/model';
import { getOneDirectorAction } from '../../store/actions/directorsActions';


const imgContainerStyle = {
  position: 'relative',
	maxWidth: '100%',
	overflow: 'hidden',
	paddingBottom: '100%'
}

const imgStyle = {
  borderRadius: '15px',
  padding: '5px',
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'absolute',
  top: '0',
  bottom: '0',
  objectFit: 'contain',
  margin: '0 auto'
}

const listItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
  marginBottom: '15px'
}

const itemStyle = {
  color: '#384259',
  padding: '5px',
  fontSize: '1.2em'
}

const itemTitleStyle = {
  color: 'rgb(25, 118, 210)'
}

function DirectorsItem() {

	const {id} = useParams();
	const dispatch = useDispatch();
	const {directorsList: {directors}} = useSelector(state => state);
	const [directorFilm] =directors;
	console.log(directorFilm);
	const director = directorFilm ? directorFilm : emptyDirector;
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getOneDirectorAction(id))
	}, [dispatch, id]);

	const withGridBlockImg = 4;
	const withGridBlockContent = 8;

	return (
		<Box>
			<Grid container spacing={1} >
				<Grid	item lg={withGridBlockImg} md={withGridBlockImg}
					xl={withGridBlockImg} sm={withGridBlockImg} xs={withGridBlockImg}
					color={'red'}
				>
					<Stack style={imgContainerStyle}>
						<img style={imgStyle} src={director.image} alt="director foto"/>
					</Stack>
				</Grid>
				<Grid	item lg={withGridBlockContent} md={withGridBlockContent}
					xl={withGridBlockContent} sm={withGridBlockContent} xs={withGridBlockContent} display={'flex'} flexDirection={'column'}
					alignItems={'flex-start'}
				>
					<ul style={listItemStyle}>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>full name: </span>
							{director.full_name}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>birth year: </span>
							{director.birth_year}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>death year: </span>
							{director.death_year}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>nationality: </span>
							{director.nationality}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>movies: </span>
							{director.movies}
						</li>
					</ul>
					<Button
						variant="outlined"
						onClick={()=> navigate('/directors')}
					>
						Return
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default DirectorsItem;