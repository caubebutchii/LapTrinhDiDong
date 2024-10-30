import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setTodos, addTodo, deleteTodo } from './todoSlice';

function* fetchTodosSaga() {
    try {
        const response = yield call(axios.get, 'https://6721840b98bbb4d93ca89ae0.mockapi.io/todos');
        yield put(setTodos(response.data)); // Assuming response.data matches your structure
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function* addTodoSaga(action) {
    try {
        const response = yield call(axios.post, 'https://6721840b98bbb4d93ca89ae0.mockapi.io/todos', {
            text: action.payload.text,
            completed: false // Default value for new todos
        });
        yield put(fetchTodos()); // Fetch updated todos after adding
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