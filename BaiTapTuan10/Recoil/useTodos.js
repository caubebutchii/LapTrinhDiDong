import { useRecoilState } from 'recoil';
import { todoState } from './todoAtom';
import axios from 'axios';

export const useTodos = () => {
    const [todos, setTodos] = useRecoilState(todoState);

    const fetchTodos = async() => {
        try {
            const response = await axios.get('https://6721840b98bbb4d93ca89ae0.mockapi.io/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async(text) => {
        try {
            const response = await axios.post('https://6721840b98bbb4d93ca89ae0.mockapi.io/todos', { text, completed: false });
            setTodos((prev) => [...prev, response.data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const deleteTodo = async(id) => {
        try {
            await axios.delete(`https://6721840b98bbb4d93ca89ae0.mockapi.io/todos/${id}`);
            setTodos((prev) => prev.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return { todos, fetchTodos, addTodo, deleteTodo };
};