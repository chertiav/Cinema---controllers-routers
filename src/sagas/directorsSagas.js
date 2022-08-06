import { put } from 'redux-saga/effects';
import dataService from '../API/cinema-service';
import { createDirectorError, createDirectorRequest, createDirectorSuccess, deleteDirectorError, deleteDirectorRequest, deleteDirectorSuccess, getAllDirectorsError, getAllDirectorsRequest, getAllDirectorsSuccess, updateDirectorError, updateDirectorRequest, updateDirectorSuccess } from '../store/actions/directorsActions';

export function* getAllDirectorsSaga() {
	yield put(getAllDirectorsRequest());
	try {
		const directors = yield dataService.get('/directors')
			.then(({data}) => data);
		yield put(getAllDirectorsSuccess(directors))
	} catch (error) {
		yield put(getAllDirectorsError(error))
	}
}
export function* createDirectorSaga({payload}) {
	yield put(createDirectorRequest());
	try {
		const newDirector = yield dataService.post('/directors', payload)
			.then(({data}) => data);
		yield put(createDirectorSuccess(newDirector))
	} catch (error) {
		yield put(createDirectorError(error))
	}
}
export function* updateDirectorSaga({payload}) {
	yield put(updateDirectorRequest());
	try {
		const updateDirector = yield dataService.put(`/directors/${payload.id}`, payload)
			.then(({data}) => data);
		yield put(updateDirectorSuccess(updateDirector))
	} catch (error) {
		yield put(updateDirectorError(error))
	}
}
export function* deleteDirectorSaga({payload}) {
	yield put(deleteDirectorRequest());
	try {
		yield dataService.delete(`/directors/${payload}`);
		yield put(deleteDirectorSuccess(payload))
	} catch (error) {
		yield put(deleteDirectorError(error))
	}
}