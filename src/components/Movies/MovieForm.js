import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { Button, Grid, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

//==========================================
import { emptyMovie } from '../../model/model';
import { createMovieAction, updateMovieAction } from '../../store/actions/moviesActions';

const style ={
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

function MovieForm() {

	const {id} = useParams();
	const dispatch = useDispatch();
	const {moviesList: {movies}} = useSelector(state => state);
	const navigate = useNavigate();
	const currentMovie = movies.find(movie => movie.id === parseInt(id));
	const goHome = () => navigate('/movies');

	const onMoviesSubmit = (values, actions) => {
		!values.id
			? dispatch(createMovieAction({...values, id: Date.now()}))
			: dispatch(updateMovieAction(values));
		goHome();
	};

	const schema = Yup.object().shape({
		title: Yup.string()
			.required('Field is required'),
	});

	const withLabel = 2.5;
	const withInput = 9.5;
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
				<fieldset style={style.fieldsetStyle}>
					<legend style={style.legendStyle}>
						Directors
					</legend>
					<FieldArray name="directors">
						{({push, remove, form: {values: {directors}}}) => {
							return (
								<Stack spacing={2}>
									{directors.map((_, index) => (
										<Stack key={index} direction="row" spacing={2}>
											<Field name={`directors[${index}]`} placeholder='director'></Field>
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
				<fieldset style={style.fieldsetStyle}>
					<legend style={style.legendStyle}>
						Actors
					</legend>
					<FieldArray name="actors">
						{({push, remove, form: {values: {actors}}}) => {
							return (
								<Stack spacing={2}>
									{actors.map((_, index) => (
										<Stack key={index} direction="row" spacing={2}>
											<Field name={`actors[${index}]`} placeholder='actor'></Field>
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
				<fieldset style={style.fieldsetStyle}>
					<legend style={style.legendStyle}>
						Studios
					</legend>
					<FieldArray name="studios">
						{({push, remove, form: {values: {studios}}}) => {
							return (
								<Stack spacing={2}>
									{studios.map((_, index) => (
										<Stack key={index} direction="row" spacing={2}>
											<Field name={`studios[${index}]`} placeholder='studio'></Field>
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
					<label htmlFor='poster'>
						Poster
					</label>
					<Field name='poster' placeholder='path to poster' as='textarea' style={style.textAreaStyle}></Field>
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
			initialValues = {currentMovie ? currentMovie : emptyMovie}
			onSubmit = {onMoviesSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	)
}

export default MovieForm;