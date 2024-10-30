import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Update import path

const rootReducer = combineReducers({
    todos: todoReducer,
});

export default rootReducer;