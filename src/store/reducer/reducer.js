const initialState = {
  products: [],
  categorias: [],
  carrito: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STORE":
      return {
        ...state,
        products: action.payload.products,
        categorias: action.payload.uniqueCategs,
      };
    case "ADD_TO_CART":
      const isInState = state.carrito.findIndex(
        (item) => item.id === action.payload.id
      );
      const carrito = [...state.carrito];
      if (isInState === -1) {
        carrito.push(action.payload);
      } else {
        carrito[isInState].cantidad += action.payload.cantidad;
      }
      return {
        ...state,
        carrito,
      };
    case "REMOVE_FROM_CART":
      const newCarrito = state.carrito.filter((item) => {
        if (item.id === action.payload) {
          item.cantidad--;
          if (item.cantidad > 0) {
            return item;
          } else {
            return null;
          }
        }
        return item;
      });

      return {
        ...state,
        carrito: newCarrito,
      };

    case "CLEAR_CART":
      return {
        ...state,
        carrito: [],
      };

    default:
      return state;
  }
};

export default reducer;
