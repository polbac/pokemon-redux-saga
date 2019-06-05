import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { setOffline } from '../ducks/images'

const internetStatusChannel = eventChannel(emitter => {
    window.addEventListener("online", emitter);
    window.addEventListener("offline", emitter);
    return () => {
        window.removeEventListener('online')
        window.removeEventListener('offline')
    }
})

function* internetStatusSaga() {
    while (true) {
        yield take(internetStatusChannel)
        yield put(setOffline(!navigator.onLine))
    }
}

export default internetStatusSaga