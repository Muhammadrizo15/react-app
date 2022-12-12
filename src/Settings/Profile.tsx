import React from "react";
import '../scss/profile.css'
import Sidebar from "../sidebar";
import "swiper/css";
import "swiper/css/navigation";
import SettingNav from "./Setting-nav";
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div className="main nal df">
            <div className="fixed-content">
                <div className="left-content">
                    <div className="dffds">
                        <div className="img-content">
                            <img src="img/profile__image.png" alt=""/>
                            <h3>Алексей Иванов</h3>
                        </div>
                        <div className="stars">
                            <p>4.6 <img src="img/img-star.png" alt=""/><img src="img/img-star.png" alt=""/><img
                                src="img/img-star.png" alt=""/><img src="img/img-star.png" alt=""/><img
                                src="img/img-star.png" alt=""/> 11</p>
                        </div>
                    </div>
                    <ul className="ul-wrap">
                        <li><img src="img/img-exit.png" alt=""/><a href="/replenishment"> Кошелек</a></li>
                        <li  className="active"><img src="img/img-contact.png" alt=""/><a href="/settings"> Настройки</a></li>
                        <li><img src="img/img-massage.png" alt=""/><a href="/chat"> Чат</a></li>
                        <li><img src="img/img-list.png" alt=""/><a href='/applications'> Мои заявки</a></li>
                        <li><img src="img/img-white-star.png" alt=""/><a href=""> Мои отзывы</a></li>
                        <li><img src="img/img-list-2.png " alt=""/><a href=""> Мои заказы</a></li>
                    </ul>

                    <div className="icon df">
                        <img src="img/img-exit-2.png" alt=""/>
                        <h2>Выйти</h2>
                    </div>
                </div>
            </div>
            <div className="block-info-7">

                <div className="setting df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/settings">
                            <img src="../img/left-active.png" alt=""/>
                        </Link>
                        <Link to="/service">
                            <img src="../img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link  className="just" to="/settings"><h3 >Общие</h3></Link>
                    <Link  className="just active2" to="/profile"><h3>Профиль</h3></Link>
                    <Link  className="just" to='/service'><h3 >Услуги</h3></Link>
                    <Link  className="just" to='/finance'><h3 >Финансы</h3></Link>
                </div>

                <div className="mini-main-2 df">

                    <div className="input-wrap-2">
                        <input type="text" placeholder="Имя Фамилия"/>
                        <input type="text" placeholder="Телефон"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Название организации"/>
                        <input type="text" placeholder="Вид деятельности"/>
                        <input type="text" placeholder="Основной бизнес"/>
                        <input type="text" placeholder="Основное направление"/>
                        <textarea placeholder="О себе"></textarea>

                        <div>
                            <button>Сохранить</button>
                        </div>
                    </div>

                    <div className="check-input-content">
                        <div className="first-check">
                            <h4>Пол:</h4>
                            <div className="first_check df">
                                <input type="radio" name="select__man__woman" id="inputmanradiobtn"/>
                                <label htmlFor="inputmanradiobtn"><p>Мужской</p></label>
                            </div>

                            <div className="first_check df">
                                <input type="radio" name="select__man__woman" id="inputwomanradiobtn"/>
                                <label htmlFor="inputwomanradiobtn"><p>Женский</p> </label>
                            </div>
                        </div>

                        <div className="second-check">
                            <h4>Бизнес модель:</h4>
                            <div className="first_check df">
                                <input type="radio" name="select__service" id="yesornow"/>
                                <label htmlFor="yesornow"><p>Частный мастер</p></label>
                            </div>

                            <div className="first_check df">
                                <input type="radio" name="select__service" id="inputradioservicebtn"/>
                                <label htmlFor="inputradioservicebtn"><p>Сервис</p></label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Profile;
