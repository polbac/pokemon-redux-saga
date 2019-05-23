const SET_PRELOAD       = 'NASA_SET_PRELOAD'
const SET_LIST          = 'NASA_SET_LIST'
const SELECT_IMAGE      = 'NASA_SELECT_IMAGE'
const SET_OFFLINE       = 'NASA_SET_OFFLINE'

const initState = {
    preloading: true,
    list: [],
    image: null,
    offline: false,
}

export function reducerImages(state = initState, action) {
    const newState = { ...state }

    switch(action.type) {
        case SET_PRELOAD:
            newState.preloading = action.state
            break
        
        case SET_LIST:
            newState.list = action.list
            break

        case SELECT_IMAGE:
            newState.image = action.image
            break
        
        case SET_OFFLINE:
            newState.offline = action.offline
            break
    }

    return newState
}

export const setPreload = (state) => ({
    type: SET_PRELOAD,
    state,
})

export const setList = (list) => ({
    type: SET_LIST,
    list,
})

export const selectImage = (image) => ({
    type: SELECT_IMAGE,
    image,
})