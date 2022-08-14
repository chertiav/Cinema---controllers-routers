import ACTIONS_TYPES from './actionsTypes'

//Get All
	export const getAllMoviesAction = () => ({
		type: ACTIONS_TYPES.GET_MOVIES_ACTIONS,
	})
	export const getAllMoviesRequest = () => ({
		type: ACTIONS_TYPES.GET_MOVIES_REQUEST,
	})
	export const getAllMoviesSuccess = (payload) => ({
		type: ACTIONS_TYPES.GET_MOVIES_SUCCESS,
		payload
	})
	export const getAllMoviesError = (payload) => ({
		type: ACTIONS_TYPES.GET_MOVIES_ERROR,
		payload
	})
//Create
	export const createMovieAction = (payload) => ({
		type: ACTIONS_TYPES.POST_MOVIE_ACTIONS,
		payload
	})
	export const createMovieRequest = () => ({
		type: ACTIONS_TYPES.POST_MOVIE_REQUEST,
	})
	export const createMovieSuccess = (payload) => ({
		type: ACTIONS_TYPES.POST_MOVIE_SUCCESS,
		payload
	})
	export const createMovieError = (payload) => ({
		type: ACTIONS_TYPES.POST_MOVIE_ERROR,
		payload
	})
//Update
	export const updateMovieAction = (payload) => ({
		type: ACTIONS_TYPES.PUT_MOVIE_ACTIONS,
		payload
	})
	export const updateMovieRequest = () => ({
		type: ACTIONS_TYPES.PUT_MOVIE_REQUEST,
	})
	export const updateMovieSuccess = (payload) => ({
		type: ACTIONS_TYPES.PUT_MOVIE_SUCCESS,
		payload
	})
	export const updateMovieError = (payload) => ({
		type: ACTIONS_TYPES.PUT_MOVIE_ERROR,
		payload
	})
//Delete
	export const deleteMovieAction = (payload) => ({
		type: ACTIONS_TYPES.DEL_MOVIE_ACTIONS,
		payload
	})
	export const deleteMovieRequest = () => ({
		type: ACTIONS_TYPES.DEL_MOVIE_REQUEST,
	})
	export const deleteMovieSuccess = (payload) => ({
		type: ACTIONS_TYPES.DEL_MOVIE_SUCCESS,
		payload
	})
	export const deleteMovieError = (payload) => ({
		type: ACTIONS_TYPES.DEL_MOVIE_ERROR,
		payload
	})