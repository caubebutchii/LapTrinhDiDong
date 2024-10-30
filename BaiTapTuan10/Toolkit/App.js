import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';
import TodoScreen from './TodoScreen';

export default function App() {
    return ( <
        StoreProvider store = { store } >
        <
        PaperProvider >
        <
        TodoScreen / >
        <
        /PaperProvider> <
        /StoreProvider>
    );
}