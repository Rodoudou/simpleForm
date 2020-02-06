import React from "react";
import StepTwo from "./StepTwo";

export default function Form({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  step,
  setStep,
  errorMessage,
  setErrorMessage
}) {
  const handleNameChange = event => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = event => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = event => {
    event.preventDefault();

    const password = event.target.value;
    setPassword(password);
  };

  const handleConfirmPasswordChange = event => {
    event.preventDefault();

    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //condition si mauvais Password
    if (confirmPassword !== password) {
      alert("confirmPassword est different de password!");
    }

    setStep(1);
    console.log(name, email, password, confirmPassword);

    // Condition si un  des inpute est vide
    if (name === "" || email === "" || password === "") {
      setErrorMessage("Remplissez tous les champs svp!");
      console.log("Remplissez tous les champs svp!");
    }

    setStep(1);
  };
  return (
    <div className="form">
      <p style={{ color: "red" }}>{errorMessage}</p>
      <h1>Create account</h1>

      {step === 0 ? (
        <form onSubmit={handleSubmit}>
          <span>Name</span>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <span>Email</span>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <span>Password</span>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span>Confirm Password</span>
          <input
            placeholder="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <input type="submit" value="Register" />
        </form>
      ) : (
        <div>
          <StepTwo
            name={name}
            email={email}
            password={password}
            step={step}
            setStep={setStep}
          />
        </div>
      )}
    </div>
  );
}
