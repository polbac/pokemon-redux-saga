import { combineReducers, createStore } from "redux";

import { reducerImages } from "../ducks/images";

const reducers = combineReducers({
  images: reducerImages,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
