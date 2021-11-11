const initialState = {
  counter: 0,
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "FETCH_STORE":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
