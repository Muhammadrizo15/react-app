import React, {useState} from 'react';
import DropdownCountry from "./dropdownCountry"
import {
    Link,
    Outlet
} from "react-router-dom";
import DropdownService from "./dropdownService";
import Menu from "./menu/Menu";


function App() {
    const [visibleCountry, setVisibleCountry] = useState(false)
    const [visibleService, setVisibleService] = useState(false)
    const [menuActive, setMenuActive] = useState(false)
    const [active, isActive] = useState(false)

    return (
        <>
            <header>
                <div className="container">
                    <a href="/">
                        <img className='logo' src="../img/logo.png" alt=""/>
                    </a>
                    <ul className="header__list">
                        <li className="bldropdown">
                            <div >
                                <a href="#" className="header__link"
                                   onClick={() => setVisibleService(!visibleService)}>Услуги</a>
                                <img src="img/done.png" alt=""/>
                            </div>
                            {visibleService ? <DropdownService/> : null}
                        </li>
                        <li className="dropdown">
                            <div onClick={() => setVisibleCountry(!visibleCountry)}>
                                <a href="#" className="header__link">Город</a>
                                <img src="img/done.png" alt=""/>
                            </div>
                            {visibleCountry ? <DropdownCountry/> : null}
                        </li>
                        <li>
                            <a href="#" className="header__link">Статьи</a>
                        </li>
                        <li>
                            <a href="#" className="header__link">Отзывы</a>
                        </li>
                        <li>
                            <a href="#" className="header__link">Контакты</a>
                        </li>
                    </ul>
                    <div className="header__profile">
                        {/*If Use authorized)*/}
                        {/*<img className="bordered" src="../img/phone.png" alt=""/>*/}
                        {/*<img className="bordered" src="../img/email.svg" alt=""/>*/}
                        {/*<Link to="/pick-login">*/}
                        {/*    <img src="img/profile.png" alt=""/>*/}
                        {/*</Link>*/}
                        {/*<p>10000 ₽</p>*/}
                        <Link to="/pick-login">
                            Регистрация
                        </Link>
                        <p> / </p>
                        <Link to="/login">
                             Вход
                        </Link>
                    </div>
                </div>
                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
                <Menu active={menuActive} setActive={setMenuActive}/>
            </header>
            <Outlet/>
        </>
    );
}

export default App;
