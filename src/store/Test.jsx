import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/actions/actions";

export default function Test() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(add());
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
