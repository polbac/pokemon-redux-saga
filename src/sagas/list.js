import { takeEvery, call, put } from 'redux-saga/effects'  
import { FETCH_LIST, setList, setPreload } from '../ducks/images'
import pokemonClient from '../client/pokemonClient'

pokemonClient.getList = pokemonClient.getList.bind(pokemonClient)

function* listPokemonSaga() {
    try {
        const result = yield call(pokemonClient.getList)
        yield put(setList(result.results))
        yield put(setPreload(false))
    } catch {
        // handle error
    }
    
}

function* watchListPokemonSaga() {
    yield takeEvery(FETCH_LIST, listPokemonSaga)
}

export default watchListPokemonSaga