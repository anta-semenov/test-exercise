import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'
import {LOAD_STATE} from './actions/ActionTypes'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

store.dispatch({type: LOAD_STATE})

export default store
