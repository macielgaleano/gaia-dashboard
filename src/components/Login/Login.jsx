import React from "react";
// import { InputGroup, InputGroupAddon, InputGroupText, FormInput } from "shards-react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./style.css";

export default function Login() {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title">Electrohack Dashboard</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Correo de administrador"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Contraseña"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Iniciar sesion</button>
            </div>

            <div class="text-center p-t-12">
              <span class="txt1">Para administradores de Gaia</span>
              {/* <a class="txt2" href="#">
                Username / Password?
              </a> */}
            </div>

            <div class="text-center p-t-136">
              {/* <a class="txt2" href="#">
                Create your Account
                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
