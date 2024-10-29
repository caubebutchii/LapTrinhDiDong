import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{state.count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Tăng" onPress={() => dispatch({ type: 'INCREMENT' })} />
        <Button title="Giảm" onPress={() => dispatch({ type: 'DECREMENT' })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default App;