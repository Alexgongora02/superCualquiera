const initialState = {
  products: [],
  categorias: [],
  carrito: [],
  pedidos: [
    {
      entrega: "2021-11-24T19:17:53.965Z",
      id: "4kql95vp7",
      carrito: [
        {
          precio: 189,
          desc: "Cerveza Andes lata 467cc",
          categ: ["bebida"],
          stock: "496",
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636657386/cqurpm1lvqgd6nknsefu.jpg",
          producto: "Cerveza",
          id: "2NUHqP8XJewn5vcdGS6i",
          cantidad: 1,
        },
        {
          stock: "250",
          desc: "Arcor Formis 72gr",
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636655949/zqclccscxtzck29gt81k.jpg",
          producto: "Galletitas",
          categ: ["almacén", "masitas"],
          precio: 45,
          id: "2V7Qkzz6xt2GqhGY5Oa5",
          cantidad: 1,
        },
      ],
    },
  ],
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

    case "VENTA":
      const pedidos = {
        entrega: action.payload.entrega,
        id: action.payload.id,
        carrito: state.carrito,
      };
      return {
        ...state,
        carrito: [],
        pedidos: [...state.pedidos, pedidos],
      };

    default:
      return state;
  }
};

export default reducer;
