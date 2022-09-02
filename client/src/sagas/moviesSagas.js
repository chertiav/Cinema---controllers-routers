import { put } from 'redux-saga/effects';
import dataService from '../API/cinema-service';
import { createMovieError, createMovieRequest, createMovieSuccess, deleteMovieError, deleteMovieRequest, deleteMovieSuccess, getAllMoviesError, getAllMoviesRequest, getAllMoviesSuccess, getOneMovieError, getOneMovieRequest, getOneMovieSuccess, updateMovieError, updateMovieRequest, updateMovieSuccess } from '../store/actions/moviesActions';

export function* getAllMoviesSaga() {
	yield put(getAllMoviesRequest());
	try {
		const movies = yield dataService.get('/movies')
			.then(({data}) => data);
		yield put(getAllMoviesSuccess(movies))
	} catch (error) {
		yield put(getAllMoviesError(error))
	}
}
export function* getOneMovieSaga({payload}) {
	yield put(getOneMovieRequest());
	try {
		const movie = yield dataService.get(`/movies/${payload}`)
			.then(({data}) => data);
		yield put(getOneMovieSuccess(movie))
	} catch (error) {
		yield put(getOneMovieError(error))
	}
}
export function* createMovieSaga({payload}) {
	yield put(createMovieRequest());
	try {
		const newMovie = yield dataService.post('/movies', payload)
			.then(({data}) => data);
		yield put(createMovieSuccess(newMovie))
	} catch (error) {
		yield put(createMovieError(error))
	}
}
export function* updateMovieSaga({payload}) {
	yield put(updateMovieRequest());
	try {
		const updateMovie = yield dataService.put(`/movies`, payload)
			.then(({data}) => data);
		yield put(updateMovieSuccess(updateMovie))
	} catch (error) {
		yield put(updateMovieError(error))
	}
}
export function* deleteMovieSaga({payload}) {
	yield put(deleteMovieRequest());
	try {
		yield dataService.delete(`/movies/${payload}`);
		yield put(deleteMovieSuccess(payload))
	} catch (error) {
		yield put(deleteMovieError(error))
	}
}