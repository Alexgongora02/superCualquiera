const initialState = {
  products: [],
  productsFiltered: false,
  categorias: [],
  carrito: [],
  pedidos: [
    {
      fechaEntrega: "2021-11-25T19:18:54.413Z",
      id: "gt75ny2f0",
      carrito: [
        {
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636657268/f0b5auncwddmrxaqofvy.jpg",
          desc: "Gasesosa Pritty limon 2,25 lts",
          categ: ["bebida"],
          stock: "263",
          precio: 145,
          producto: "Pritty",
          id: "0hvyzIZZpbPSihPEwhGt",
          cantidad: 2,
        },
        {
          producto: "Galletitas",
          precio: 45,
          desc: "Arcor Formis 72gr",
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636655949/zqclccscxtzck29gt81k.jpg",
          stock: "250",
          categ: ["almacén", "masitas"],
          id: "2V7Qkzz6xt2GqhGY5Oa5",
          cantidad: 2,
        },
        {
          producto: "Harina",
          precio: 99,
          desc: "Blancaflor premezcla 1kg",
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636655333/xy5zpuskl6fwvjdrjcre.jpg",
          stock: "150",
          categ: ["almacén"],
          id: "3d0aT952ED9nIl5HTLuX",
          cantidad: 1,
        },
        {
          stock: "420",
          producto: "Sprite",
          img: "https://res.cloudinary.com/dkr9yv2oa/image/upload/v1636657239/fteozgl3tpsgy3gdv59m.jpg",
          categ: ["bebida"],
          precio: 160,
          desc: "Gaseosa Sprite limon 1,5 lts",
          id: "47POwPyIWtTDTcRi1Kyo",
          cantidad: 1,
        },
      ],
      fechaPago: "2021-11-23T19:18:54.413Z",
      total: 639,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEACRH_PRODUCT":
      return {
        ...state,
        productsFiltered: state.products.filter(
          (product) =>
            product.producto
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            product.desc.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case "RESET_SEARCH":
      return {
        ...state,
        productsFiltered: false,
      };

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
      const pedido = {
        fechaEntrega: action.payload.entrega,
        id: action.payload.id,
        carrito: state.carrito,
        fechaPago: action.payload.fechaPago,
        total: action.payload.total,
      };
      return {
        ...state,
        carrito: [],
        pedidos: [...state.pedidos, pedido],
      };

    case "CANCELAR_VENTA":
      const newPedidos = state.pedidos.filter((pedido) => {
        if (pedido.id === action.payload) {
          return null;
        }
        return pedido;
      });
      return {
        ...state,
        pedidos: newPedidos,
      };

    default:
      return state;
  }
};

export default reducer;
