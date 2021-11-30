import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { search, resetSearch } from "../../../store/actions/actions";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(query));
    if (query === "") {
      dispatch(resetSearch());
    }
  }, [query, dispatch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = (e) => {
    dispatch(resetSearch());
    e.target.parentNode.reset();
    e.target.parentNode.parentNode.parentNode.classList.remove("show");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.classList.remove("show");
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
      <button type="submit" className="btn position-absolute end-0 me-4">
        🎯
      </button>
      <button
        type="button"
        className="btn position-absolute end-0"
        onClick={handleClear}
      >
        ✖
      </button>
    </form>
  );
}
