import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {reducer} from './reducer'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	state: reducer,
})

export const store = createStore(
	rootReducer,
	applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
