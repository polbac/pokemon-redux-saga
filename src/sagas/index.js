import { all } from "redux-saga/effects";
import { watchListPokemonSaga } from "./list";
import { setDetailSaga } from "./detail";
import escapeSaga from "./escape";
import internetStatusSaga from "./offline";

function* rootSaga() {
  yield all([
    watchListPokemonSaga(),
    setDetailSaga(),
    escapeSaga(),
    internetStatusSaga()
  ]);
}

export default rootSaga;
