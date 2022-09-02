import { put } from 'redux-saga/effects';
import dataService from '../API/cinema-service';
import { createActorError, createActorRequest, createActorSuccess, deleteActorError, deleteActorRequest, deleteActorSuccess, getAllActorsError, getAllActorsRequest, getAllActorsSuccess, getOneActorError, getOneActorRequest, getOneActorSuccess, updateActorError, updateActorRequest, updateActorSuccess  } from '../store/actions/actorsActions';


export function* getAllActorsSaga() {
	yield put(getAllActorsRequest());
	try {
		const actors = yield dataService.get('/actors')
			.then(({data}) => data);
		yield put(getAllActorsSuccess(actors))
	} catch (error) {
		yield put(getAllActorsError(error))
	}
}
export function* getOneActorSaga({payload}) {
	yield put(getOneActorRequest());
	try {
		const actor = yield dataService.get(`/actors/${payload}`)
			.then(({data}) => data);
		yield put(getOneActorSuccess(actor))
	} catch (error) {
		yield put(getOneActorError(error))
	}
}
export function* createActorSaga({payload}) {
	yield put(createActorRequest());
	try {
		const newActor = yield dataService.post('/actors', payload)
			.then(({data}) => data);
		yield put(createActorSuccess(newActor))
	} catch (error) {
		yield put(createActorError(error))
	}
}
export function* updateActorSaga({payload}) {
	yield put(updateActorRequest());
	try {
		const updateActor = yield dataService.put(`/actors`, payload)
			.then(({data}) => data);
		yield put(updateActorSuccess(updateActor))
	} catch (error) {
		yield put(updateActorError(error))
	}
}
export function* deleteActorSaga({payload}) {
	yield put(deleteActorRequest());
	try {
		yield dataService.delete(`/actors/${payload}`);
		yield put(deleteActorSuccess(payload))
	} catch (error) {
		yield put(deleteActorError(error))
	}
}