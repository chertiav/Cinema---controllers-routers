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
		//Get One
		case ACTIONS_TYPES.GET_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: [payload],
				isFetching: false,
			}
		//Create
		case ACTIONS_TYPES.POST_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: [...state.directors, payload],
				isFetching: false,
			}
		//Update
		case ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: state.directors.map(director => director.director_id === payload.director_id ? payload : director),
				isFetching: false,
			}
		//Delete
		case ACTIONS_TYPES.DEL_DIRECTOR_SUCCESS:
			return {
				...state,
				directors: [...state.directors.filter(director => director.director_id !== payload)],
				isFetching: false,
			}
		//GROUPING_*_REQUEST
		case ACTIONS_TYPES.GET_DIRECTORS_REQUEST:
		case ACTIONS_TYPES.GET_DIRECTOR_REQUEST:
		case ACTIONS_TYPES.POST_DIRECTOR_REQUEST:
		case ACTIONS_TYPES.PUT_DIRECTOR_REQUEST:
		case ACTIONS_TYPES.DEL_DIRECTOR_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		//GROUPING_*_ERROR
		case ACTIONS_TYPES.GET_DIRECTORS_ERROR:
		case ACTIONS_TYPES.GET_DIRECTOR_ERROR:
		case ACTIONS_TYPES.POST_DIRECTOR_ERROR:
		case ACTIONS_TYPES.PUT_DIRECTOR_ERROR:
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

