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
		//Get One
		case ACTIONS_TYPES.GET_MOVIE_SUCCESS:
			return {
				...state,
				movies: [payload],
				isFetching: false,
			}
		//Create
		case ACTIONS_TYPES.POST_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies, payload],
				isFetching: false,
			}
		//Update
		case ACTIONS_TYPES.PUT_MOVIE_SUCCESS:
			return {
				...state,
				movies: state.movies.map(movie => movie.movie_id === payload.movie_id ? payload : movie),
				isFetching: false,
			}
		//Delete
		case ACTIONS_TYPES.DEL_MOVIE_SUCCESS:
			return {
				...state,
				movies: [...state.movies.filter(movie => movie.movie_id !== payload)],
				isFetching: false,
			}
		//GROUPING_*_REQUEST
		case ACTIONS_TYPES.GET_MOVIES_REQUEST:
		case ACTIONS_TYPES.GET_MOVIE_REQUEST:
		case ACTIONS_TYPES.POST_MOVIE_REQUEST:
		case ACTIONS_TYPES.PUT_MOVIE_REQUEST:
		case ACTIONS_TYPES.DEL_MOVIE_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		//GROUPING_*_ERROR
		case ACTIONS_TYPES.GET_MOVIES_ERROR:
		case ACTIONS_TYPES.GET_MOVIE_ERROR:
		case ACTIONS_TYPES.POST_MOVIE_ERROR:
		case ACTIONS_TYPES.PUT_MOVIE_ERROR:
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

