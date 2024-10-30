import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { TextInput, Button, Title, Appbar } from 'react-native-paper';
import { useTodos } from './useTodos';
import TodoItem from './TodoItem';

const TodoScreen = () => {
    const [inputText, setInputText] = useState('');
    const { todos, fetchTodos, addTodo, deleteTodo } = useTodos();

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = () => {
        if (inputText.trim()) {
            addTodo(inputText.trim());
            setInputText('');
        }
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
            ({ item }) => ( <
                TodoItem item = { item }
                onDelete = { deleteTodo }
                />
            )
        }
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