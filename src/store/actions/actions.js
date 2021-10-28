export const add = () => {
  return {
    type: "ADD",
  };
};

export const fetchStore = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/store");
    const data = await response.json();
    dispatch({
      type: "FETCH_STORE",
      payload: data,
    });
  };
};
