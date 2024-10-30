import { takeEvery, put } from 'redux-saga/effects';

function* incrementSaga() {
    yield put({ type: 'INCREMENT' });
}

function* decrementSaga() {
    yield put({ type: 'DECREMENT' });
}

export function* watchCounter() {
    yield takeEvery('INCREMENT_REQUEST', incrementSaga);
    yield takeEvery('DECREMENT_REQUEST', decrementSaga);
}