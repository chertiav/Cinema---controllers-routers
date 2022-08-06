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
import { emptyDirector, nationalities } from '../../model/model';
import { createDirectorAction, updateDirectorAction } from '../../store/actions/directorsActions';

const style ={
	styleSelectedFirst: {
		padding:'5px',
		fontSize:"1rem",
		outline:'none',
		borderRadius:'4px'
	},
	styleSelectedSecond : {
		padding:'5px',
		fontSize:"1rem",
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

function DirectorForm() {

	const {id} = useParams();
	const dispatch = useDispatch();
	const {directorsList: {directors}} = useSelector(state => state);
	const navigate = useNavigate();
	const currentDirector = directors.find(director => director.id === parseInt(id));
	const goHome = () => navigate('/directors');
	const onDirectorSubmit = (values, actions) => {
		!values.id
			? dispatch(createDirectorAction({...values, id: Date.now()}))
			: dispatch(updateDirectorAction(values));
		goHome();
	};
	const schema = Yup.object().shape({
		fullName: Yup.string()
			.required('Field is required'),
		birthYear: Yup.number()
			.required('Field is required'),
		nationality: Yup.string()
			.required('Field is required'),
	});
	const createYearList =() => {
		let arrayYear = [];
		for (let year = 1900; year < (new Date().getFullYear()-10); year++) {
			arrayYear.push(year)
		}
		return arrayYear
	}
	const arrayYear = createYearList();

	const withLabel = 2.5;
	const withInput = 9.5;
	const withInputYear = 2;
	const withErrorYear = 4.5;
	const withInputNationality = 5;
	const withErrorNationality = 7.5;
	const defaultColor = 'rgb(25, 118, 210)';

	const renderForm = (props) => {
		return (
			<Form>
				<Stack>
					<Grid container marginTop={1} marginBottom={1} flexDirection='row' spacing={1} alignItems={'center'}>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='fullName'>Full name</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInput} md={withInput} xl={withInput} sm={withInput} xs={withInput}>
							<Field name='fullName' placeholder='full name'></Field>
						</Grid>
					</Grid>
					<ErrorMessage name='fullName'>
						{msg => <Stack alignItems={'center'} className="error">{msg}</Stack>}
					</ErrorMessage>
				</Stack>
				<Stack >
					<Grid container marginTop={1} marginBottom={1} flexDirection='row' spacing={1} alignItems={'center'}>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='birthYear'>Birth year</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInputYear} md={withInputYear} xl={withInputYear} sm={withInputYear} xs={withInputYear}>
							<Field name='birthYear' as="select" style={style.styleSelectedFirst}>
								<option disabled value=''>year</option>
								{arrayYear.map(year =>
									<option key={year} value={year}>{year}</option>
								)}
							</Field>

						</Grid>
						<Grid item color = {defaultColor} lg={withLabel} md={withLabel} xl={withLabel} sm={withLabel} xs={withLabel}>
							<label htmlFor='nationality'>Nationality</label>
						</Grid>
						<Grid item color = {defaultColor} lg={withInputNationality} md={withInputNationality} xl={withInputNationality} sm={withInputNationality} xs={withInputNationality}>
							<Field name='nationality' as="select" style={style.styleSelectedSecond}>
								<option disabled value='' placeholder='national'>nationality</option>
								{nationalities.map(nationality =>
									<option key={nationality} value={nationality}>{nationality}</option>
								)}
							</Field>
						</Grid>
					</Grid>
					<Grid container flexDirection='row' spacing={1} alignItems={'center'}>
						<Grid item lg={withErrorYear} md={withErrorYear} xl={withErrorYear} sm={withErrorYear} xs={withErrorYear}>
							<ErrorMessage name='birthYear'>
								{msg => <Stack alignItems={'center'} className="error">{msg}</Stack>}
							</ErrorMessage>
						</Grid>
						<Grid item lg={withErrorNationality} md={withErrorNationality} xl={withErrorNationality} sm={withErrorNationality} xs={withErrorNationality}>
							<ErrorMessage name='nationality'>
								{msg => <Stack alignItems={'center'} className="error">{msg}</Stack>}
							</ErrorMessage>
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
									{movies.map((_, index) => (
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
					<label htmlFor='image'>
						Photo
					</label>
					<Field name='image' placeholder='path to photo' as='textarea' style={style.textAreaStyle}></Field>
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
			initialValues = {currentDirector ? currentDirector : emptyDirector}
			onSubmit = {onDirectorSubmit}
			validationSchema={schema}
		>
			{renderForm}
		</Formik>
	)
}

export default DirectorForm;