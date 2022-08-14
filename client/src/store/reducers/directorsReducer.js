import ACTIONS_TYPES from "../actions/actionsTypes"

const initislState= {
	directors: [],
	error: null,
	isFetching: false
}

const directorsReducer = (state = initislState, {type, payload}) => {
	switch (type) {
	//Get All
		case ACTIONS_TYPES.GET_DIRECTORS_SUCCESS:
			return {
				...state,
				directors: payload,
				isFetching: false,
			}
		case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Create
		case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: [...state.directors, payload],
				isFetching: false,
			}
		case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Update
		case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: state.directors.map(director => director.id === payload.id ? payload : director),
				isFetching: false,
			}
		case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Delete
		case ACTIONS_TYPES.DEL_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: [...state.directors.filter(director => director.id !== payload)],
				isFetching: false,
			}
		case ACTIONS_TYPES.DEL_DIRECTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.DEL_DIRECTOR_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
		default: return state;
	}
}

export default directorsReducer;

