import { combineReducers } from 'redux';
import actorsReducer from './actorsReducer';
import directorsReducer from './directorsReducer';
import moviesReducer from './moviesReducer';
import studiosReducer from './studiosReducer';

export default combineReducers({
	moviesList: moviesReducer,
	actorsList: actorsReducer,
	directorsList: directorsReducer,
	studiosList: studiosReducer,
})

