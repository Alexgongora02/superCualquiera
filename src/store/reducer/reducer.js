const initialState = {
  counter: 0,
  products: [
    {
      id: 64,
      producto: "leche",
      img: "https://picsum.photos/150/151",
      desc: "Leche Manfrey descremada 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 54,
      producto: "leche",
      img: "https://picsum.photos/151/150",
      desc: "Leche Manfrey entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 65,
      producto: "leche",
      img: "https://picsum.photos/150/150",
      desc: "Leche Tregar entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 89,
    },
    {
      id: 66,
      producto: "fideos",
      img: "https://picsum.photos/149/150",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 55,
    },
  ],
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
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
