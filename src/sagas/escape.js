import { eventChannel } from 'redux-saga'
import { take, put, fork, cancel } from 'redux-saga/effects'
import { SELECT_ITEM, UNSELECT_ITEM, unselectItem } from '../ducks/images'

const ESCAPE_EVENT = 'ESCAPE_EVENT'
const ESC_KEY_EVENT = 27;

const escapeChannel = eventChannel(emitter => {
    document.addEventListener('keydown', (event) => {
        const evt = event || window.event;
        if (evt.keyCode === ESC_KEY_EVENT) {
            emitter({ type: ESCAPE_EVENT })
        }
    });

    return () => {
        document.removeEventListener('keydown')
    }
})

function* escapeSaga() {
    yield take(escapeChannel)
    yield put(unselectItem())
}

function* escapeWatcher() {
    while(true) {
        yield take(SELECT_ITEM)
        const escapeTask = yield fork(escapeSaga)
        yield take(UNSELECT_ITEM)
        yield cancel(escapeTask)
    }
}

export default escapeWatcher