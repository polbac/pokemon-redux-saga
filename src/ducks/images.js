const SET_PRELOAD = "POKEMON_SET_PRELOAD";
const SET_LIST = "POKEMON_SET_LIST";
const SET_ITEM_DETAIL = "POKEMON_SET_ITEM_DETAIL";
const SELECT_ITEM = "POKEMON_SELECT_ITEM";
const SET_OFFLINE = "POKEMON_SET_OFFLINE";

const initState = {
    preloading: true,
    list: [],
    detailId: null,
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

        case SET_ITEM_DETAIL:
            newState.list = newState.list.map((item, index) =>
                index === action.id ? action.data : item);
            break;

        
        case SELECT_ITEM:
            newState.detailId = action.index;
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

export const setItemDetail = (id, data) => ({
    type: SET_ITEM_DETAIL,
    id,
    data,
});

export const selectItem = (index) => ({
    type: SELECT_ITEM,
    index,
});

export const setOffline = offline => ({
    type: SET_OFFLINE,
    offline,
});