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
		//Get One
		case ACTIONS_TYPES.GET_ACTOR_SUCCESS:
			return {
				...state,
				actors: [payload],
				isFetching: false,
			}
		//Create
		case ACTIONS_TYPES.POST_ACTOR_SUCCESS:
			return {
				...state,
				actors: [...state.actors, payload],
				isFetching: false,
			}
		//Update
		case ACTIONS_TYPES.PUT_ACTOR_SUCCESS:
			return {
				...state,
				actors: state.actors.map(actor => actor.actor_id === payload.actor_id ? payload : actor),
				isFetching: false,
			}
		//Delete
		case ACTIONS_TYPES.DEL_ACTOR_SUCCESS:
			return {
				...state,
				actors: [...state.actors.filter(actor => actor.actor_id !== payload)],
				isFetching: false,
			}
		//GROUPING_*_REQUEST
		case ACTIONS_TYPES.GET_ACTORS_REQUEST:
		case ACTIONS_TYPES.GET_ACTOR_REQUEST:
		case ACTIONS_TYPES.POST_ACTOR_REQUEST:
		case ACTIONS_TYPES.PUT_ACTOR_REQUEST:
		case ACTIONS_TYPES.DEL_ACTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		//GROUPING_*_ERROR
		case ACTIONS_TYPES.GET_ACTORS_ERROR:
		case ACTIONS_TYPES.GET_ACTOR_ERROR:
		case ACTIONS_TYPES.POST_ACTOR_ERROR:
		case ACTIONS_TYPES.PUT_ACTOR_ERROR:
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

