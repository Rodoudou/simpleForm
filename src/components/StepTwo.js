import React from "react";
import Form from "./Form";

export default function StepTwo({ name, email, password, setp, setStep }) {
  /*   const handleSubmit = event => {
    event.preventDefault();
} */

  const handleClick = event => {
    setStep(0);
  };

  return (
    <div className="stepTwo">
      <div>Name:{name}</div>
      <div>Email:{email}</div>
      <div>Password:{password}</div>
      <input
        onClick={handleClick}
        // onSubmit={handleSubmit}
        type="submit"
        value="Edite"
      ></input>
    </div>
  );
}
