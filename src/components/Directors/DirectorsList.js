import { Button, Grid, Stack } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { deleteDirectorAction } from '../../store/actions/directorsActions';
import { useDispatch } from 'react-redux';

const mainListStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin: '5px'
}

const mainListItemStyle = {
	display: 'flex',
	flexDirection: 'row',
	margin: '5px',
	justifyContent: 'space-between'
}

const mainListItemTitleStyle = {
	color: '#384259',
	display: 'block',
	width: '100%',
	padding: '5px',
	cursor: 'pointer',
	marginRight: '20px',
	borderRadius: '4px',
	backgroundColor: 'rgb(224, 224, 224)',
}

function DirectorsList({directors}) {

	const dispatch = useDispatch();
	const onDelete = (id) => {
		dispatch(deleteDirectorAction(id));
	}
	const handleMouseEnter = (event) => {
		event.target.style.backgroundColor = '#ffff';
		event.target.style.boxShadow = '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)';
	};
 	const handleMouseLeave = (event) => {
		event.target.style.backgroundColor = 'rgb(224, 224, 224)';
		event.target.style.boxShadow = null;
	};
	const handleMouseDown = (event) => {
		event.target.style.backgroundColor = 'rgb(200, 217, 219)';
	};

	return (
		<>
			{directors.length
			?	<ul style={mainListStyle}>
					{directors.map(director => (
						<li style={mainListItemStyle} key={director.id}>
							<Link
								to={`${director.id}`}
								style={mainListItemTitleStyle}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onMouseDown={handleMouseDown}
							>
								{director.fullName}
							</Link>
							<Stack marginRight={1}>
								<Link to={`new/${director.id}`} >
									<Button
										variant="contained"
										color = 'warning'
										size='large'
										startIcon={<EditIcon/>}
									/>
								</Link>
							</Stack>
							<Stack marginRight={1}>
								<Button
									variant="contained"
									color = 'error'
									size='large'
									startIcon={<DeleteIcon/>}
									onClick={() => onDelete(director.id)}
								/>
							</Stack>
						</li>
					))}
				</ul>
			:	<Grid item color={'red'} justifyContent={'center'}	display={'flex'}>
					No data!
				</Grid>}
		</>
	)
}

export default DirectorsList;