import { all } from 'redux-saga/effects'
import watchListPokemonSaga from './list'

function* rootSaga() {
    yield all([
        watchListPokemonSaga(),
    ])
}

export default rootSaga;
