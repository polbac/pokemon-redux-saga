import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { SELECT_ITEM, unselectItem } from '../ducks/images'

const ESCAPE_EVENT = 'ESCAPE_EVENT'
const ESC_KEY_EVENT = 27;

const escapeChannel = eventChannel(emitter => {
    document.addEventListener('keydown', (event) => {
        const evt = event || window.event;
        console.log('keydown')
        if (evt.keyCode === ESC_KEY_EVENT) {
            emitter({ type: ESCAPE_EVENT })
        }
    });

    return () => {
        document.removeEventListener('keydown')
    }
})

function* escapeSaga() {
    while (true) {
        yield take(SELECT_ITEM)
        yield take(escapeChannel)
        yield put(unselectItem())
    }
}

export default escapeSaga