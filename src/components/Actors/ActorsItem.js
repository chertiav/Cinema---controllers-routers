import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { emptyActor } from '../../model/model';

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

function ActorsItem({actors}) {

	const {id} = useParams();
	const actorFilm = actors.find(actor => actor.id === parseInt(id))
	const navigate = useNavigate();
	const withGridBlockImg = 4;
	const withGridBlockContent = 8;
	const actor = actorFilm ? actorFilm : emptyActor;

	return (
		<Box>
			<Grid container spacing={1} >
				<Grid	item lg={withGridBlockImg} md={withGridBlockImg}
					xl={withGridBlockImg} sm={withGridBlockImg} xs={withGridBlockImg}
					color={'red'}
				>
					<Stack style={imgContainerStyle}>
						<img style={imgStyle} src={actor.image} alt="actor foto"/>
					</Stack>
				</Grid>
				<Grid	item lg={withGridBlockContent} md={withGridBlockContent}
					xl={withGridBlockContent} sm={withGridBlockContent} xs={withGridBlockContent} display={'flex'} flexDirection={'column'}
					alignItems={'flex-start'}
				>
					<ul style={listItemStyle}>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>full name: </span>
							{actor.fullName}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>birth year: </span>
							{actor.birthYear}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>nationality: </span>
							{actor.nationality}
						</li>
						<li style={itemStyle}>
							<span style={itemTitleStyle}>movies: </span>
							{actor.movies.join(', ')}
						</li>
					</ul>
					<Button
						variant="outlined"
						onClick={()=> navigate('/actors')}
					>
						Return
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default ActorsItem;