import ACTIONS_TYPES from "../actions/actionsTypes"

const initislState= {
	actors: [],
	error: null,
	isFetching: false
}

const actorsReducer = (state = initislState, {type, payload}) => {
	switch (type) {
	//Get All
		case ACTIONS_TYPES.GET_ACTORS_SUCCESS:
			return {
				...state,
				actors: payload,
				isFetching: false,
			}
		case ACTIONS_TYPES.GET_ACTORS_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.GET_ACTORS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Create
		case ACTIONS_TYPES.POST_ACTOR_SUCCESS:
			return {
				...state,
				actors: [...state.actors, payload],
				isFetching: false,
			}
		case ACTIONS_TYPES.POST_ACTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.POST_ACTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Update
		case ACTIONS_TYPES.PUT_ACTOR_SUCCESS:
			return {
				...state,
				actors: state.actors.map(actor => actor.id === payload.id ? payload : actor),
				isFetching: false,
			}
		case ACTIONS_TYPES.PUT_ACTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.PUT_ACTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Delete
		case ACTIONS_TYPES.DEL_ACTOR_SUCCESS:
			return {
				...state,
				actors: [...state.actors.filter(actor => actor.id !== payload)],
				isFetching: false,
			}
		case ACTIONS_TYPES.DEL_ACTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.DEL_ACTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
		default: return state;
	}
}


export default actorsReducer;

