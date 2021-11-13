const initialState = {
  counter: 0,
  products: [
    {
      id: 64,
      producto: "salsa",
      img: "./assets/products/1.webp",
      desc: "Leche Manfrey descremada 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 54,
      producto: "pepsi",
      img: "./assets/products/2.webp",
      desc: "Leche Manfrey entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 65,
      producto: "papel higienico",
      img: "./assets/products/3.webp",
      desc: "Leche Tregar entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 89,
    },
    {
      id: 66,
      producto: "queso",
      img: "./assets/products/4.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 51,
    },
    {
      id: 665,
      producto: "chocolate",
      img: "./assets/products/5.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 75,
    },
    {
      id: 666,
      producto: "salsa",
      img: "./assets/products/6.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 33,
    },
    {
      id: 642,
      producto: "salsa",
      img: "./assets/products/1.webp",
      desc: "Leche Manfrey descremada 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 542,
      producto: "pepsi",
      img: "./assets/products/2.webp",
      desc: "Leche Manfrey entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 85,
    },
    {
      id: 652,
      producto: "papel higienico",
      img: "./assets/products/3.webp",
      desc: "Leche Tregar entera 1lts",
      categ: ["almacén", "lacteos"],
      precio: 89,
    },
    {
      id: 662,
      producto: "queso",
      img: "./assets/products/4.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 51,
    },
    {
      id: 6652,
      producto: "chocolate",
      img: "./assets/products/5.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 75,
    },
    {
      id: 6662,
      producto: "salsa",
      img: "./assets/products/6.webp",
      desc: "Fideos Arcor mostachol 500gr",
      categ: ["almacén"],
      precio: 33,
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
