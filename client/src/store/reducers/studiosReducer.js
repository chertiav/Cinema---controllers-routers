import ACTIONS_TYPES from "../actions/actionsTypes";

const initislState= {
	studios: [],
	error: null,
	isFetching: false
}

const studiosReducer = (state = initislState, {type, payload}) => {
	switch (type) {
		//Get All
		case ACTIONS_TYPES.GET_STUDIOS_SUCCESS:
			return {
				...state,
				studios: payload,
				isFetching: false,
			}
		//Get One
		case ACTIONS_TYPES.GET_STUDIO_SUCCESS:
			return {
				...state,
				studios: [payload],
				isFetching: false,
			}
		//Create
		case ACTIONS_TYPES.POST_STUDIO_SUCCESS:
			return {
				...state,
				studios: [...state.studios, payload],
				isFetching: false,
			}
		//Update
		case ACTIONS_TYPES.PUT_STUDIO_SUCCESS:
			return {
				...state,
				studios: state.studios.map(studio => studio.studio_id === payload.studio_id ? payload : studio),
				isFetching: false,
			}
		//Delete
		case ACTIONS_TYPES.DEL_STUDIO_SUCCESS:
			return {
				...state,
				studios: [...state.studios.filter(studio => studio.studio_id !== payload)],
				isFetching: false,
			}
		//GROUPING_*_REQUEST
		case ACTIONS_TYPES.GET_STUDIOS_REQUEST:
		case ACTIONS_TYPES.GET_STUDIO_REQUEST:
		case ACTIONS_TYPES.POST_STUDIO_REQUEST:
		case ACTIONS_TYPES.PUT_STUDIO_REQUEST:
		case ACTIONS_TYPES.DEL_STUDIO_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		//GROUPING_*_ERROR
		case ACTIONS_TYPES.GET_STUDIOS_ERROR:
		case ACTIONS_TYPES.GET_STUDIO_ERROR:
		case ACTIONS_TYPES.POST_STUDIO_ERROR:
		case ACTIONS_TYPES.PUT_STUDIO_ERROR:
		case ACTIONS_TYPES.DEL_STUDIO_ERROR:
			return {
			...state,
			isFetching: false,
			error: payload,
		}
		default: return state;
	}
}
export default studiosReducer;

