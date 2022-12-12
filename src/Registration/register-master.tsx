import React from "react";
import '../scss/register-master.scss'
import {
    Link,
} from "react-router-dom";

function RegisterMaster() {
    return (
        <section className="register">
            <h1>Регистрация мастера</h1>
            <form>
                <input type="text" placeholder="Логин"/>
                <input type="text" placeholder="Имя фамилия"/>
                <input type="text" placeholder="Телефон"/>
                <input type="email" placeholder="Email"/>
                <select id="uslugi">
                    <option value="hide">Список услуг</option>
                    <option value="remont phone">Ремонт телефонов</option>
                    <option value="remont idad">Ремонт планшетов</option>
                    <option value="remont laptop">Ремонт ноутбуков</option>
                </select>
                <select id="widget">
                    <option value="hide">Выбор устройства</option>
                    <option value="iphone">Iphone</option>
                    <option value="android">Android</option>
                    <option value="other">Другое</option>
                </select>
                <select id="mounth">
                    <option value="hide">Вид ремонта</option>
                    <option value="january">Mini</option>
                    <option value="february">Max</option>
                    <option value="march">Другое</option>
                </select>
                <Link to="/replenishment">
                    <button type="submit">Продолжить</button>
                </Link>
            </form>
        </section>
    )
}

export default RegisterMaster;