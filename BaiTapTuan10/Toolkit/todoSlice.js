import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (state, action) => action.payload,
        addTodo: (state, action) => {
            state.push({ id: Date.now().toString(), text: action.payload.text, completed: false });
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { setTodos, addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;