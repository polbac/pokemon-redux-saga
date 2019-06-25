import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducerImages } from "../ducks/images";
import allSagas from '../sagas'
import escapeame from '../sagas/escape'

const reducers = combineReducers({
  images: reducerImages,
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(allSagas)
sagaMiddleware.run(escapeame)
sagaMiddleware.run(escapeame)

