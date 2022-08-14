import ACTIONS_TYPES from "../actions/actionsTypes"

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
			case ACTIONS_TYPES.GET_STUDIOS_REQUEST:
				return {
					...state,
					isFetching: true,
				}
			case ACTIONS_TYPES.GET_STUDIOS_ERROR:
				return {
					...state,
					isFetching: false,
					error: payload,
				}
//Create
	case ACTIONS_TYPES.POST_STUDIO_SUCCESS:
		return {
			...state,
			studios: [...state.studios, payload],
			isFetching: false,
		}
	case ACTIONS_TYPES.POST_STUDIO_REQUEST:
		return {
			...state,
			isFetching: true,
		}
	case ACTIONS_TYPES.POST_STUDIO_ERROR:
		return {
			...state,
			isFetching: false,
			error: payload,
		}
//Update
case ACTIONS_TYPES.PUT_STUDIO_SUCCESS:
	return {
		...state,
		studios: state.studios.map(studio => studio.id === payload.id ? payload : studio),
		isFetching: false,
	}
case ACTIONS_TYPES.PUT_STUDIO_REQUEST:
	return {
		...state,
		isFetching: true,
	}
case ACTIONS_TYPES.PUT_STUDIO_ERROR:
	return {
		...state,
		isFetching: false,
		error: payload,
	}
//Delete
case ACTIONS_TYPES.DEL_STUDIO_SUCCESS:
	return {
		...state,
		studios: [...state.studios.filter(studio => studio.id !== payload)],
		isFetching: false,
	}
case ACTIONS_TYPES.DEL_STUDIO_REQUEST:
	return {
		...state,
		isFetching: true,
	}
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

