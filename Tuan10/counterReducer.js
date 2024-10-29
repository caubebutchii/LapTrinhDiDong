const initState = {
    value: 0,
  };
  
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  
  export const increment = () => ({ type: INCREMENT });
  export const decrement = () => ({ type: DECREMENT });
  
  const counterReducer = (state = initState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, value: state.value + 1 };
      case DECREMENT:
        return { ...state, value: state.value - 1 };
      default:
        return state
    }
  };
  
  export default counterReducer