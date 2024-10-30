import React from 'react';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';
import TodoScreen from './TodoScreen';

export default function App() {
    return ( <
        RecoilRoot >
        <
        PaperProvider >
        <
        TodoScreen / >
        <
        /PaperProvider> <
        /RecoilRoot>
    );
}