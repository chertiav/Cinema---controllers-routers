import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducers from './reducers';

const sagaMiddleWeare = createSagaMiddleware();
const middleWeare = applyMiddleware(sagaMiddleWeare, logger);

export default createStore(rootReducers, composeWithDevTools(middleWeare));

sagaMiddleWeare.run(rootSaga);