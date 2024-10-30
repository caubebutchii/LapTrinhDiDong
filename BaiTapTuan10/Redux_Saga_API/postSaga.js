// src/store/sagas/postsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Example API

function* fetchPosts() {
    try {
        const response = yield call(axios.get, API_URL);
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
    }
}

function* createPost(action) {
    try {
        const response = yield call(axios.post, API_URL, action.payload);
        yield put({ type: 'CREATE_POST_SUCCESS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

function* updatePost(action) {
    try {
        const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
        yield put({ type: 'UPDATE_POST_SUCCESS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

function* deletePost(action) {
    try {
        yield call(axios.delete, `${API_URL}/${action.payload}`);
        yield put({ type: 'DELETE_POST_SUCCESS', payload: action.payload });
    } catch (error) {
        console.error(error);
    }
}

export function* watchPosts() {
    yield takeLatest('FETCH_POSTS_REQUEST', fetchPosts);
    yield takeLatest('CREATE_POST_REQUEST', createPost);
    yield takeLatest('UPDATE_POST_REQUEST', updatePost);
    yield takeLatest('DELETE_POST_REQUEST', deletePost);
}