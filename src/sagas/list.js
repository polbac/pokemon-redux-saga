import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_LIST, setList, setPreload } from "../ducks/images";
import { getList } from "../client/pokemonClient";

export function* listPokemonSaga() {
  try {
    const result = yield call(getList);
    yield put(setList(result.results));
    yield put(setPreload(false));
  } catch (err) {
    console.log(err);
  }
}

export function* watchListPokemonSaga() {
  yield takeEvery(FETCH_LIST, listPokemonSaga);
}
