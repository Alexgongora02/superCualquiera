import React from "react";
import { useDispatch } from "react-redux";
import { search, resetSearch } from "../../../store/actions/actions";

export default function Searchbar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(search(e.target.value));
    if (e.target.value === "") {
      dispatch(resetSearch());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.parentNode.parentNode;
    element.classList.remove("show");
    dispatch(resetSearch());
    e.target.reset();
  };
  return (
    <form
      className="form-inline d-flex position-relative"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control"
        type="text"
        placeholder="Buscar"
        onChange={handleChange}
      />
      <button type="submit" className="btn position-absolute end-0">
        🔁
      </button>
    </form>
  );
}
