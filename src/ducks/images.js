const SET_PRELOAD = "NASA_SET_PRELOAD";
const SET_LIST = "NASA_SET_LIST";
const SELECT_IMAGE_ID = "NASA_SELECT_IMAGE_ID";
const SET_IMAGE_DATA = "NASA_SET_IMAGE_DATA";
const SET_OFFLINE = "NASA_SET_OFFLINE";

const initState = {
  preloading: true,
  list: [],
  detailId: null,
  detailData: null,
  offline: false,
};

export function reducerImages(state = initState, action) {
  const newState = { ...state };

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_PRELOAD:
      newState.preloading = action.state;
      break;

    case SET_LIST:
      newState.list = action.list;
      break;

    case SELECT_IMAGE_ID:
      newState.detailId = action.detailId;
      if (action.detailId === null) {
        newState.detailData = null;
      }
      break;
    case SET_IMAGE_DATA:
      newState.detailData = action.detailData;
      break;

    case SET_OFFLINE:
      newState.offline = action.offline;
      break;
  }

  return newState;
}

export const setPreload = state => ({
  type: SET_PRELOAD,
  state,
});

export const setList = list => ({
  type: SET_LIST,
  list,
});

export const selectImageId = detailId => ({
  type: SELECT_IMAGE_ID,
  detailId,
});

export const selectImageData = detailData => ({
  type: SET_IMAGE_DATA,
  detailData,
});

export const setOffline = offline => ({
  type: SET_OFFLINE,
  offline,
});
