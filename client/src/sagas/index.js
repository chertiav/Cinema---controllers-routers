import { takeLatest } from "redux-saga/effects";
import ACTIONS_TYPES from "../store/actions/actionsTypes";
import { createActorSaga, deleteActorSaga, getAllActorsSaga, getOneActorSaga, updateActorSaga } from "./actorsSagas";
import { createMovieSaga, deleteMovieSaga, getAllMoviesSaga, getOneMovieSaga, updateMovieSaga } from "./moviesSagas";
import { createDirectorSaga, deleteDirectorSaga, getAllDirectorsSaga, getOneDirectorSaga, updateDirectorSaga } from "./directorsSagas";
import { createStudioSaga, deleteStudioSaga, getAllStudiosSaga, getOneStudioSaga, updateStudioSaga } from "./studiosSagas";

function* rootSaga(){
	//MOVIES
	yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTIONS, getAllMoviesSaga)
	yield takeLatest(ACTIONS_TYPES.GET_MOVIE_ACTIONS, getOneMovieSaga)
	yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTIONS, createMovieSaga)
	yield takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTIONS, updateMovieSaga)
	yield takeLatest(ACTIONS_TYPES.DEL_MOVIE_ACTIONS, deleteMovieSaga)
	//ACTORS
	yield takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTIONS, getAllActorsSaga)
	yield takeLatest(ACTIONS_TYPES.GET_ACTOR_ACTIONS, getOneActorSaga)
	yield takeLatest(ACTIONS_TYPES.POST_ACTOR_ACTIONS, createActorSaga)
	yield takeLatest(ACTIONS_TYPES.PUT_ACTOR_ACTIONS, updateActorSaga)
	yield takeLatest(ACTIONS_TYPES.DEL_ACTOR_ACTIONS, deleteActorSaga)
	//DIRECTORS
	yield takeLatest(ACTIONS_TYPES.GET_DIRECTORS_ACTIONS, getAllDirectorsSaga)
	yield takeLatest(ACTIONS_TYPES.GET_DIRECTOR_ACTIONS, getOneDirectorSaga)
	yield takeLatest(ACTIONS_TYPES.POST_DIRECTOR_ACTIONS, createDirectorSaga)
	yield takeLatest(ACTIONS_TYPES.PUT_DIRECTOR_ACTIONS, updateDirectorSaga)
	yield takeLatest(ACTIONS_TYPES.DEL_DIRECTOR_ACTIONS, deleteDirectorSaga)
	//STUDIO
	yield takeLatest(ACTIONS_TYPES.GET_STUDIOS_ACTIONS, getAllStudiosSaga)
	yield takeLatest(ACTIONS_TYPES.GET_STUDIO_ACTIONS, getOneStudioSaga)
	yield takeLatest(ACTIONS_TYPES.POST_STUDIO_ACTIONS, createStudioSaga)
	yield takeLatest(ACTIONS_TYPES.PUT_STUDIO_ACTIONS, updateStudioSaga)
	yield takeLatest(ACTIONS_TYPES.DEL_STUDIO_ACTIONS, deleteStudioSaga)
}

export default rootSaga;