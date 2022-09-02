import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyMovie } from '../../model/model';
import { getOneMovieAction } from '../../store/actions/moviesActions';


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

function MovieItem() {

	const {id} = useParams();
	console.log(id);


	const dispatch = useDispatch();
	const {moviesList: {movies}} = useSelector(state => state);
	const [film] = movies;
	const movie = film ? film : emptyMovie;
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getOneMovieAction(id))
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
						<img style={imgStyle} src={movie.poster} alt="poster movie"/>
					</Stack>
				</Grid>
				<Grid	item lg={withGridBlockContent} md={withGridBlockContent}
					xl={withGridBlockContent} sm={withGridBlockContent} xs={withGridBlockContent} display={'flex'} flexDirection={'column'}
					alignItems={'flex-start'}
				>
					<ul style={listItemStyle}>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>film: </span>
							{movie.title}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>release year: </span>
							{movie.release_year}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>genre: </span>
							{movie.genre}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>studio: </span>
							{movie.studio}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>directors: </span>
							{movie.directors.join(', ')}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>actors: </span>
							{movie.actors.join(', ')}
						</li>
					</ul>
					<Button
						variant="outlined"
						onClick={()=> navigate('/movies')}
					>
						Return
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default MovieItem;