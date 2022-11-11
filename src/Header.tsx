import React from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";


import Login from "./Login";

function App() {
    return (
        <Router>
            <header>
                <div className="container">
                    <a href="/">
                        <img src="img/logo.png" alt=""/>
                    </a>
                    <ul className="header__list">
                        <li className="bldropdown">
                            <a href="#">Услуги</a>
                            <div className="bldropdown-content">
                                <div className="recent">
                                    <h4>Ремонт телефонов</h4>
                                </div>
                                <div className="recent">
                                    <h4>Ремонт планшетов </h4>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#">Город</a>
                            <div className="dropdown-content">
                                <input type="text" placeholder="Выберете регион или город"/>
                                <div className="recent">
                                    <h4>Москва <span>и московская облость </span></h4>
                                </div>
                                <div className="recent">
                                    <h4>Москва <span>и московская облость </span></h4>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">Статьи</a>
                        </li>
                        <li>
                            <a href="#">Отзывы</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                    <div className="header__profile">
                        <img className="bordered" src="img/phone.png" alt=""/>
                        <img className="bordered" src="img/email.svg" alt=""/>
                        <Link to={"./login"}>
                            <img src="img/profile.png" alt=""/>
                        </Link>
                        <p>10000 ₽</p>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
