import { Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudiosAction, deleteStudioAction } from '../../store/actions/studiosActions';


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

function StudiosList() {

	const {studiosList: {studios}} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllStudiosAction())
	}, [dispatch]);


	const onDelete = (id) => {
		dispatch(deleteStudioAction(id));
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
			{studios.length
			? <ul style={mainListStyle}>
					{studios.map(studio =>(
						<li style={mainListItemStyle} key={studio.studio_id}>
							<Link
								to={`${studio.studio_id}`}
								style={mainListItemTitleStyle}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onMouseDown={handleMouseDown}
							>
								{studio.title}
							</Link>
							<Stack marginRight={1}>
								<Link to={`new/${studio.studio_id}`} >
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
									onClick={() => onDelete(studio.studio_id)}
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

export default StudiosList;