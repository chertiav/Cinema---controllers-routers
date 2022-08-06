import ACTIONS_TYPES from "../actions/actionsTypes";

const initislState= {
	movies: [],
	error: null,
	isFetching: false
}

const moviesReducer = (state = initislState, {type, payload}) => {
	switch (type) {
	//Get All
		case ACTIONS_TYPES.GET_MOVIES_SUCCESS:
			return {
				...state,
				movies: payload,
				isFetching: false,
			}
		case ACTIONS_TYPES.GET_MOVIES_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.GET_MOVIES_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Create
		case ACTIONS_TYPES.POST_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies, payload],
				isFetching: false,
			}
		case ACTIONS_TYPES.POST_MOVIE_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTIONS_TYPES.POST_MOVIE_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Update
	case ACTIONS_TYPES.PUT_MOVIE_SUCCESS:
		return {
			...state,
			movies: state.movies.map(movie => movie.id === payload.id ? payload : movie),
			isFetching: false,
		}
	case ACTIONS_TYPES.PUT_MOVIE_REQUEST:
		return {
			...state,
			isFetching: true,
		}
	case ACTIONS_TYPES.PUT_MOVIE_ERROR:
		return {
			...state,
			isFetching: false,
			error: payload,
		}
//Delete
	case ACTIONS_TYPES.DEL_MOVIE_SUCCESS:
		return {
			...state,
			movies: [...state.movies.filter(movie => movie.id !== payload)],
			isFetching: false,
		}
	case ACTIONS_TYPES.DEL_MOVIE_REQUEST:
		return {
			...state,
			isFetching: true,
		}
	case ACTIONS_TYPES.DEL_MOVIE_ERROR:
		return {
			...state,
			isFetching: false,
			error: payload,
		}
	default: return state;
	}
}

export default moviesReducer;

