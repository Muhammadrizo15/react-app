import React from "react";
import {Link} from "react-router-dom";
import '../scss/register.scss'

function Register() {
    return (
        <section className="register">
            <h1>Регистрация</h1>
            <form>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="text" placeholder="Телефон"/>
                <input type="password" placeholder="Пароль"/>
                <input type="password" placeholder="Подтвердите пароль"/>
                <div className="rel">
                    <input type="checkbox" id="really"/>
                    <label htmlFor="really">
                        Ознакомлен и согласен с условиями Политики конфиденциальности
                    </label>
                </div>
                <Link to="/replenishment"><button type="submit">Регистрация</button></Link>
            </form>
        </section>
    )
}

export default Register;