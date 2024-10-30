import { all } from 'redux-saga/effects';
import { watchPosts } from './postsSaga';

export default function* rootSaga() {
    yield all([
        watchPosts(),
    ]);
}