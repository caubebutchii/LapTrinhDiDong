import { SET_TODOS, ADD_TODO, DELETE_TODO } from './todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        case ADD_TODO:
            return [...state, { id: Date.now(), text: action.payload }];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

export default todoReducer;