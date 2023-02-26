import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthH2,
  AuthDivInput,
  AuthInput,
  AuthButton,
  AuthDiv,
  AuthA,
} from "../../MainTags";

export default function Auth() {
  // React States
  const [errorMessages, setErrorMessages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("https://retoolapi.dev/7KS0ku/data")
      .then((response) => response.json())
      .then((jsonData) => setJsonData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  let navigate = useNavigate();
  const errors = {
    uname: "invalid email",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // Find user login info
    const userData = jsonData.find(
      (user) => user.email === uname.value && user.password === pass.value
    );
    userData && localStorage.setItem("data", JSON.stringify(userData));
    // Compare user info
    console.log(userData);
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    if (userData) {
      navigate("/aside", { state: userData });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      <AuthDivInput onSubmit={handleSubmit}>
        <div>
          <AuthInput
            type="text"
            name="uname"
            required
            placeholder="jane@formik.com"
          />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <AuthInput
            type="password"
            name="pass"
            required
            placeholder="Пароль"
          />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <AuthButton>Войти</AuthButton>
        </div>
        <AuthA href="/profile">Регистрация</AuthA>
      </AuthDivInput>
    </div>
  );

  return (
    <div>
      <AuthDiv>
        <AuthH2>Вход</AuthH2>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </AuthDiv>
    </div>
  );
}
