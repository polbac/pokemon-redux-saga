import { take, call, fork, select, put } from "redux-saga/effects";
import { SET_LIST, setItemDetail } from "../ducks/images";
import { getDetail } from "../client/pokemonClient";

const TOTAL_ATTEMPS = 3;

export function* handleRequest(index, url) {
  for (let i = 0; i < TOTAL_ATTEMPS; i++) {
    try {
      const detail = yield call(getDetail, url);
      yield put(setItemDetail(index, detail));
      return true;
    } catch (err) {
      // handle error
    }
  }
}

export function* setDetailSaga() {
  while (true) {
    yield take(SET_LIST);

    const { images } = yield select();

    for (let i = 0; i < images.list.length; i++) {
      yield fork(handleRequest, i, images.list[i].url);
    }
  }
}
