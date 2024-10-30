import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './Post'; // Example component

const App = () => {
    return ( <
        Provider store = { store } >
        <
        Posts / >
        <
        /Provider>
    );
};

export default App;