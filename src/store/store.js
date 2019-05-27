import { combineReducers, createStore } from 'redux'
import { reducerImages } from '../ducks/images'

const reducers = combineReducers({
    images: reducerImages,
})

export const store = createStore(reducers)