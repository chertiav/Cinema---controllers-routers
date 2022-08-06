import ACTIONS_TYPES from './actionsTypes'

//Get All
	export const getAllActorsAction = () => ({
		type: ACTIONS_TYPES.GET_ACTORS_ACTIONS,
	})
	export const getAllActorsRequest = () => ({
		type: ACTIONS_TYPES.GET_ACTORS_REQUEST,
	})
	export const getAllActorsSuccess = (payload) => ({
		type: ACTIONS_TYPES.GET_ACTORS_SUCCESS,
		payload
	})
	export const getAllActorsError = (payload) => ({
		type: ACTIONS_TYPES.GET_ACTORS_ERROR,
		payload
	})
//Сreate
	export const createActorAction = (payload) => ({
		type: ACTIONS_TYPES.POST_ACTOR_ACTIONS,
		payload
	})
	export const createActorRequest = () => ({
		type: ACTIONS_TYPES.POST_ACTOR_REQUEST,
	})
	export const createActorSuccess = (payload) => ({
		type: ACTIONS_TYPES.POST_ACTOR_SUCCESS,
		payload
	})
	export const createActorError = (payload) => ({
		type: ACTIONS_TYPES.POST_ACTOR_ERROR,
		payload
	})
//Update
	export const updateActorAction = (payload) => ({
		type: ACTIONS_TYPES.PUT_ACTOR_ACTIONS,
		payload
	})
	export const updateActorRequest = () => ({
		type: ACTIONS_TYPES.PUT_ACTOR_REQUEST,
	})
	export const updateActorSuccess = (payload) => ({
		type: ACTIONS_TYPES.PUT_ACTOR_SUCCESS,
		payload
	})
	export const updateActorError = (payload) => ({
		type: ACTIONS_TYPES.PUT_ACTOR_ERROR,
		payload
	})
//Delete
	export const deleteActorAction = (payload) => ({
		type: ACTIONS_TYPES.DEL_ACTOR_ACTIONS,
		payload
	})
	export const deleteActorRequest = () => ({
		type: ACTIONS_TYPES.DEL_ACTOR_REQUEST,
	})
	export const deleteActorSuccess = (payload) => ({
		type: ACTIONS_TYPES.DEL_ACTOR_SUCCESS,
		payload
	})
	export const deleteActorError = (payload) => ({
		type: ACTIONS_TYPES.DEL_ACTOR_ERROR,
		payload
	})