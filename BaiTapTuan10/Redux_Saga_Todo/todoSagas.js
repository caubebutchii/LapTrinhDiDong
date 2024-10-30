import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TODO, DELETE_TODO, FETCH_TODOS, setTodos, fetchTodos } from './todoActions';

function* fetchTodosSaga() {
    try {
        const response = yield call(axios.get, 'https://6721840b98bbb4d93ca89ae0.mockapi.io/todos');
        yield put(setTodos(response.data));
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function* addTodoSaga(action) {
    try {
        yield call(axios.post, 'https://6721840b98bbb4d93ca89ae0.mockapi.io/todos', { text: action.payload });
        yield put(fetchTodos());
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

function* deleteTodoSaga(action) {
    try {
        yield call(axios.delete, `https://6721840b98bbb4d93ca89ae0.mockapi.io/todos/${action.payload}`);
        yield put(fetchTodos());
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

export default function* todoSagas() {
    yield takeEvery(FETCH_TODOS, fetchTodosSaga);
    yield takeEvery(ADD_TODO, addTodoSaga);
    yield takeEvery(DELETE_TODO, deleteTodoSaga);
}