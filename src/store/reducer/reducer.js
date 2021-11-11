const initialState = {
  products: [],
  categorias: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "FETCH_STORE":
      return {
        ...state,
        products: action.payload.products,
        categorias: action.payload.uniqueCategs,
      };
    default:
      return state;
  }
};

export default reducer;
