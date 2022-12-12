import React from "react";
import {Link} from "react-router-dom";
import './login.scss'

function Login() {
    return (
        <section className="login">
            <h1>Войти</h1>
            <form>
                <input type="text" placeholder="Телефон"/>
                <input type="password" placeholder="Пароль"/>
                <Link to="/replenishment"><button className="log__btn" type="submit">Войти</button></Link>
                <p>Нет аккаунта? <span><Link to="/register">Зарегистрируйтесь</Link></span></p>
                <a href="#"><span>Забыли пароль?</span></a>
            </form>
        </section>
    )
}


export default Login;