import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { TextInput, Button, Title, Appbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, fetchTodos } from './todoActions';
import TodoItem from './TodoItem';

const TodoScreen = () => {
        const [inputText, setInputText] = useState('');
        const todos = useSelector((state) => state.todos);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchTodos());
        }, []);

        const handleAddTodo = () => {
            if (inputText.trim()) {
                dispatch(addTodo(inputText.trim()));
                setInputText('');
            }
        };

        const handleDeleteTodo = (id) => {
            dispatch(deleteTodo(id));
        };

        return ( <
            View style = {
                { flex: 1 } } >
            <
            Appbar.Header >
            <
            Appbar.Content title = "Todo List" / >
            <
            /Appbar.Header> <
            View style = {
                { padding: 20 } } >
            <
            Title style = {
                { marginBottom: 20 } } > Add a new todo < /Title> <
            TextInput mode = "outlined"
            label = "New todo"
            value = { inputText }
            onChangeText = { setInputText }
            style = {
                { marginBottom: 10 } }
            /> <
            Button mode = "contained"
            onPress = { handleAddTodo } >
            Add <
            /Button> <
            FlatList data = { todos }
            renderItem = {
                ({ item }) => < TodoItem item = { item }
                onDelete = { handleDeleteTodo }
                />}
                keyExtractor = {
                    (item) => item.id.toString() }
                style = {
                    { marginTop: 20 } }
                /> <
                /View> <
                /View>
            );
        };

        export default TodoScreen;