import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}

export default function Form() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          className={`${errors.username && "danger"}`}
          type="text"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className={`${errors.password && "danger"}`}
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <div>
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </div>
    </form>
  );
}
