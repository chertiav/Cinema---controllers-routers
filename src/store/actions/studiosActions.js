import ACTIONS_TYPES from './actionsTypes'

//Get All
	export const getAllStudiosAction = () => ({
		type: ACTIONS_TYPES.GET_STUDIOS_ACTIONS,
	})
	export const getAllStudiosRequest = () => ({
		type: ACTIONS_TYPES.GET_STUDIOS_REQUEST,
	})
	export const getAllStudiosSuccess = (payload) => ({
		type: ACTIONS_TYPES.GET_STUDIOS_SUCCESS,
		payload
	})
	export const getAllStudiosError = (payload) => ({
		type: ACTIONS_TYPES.GET_STUDIOS_ERROR,
		payload
	})
//Create
	export const createStudioAction = (payload) => ({
		type: ACTIONS_TYPES.POST_STUDIO_ACTIONS,
		payload
	})
	export const createStudioRequest = () => ({
		type: ACTIONS_TYPES.POST_STUDIO_REQUEST,
	})
	export const createStudioSuccess = (payload) => ({
		type: ACTIONS_TYPES.POST_STUDIO_SUCCESS,
		payload
	})
	export const createStudioError = (payload) => ({
		type: ACTIONS_TYPES.POST_STUDIO_ERROR,
		payload
	})
//Update
	export const updateStudioAction = (payload) => ({
		type: ACTIONS_TYPES.PUT_STUDIO_ACTIONS,
		payload
	})
	export const updateStudioRequest = () => ({
		type: ACTIONS_TYPES.PUT_STUDIO_REQUEST,
	})
	export const updateStudioSuccess = (payload) => ({
		type: ACTIONS_TYPES.PUT_STUDIO_SUCCESS,
		payload
	})
	export const updateStudioError = (payload) => ({
		type: ACTIONS_TYPES.PUT_STUDIO_ERROR,
		payload
	})
	//Delete
	export const deleteStudioAction = (payload) => ({
		type: ACTIONS_TYPES.DEL_STUDIO_ACTIONS,
		payload
	})
	export const deleteStudioRequest = () => ({
		type: ACTIONS_TYPES.DEL_STUDIO_REQUEST,
	})
	export const deleteStudioSuccess = (payload) => ({
		type: ACTIONS_TYPES.DEL_STUDIO_SUCCESS,
		payload
	})
	export const deleteStudioError = (payload) => ({
		type: ACTIONS_TYPES.DEL_STUDIO_ERROR,
		payload
	})