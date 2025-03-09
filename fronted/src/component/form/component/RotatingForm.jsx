import React, { useState } from "react";
import "../style/RotatingForm.css"

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="materialContainer">
      <div className={`box ${isRegister ? "back" : ""}`}>
        <div className="title">{isRegister ? "REGISTER" : "LOGIN"}</div>

        <div className="input">
          <label htmlFor={isRegister ? "regname" : "name"}>
            {isRegister ? "Username" : "Username"}
          </label>
          <input
            type="text"
            name={isRegister ? "regname" : "name"}
            id={isRegister ? "regname" : "name"}
          />
          <span className="spin"></span>
        </div>

        <div className="input">
          <label htmlFor={isRegister ? "regpass" : "pass"}>
            {isRegister ? "Password" : "Password"}
          </label>
          <input
            type="password"
            name={isRegister ? "regpass" : "pass"}
            id={isRegister ? "regpass" : "pass"}
          />
          <span className="spin"></span>
        </div>

        <div className="button login">
          <button>
            <span>{isRegister ? "REGISTER" : "GO"}</span>{" "}
            <i className="fa fa-check"></i>
          </button>
        </div>

        {!isRegister && (
          <a href="/" className="pass-forgot">
            Forgot your password?
          </a>
        )}
      </div>

      <div className="overbox">
        <div
          className={`material-button ${isRegister ? "active" : ""}`}
          onClick={toggleForm}
        >
          <span className="shape"></span>
        </div>
      </div>
    </div>
  );
};

export default App;
