import ACTIONS_TYPES from './actionsTypes'

//Get All
	export const getAllDirectorsAction = () => ({
		type: ACTIONS_TYPES.GET_DIRECTORS_ACTIONS,
	})
	export const getAllDirectorsRequest = () => ({
		type: ACTIONS_TYPES.GET_DIRECTORS_REQUEST,
	})
	export const getAllDirectorsSuccess = (payload) => ({
		type: ACTIONS_TYPES.GET_DIRECTORS_SUCCESS,
		payload
	})
	export const getAllDirectorsError = (payload) => ({
		type: ACTIONS_TYPES.GET_DIRECTORS_ERROR,
		payload
	})
//Create
	export const createDirectorAction = (payload) => ({
		type: ACTIONS_TYPES.POST_DIRECTOR_ACTIONS,
		payload
	})
	export const createDirectorRequest = () => ({
		type: ACTIONS_TYPES.POST_DIRECTOR_REQUEST,
	})
	export const createDirectorSuccess = (payload) => ({
		type: ACTIONS_TYPES.POST_DIRECTOR_SUCCESS,
		payload
	})
	export const createDirectorError = (payload) => ({
		type: ACTIONS_TYPES.POST_DIRECTOR_ERROR,
		payload
	})
//Update
	export const updateDirectorAction = (payload) => ({
		type: ACTIONS_TYPES.PUT_DIRECTOR_ACTIONS,
		payload
	})
	export const updateDirectorRequest = () => ({
		type: ACTIONS_TYPES.PUT_DIRECTOR_REQUEST,
	})
	export const updateDirectorSuccess = (payload) => ({
		type: ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS,
		payload
	})
	export const updateDirectorError = (payload) => ({
		type: ACTIONS_TYPES.PUT_DIRECTOR_ERROR,
		payload
	})
//Delete
	export const deleteDirectorAction = (payload) => ({
		type: ACTIONS_TYPES.DEL_DIRECTOR_ACTIONS,
		payload
	})
	export const deleteDirectorRequest = () => ({
		type: ACTIONS_TYPES.DEL_DIRECTOR_REQUEST,
	})
	export const deleteDirectorSuccess = (payload) => ({
		type: ACTIONS_TYPES.DEL_DIRECTOR_SUCCESS,
		payload
	})
	export const deleteDirectorError = (payload) => ({
		type: ACTIONS_TYPES.DEL_DIRECTOR_ERROR,
		payload
	})