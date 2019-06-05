import { all } from 'redux-saga/effects'
import watchListPokemonSaga from './list'
import setDetailSaga from './detail'

function* rootSaga() {
    yield all([
        watchListPokemonSaga(),
        setDetailSaga(),
    ])
}

export default rootSaga;
