import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './countReducer';

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <br />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 60,
    fontWeight: 700,
    textAlign: 'center'
  },
});
export default Counter;
