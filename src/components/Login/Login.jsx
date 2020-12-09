import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsAlert, setErrorsAlert] = useState([]);
  const [alertValue, setAlertValue] = useState("block");

  function verfyData() {
    errorsAlert.length > 0 ? setAlertValue("block") : setAlertValue("none");
  }

  const validateData = (e) => {
    setErrorsAlert([]);
    e.preventDefault();
    if (email.length < 10) {
      setErrorsAlert([
        ...errorsAlert,
        "Email invalido, escriba un mail mayor a 10 caracteres",
      ]);
    }
    e.preventDefault();
    if (password.length < 4) {
      setErrorsAlert([]);
      setErrorsAlert([
        ...errorsAlert,
        "Password invalida, escriba una password mayor a 4 caracteres",
      ]);
    }
    useEffect(() => {});
  };

  useEffect(() => {
    verfyData();
  }, [errorsAlert]);

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={window.location.origin + "/images/img-01.png"} alt="IMG" />
          </div>

          <div className="login100-form validate-form">
            <span className="login100-form-title">Gaia Dashboard</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Correo de administrador"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={validateData}>
                Iniciar sesion
              </button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Para administradores de Gaia</span>
              {/* <a className="txt2" href="#">
                Username / Password?
              </a> */}
              {errorsAlert && (
                <div
                  className="alert alert-danger mt-4"
                  style={{ display: alertValue }}
                  role="alert"
                >
                  <strong>Error, datos incorrectos!</strong>
                  <ul>
                    {errorsAlert.map((error, index) => {
                      return <li key={index}>{error}</li>;
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="text-center p-t-136">
              {/* <a className="txt2" href="#">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
