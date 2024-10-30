import React from 'react';
import { View } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';

const TodoItem = ({ item, onDelete }) => ( <
    Card style = {
        { marginBottom: 10 } } >
    <
    Card.Content >
    <
    Paragraph > { item.text } < /Paragraph> <
    /Card.Content> <
    Card.Actions >
    <
    Button onPress = {
        () => onDelete(item.id) } > Delete < /Button> <
    /Card.Actions> <
    /Card>
);

export default TodoItem;