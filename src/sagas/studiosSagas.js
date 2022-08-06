import { put } from 'redux-saga/effects';
import dataService from '../API/cinema-service';
import { createStudioError, createStudioRequest, createStudioSuccess, deleteStudioError, deleteStudioRequest, deleteStudioSuccess, getAllStudiosError, getAllStudiosRequest, getAllStudiosSuccess, updateStudioError, updateStudioRequest, updateStudioSuccess } from '../store/actions/studiosActions';

export function* getAllStudiosSaga() {
	yield put(getAllStudiosRequest());
	try {
		const studios = yield dataService.get('/studios')
			.then(({data}) => data);
		yield put(getAllStudiosSuccess(studios))
	} catch (error) {
		yield put(getAllStudiosError(error))
	}
}
export function* createStudioSaga({payload}) {
	yield put(createStudioRequest());
	try {
		const newStudio = yield dataService.post('/studios', payload)
			.then(({data}) => data);
		yield put(createStudioSuccess(newStudio))
	} catch (error) {
		yield put(createStudioError(error))
	}
}
export function* updateStudioSaga({payload}) {
	yield put(updateStudioRequest());
	try {
		const updateStudio = yield dataService.put(`/studios/${payload.id}`, payload)
			.then(({data}) => data);
		yield put(updateStudioSuccess(updateStudio))
	} catch (error) {
		yield put(updateStudioError(error))
	}
}
export function* deleteStudioSaga({payload}) {
	yield put(deleteStudioRequest());
	try {
		yield dataService.delete(`/studios/${payload}`);
		yield put(deleteStudioSuccess(payload))
	} catch (error) {
		yield put(deleteStudioError(error))
	}
}