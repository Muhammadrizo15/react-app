import React from "react";
import '../scss/service.css'
import '../scss/register-master.scss'
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";


function Services() {
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
                        <li className="active"><img src="img/img-contact.png" alt=""/><a href="/settings"> Настройки</a>
                        </li>
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
            <div className="block-info-8">

                <div className="setting df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/profile">
                            <img src="./img/left-active.png" alt=""/>
                        </Link>
                        <Link to="/finance">
                            <img src="./img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link  className="just" to="/settings"><h3 >Общие</h3></Link>
                    <Link  className="just" to="/profile"><h3>Профиль</h3></Link>
                    <Link  className="just  active2" to='/service'><h3 >Услуги</h3></Link>
                    <Link  className="just" to='/finance'><h3 >Финансы</h3></Link>
                </div>

                <div className="main-optifdsaons df">

                    <select id="uslugivasdf">
                        <option value="hide">Выбор вида услуг</option>
                        <option value="remont phone">Ремонт телефонов</option>
                        <option value="remont idad">Ремонт планшетов</option>
                        <option value="remont laptop">Ремонт ноутбуков</option>
                    </select>
                    <select id="uslugivasdf">
                        <option value="hide">Выбор устройства</option>
                        <option value="remont phone">Iphone 13</option>
                        <option value="remont idad">Iphone X</option>
                        <option value="remont laptop">Iphone </option>
                    </select>
                    <select id="uslugivasdf">
                        <option value="hide">Выбор вида ремонта</option>
                        <option value="remont phone">Ремонт телефонов</option>
                        <option value="remont idad">Ремонт планшетов</option>
                        <option value="remont laptop">Ремонт ноутбуков</option>
                    </select>
                </div>

            </div>
        </div>
    )
}


export default Services;
