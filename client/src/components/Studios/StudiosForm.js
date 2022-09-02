import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { Grid, Stack } from '@mui/material';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//============================================================
import { emptyStudio, locations } from '../../model/model';
import { createStudioAction, updateStudioAction } from '../../store/actions/studiosActions';

const style ={
	styleSelectedFirst: {
		padding:'2px',
		fontSize:"0.7rem",
		outline:'none',
		borderRadius:'4px'
	},
	styleSelectedSecond : {
		padding:'5px',
		fontSize:"0.7rem",
		outline:'none',
		borderRadius:'4px',
		width:'100%',
	},
	fieldsetStyle: {
		borderRadius:'4px',
		padding:'10px',
		borderColor: 'rgb(25, 118, 210)',
		marginBottom:'10px'
	},
	legendStyle: {
		color: 'rgb(25, 118, 210)',
		paddingLeft:'4px',
		paddingRight:'4px'
	},
	textAreaStyle: {
		width: '100%',
		minHeight: '100px',
		padding: '3px',
		outline: 'none'
	},
	buttonGroup: {
		margin: '25px'
	}
}

function StudiosForm() {
	const {id} = useParams();
	const dispatch = useDispatch();
	const {studiosList: {studios}} = useSelector(state => state);
	const navigate = useNavigate();
	const currentStudio = studios.find(studio => studio.studio_id === parseInt(id));
	const goHome = () => navigate('/studios');
	const onStudioSubmit = (values) => {
		const newValues = {...values}
		if (newValues.found_year === "") {
			newValues.found_year = null
		}
		!values.studio_id
			? dispatch(createStudioAction(newValues))
			: dispatch(updateStudioAction(newValues));
		goHome();
	};
	const schema = Yup.object().shape({
		title: Yup.string()
			.required('Field is required'),
	});
	const withLabel = 2.5;
	const withInput = 9.5;
	const withInputYear = 2.5;
	const withInputNationality = 4;
	const defaultColor = 'rgb(25, 118, 210)';

	const renderForm = (props) => {
		return (
			<Form>
				<Stack>
					<Grid container marginTop={1} marginBottom={1} flexDirection='row' spacing={1} alignItems={'center'}>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='title'>Title</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInput} md={withInput} xl={withInput} sm={withInput} xs={withInput}>
							<Field name='title' placeholder='title'></Field>
						</Grid>
					</Grid>
					<ErrorMessage name='title'>
						{msg => <Stack alignItems={'center'} className="error">{msg}</Stack>}
					</ErrorMessage>
				</Stack>
				<Stack >
					<Grid container marginTop={1} marginBottom={1} flexDirection='row' spacing={1} alignItems={'center'}>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='found_year'>Foundation year</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInputYear} md={withInputYear} xl={withInputYear} sm={withInputYear} xs={withInputYear}>
						<Field
								name='found_year'
								type='date'
								style={style.styleSelectedFirst}
								/>

						</Grid>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='location'>Location</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInputNationality} md={withInputNationality} xl={withInputNationality} sm={withInputNationality} xs={withInputNationality}>
							<Field name='location' as="select" style={style.styleSelectedSecond}>
								<option disabled value='' placeholder='location'>location</option>
								{locations.map(location =>
									<option key={location} value={location}>{location}</option>
								)}
							</Field>
						</Grid>
					</Grid>
				</Stack>
				<fieldset style={style.fieldsetStyle}>
					<legend style={style.legendStyle}>
						Movies
					</legend>
					<FieldArray name="movies"  >
						{({push, remove, form: {values: {movies}}}) => {
							return (
								<Stack spacing={2}>
									{movies.map(element => element ? element : '').map((_, index) => (
										<Stack key={index} direction="row" spacing={2}>
											<Field name={`movies[${index}]`} placeholder='movie'></Field>
											{index > 0 && (
												<Button
													type="button"
													variant="contained"
													color="error"
													size="small"
													startIcon={<RemoveIcon />}
													onClick={() => remove(index)}
												></Button>
											)}
											<Button
												type="button"
												variant="contained"
												color="success"
												size="small"
												startIcon={<AddIcon />}
												onClick={() => push('')}
											></Button>
										</Stack>
									))}
								</Stack>
							)
						}}
					</FieldArray>
				</fieldset>
				<Stack direction='row' spacing={2} color = {defaultColor}>
					<label htmlFor='logo'>
						Logo
					</label>
					<Field name='logo' placeholder='path to logo' as='textarea' style={style.textAreaStyle}></Field>
				</Stack>
				<Stack direction='row' spacing={8} justifyContent='center' style={style.buttonGroup}>
					<Button
						type="submit"
						disabled={!props.isValid}
						variant="contained"
						color="success"
						size="large"
						startIcon={<SaveIcon />}
					>Save</Button>
					<Button
						type="button"
						variant="contained"
						color="secondary"
						size="large"
						startIcon={<KeyboardReturnIcon />}
						onClick={() =>goHome()}
					>Return</Button>
					<Button
						type="reset"
						variant="contained"
						color="error"
						size="large"
						startIcon={<ClearIcon />}
					>Reset</Button>
				</Stack>
			</Form>
		)
	}

	return (
		<Formik
			initialValues = {currentStudio ? currentStudio : emptyStudio}
			onSubmit = {onStudioSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	)
}

export default StudiosForm;