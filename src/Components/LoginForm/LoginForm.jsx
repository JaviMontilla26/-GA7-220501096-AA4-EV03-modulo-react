import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login | SOPE</h1>
                <h2>Indupartes & Guias Ltda.</h2>
                <div classname="usuario">
                    <input type="text" placeholder="Nombre Usuario" required />
                    <FaUser className="icon" />
                </div>
                <div classname="usuario">
                    <input type="password" placeholder="Contraseña" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <a href="#">Olvide mi Contraseña</a>
                </div>

                <button type="submit">Enviar</button>

                <div className="link-registro">
                    <p>No tienes cuenta?<a href="#">Registrate</a></p>
                </div>
            </form>


        </div>
    )
}

export default LoginForm;

