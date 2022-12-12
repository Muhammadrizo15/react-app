import React from "react";
import '../scss/Price.css'
import '../scss/register-master.scss'
import Sidebar from "../sidebar";
import "swiper/css";
import "swiper/css/navigation";
import '../scss/address.css'
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div className="main nal df">
            <Sidebar/>
            <div className="block-info-10">

                <div className="setting df">
                    <div>
                        <h1>Настройки</h1>
                    </div>
                    <div>
                        <Link to="/address">
                            <img src="./img/left-active.png" alt=""/>
                        </Link>
                        <Link to="/contacts">
                            <img src="./img/img-right.png" alt=""/>
                        </Link>
                    </div>
                </div>

                <div className="mini-wrap mini-wrap_links df">
                    <Link className="just" to='/finance'><h3>Финансы</h3></Link>
                    <Link className="just" to='/address'><h3>Адрес</h3></Link>
                    <Link className="just active2" to='/price'><h3>Загрузка прайса</h3></Link>
                    <Link className="just" to='/contacts'><h3>Контакты</h3></Link>
                </div>

                <div className="mini-main-3 df">

                    <div className="main-options df">

                        <div className="downloadPrices">
                            <h2>Загрузка прайса </h2>
                            <div className="donpr">
                                <select id="uslugivasdf" style={{padding: "9px 31px"}}>
                                    <option value="hide">Вид услуг</option>
                                    <option value="remont phone">Ремонт телефонов</option>
                                    <option value="remont idad">Ремонт планшетов</option>
                                    <option value="remont laptop">Ремонт ноутбуков</option>
                                </select>
                            </div>

                            <div className="donpr">
                                <select id="uslugivasdf"  style={{padding: "9px 31px"}}>
                                    <option value="hide">Список услуг</option>
                                    <option value="remont phone">Ремонт телефонов</option>
                                    <option value="remont idad">Ремонт планшетов</option>
                                    <option value="remont laptop">Ремонт ноутбуков</option>
                                </select>
                            </div>

                            <div className="donpr">
                                <select id="uslugivasdf"  style={{padding: "9px 31px"}}>
                                    <option value="hide">Марка устройств</option>
                                    <option value="remont phone">Ремонт телефонов</option>
                                    <option value="remont idad">Ремонт планшетов</option>
                                    <option value="remont laptop">Ремонт ноутбуков</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="big-input-wrap">
                        <h1>Вид ремонта</h1>

                        <div className="big-input">
                            <div className="first-big-input">
                                <div className="mini-first df">
                                    <input type="text" placeholder="Диагностика "/>
                                    <input type="text" className="input_1" placeholder="время"/>
                                </div>

                                <div className="mini-second df">
                                    <input type="text" className="input_2"/>
                                    <input type="text" className="input_3" placeholder=" 1500 руб"/>
                                </div>
                            </div>

                            <div className="first-big-input">
                                <div className="mini-first df">
                                    <input type="text" placeholder="Диагностика "/>
                                    <input type="text" className="input_1" placeholder="время"/>
                                </div>

                                <div className="mini-second df">
                                    <input type="text" className="input_2"/>
                                    <input type="text" className="input_3" placeholder=" 1500 руб"/>
                                </div>
                            </div>

                            <div className="first-big-input">
                                <div className="mini-first df">
                                    <input type="text" placeholder="Диагностика "/>
                                    <input type="text" className="input_1" placeholder="время"/>
                                </div>

                                <div className="mini-second df">
                                    <input type="text" className="input_2"/>
                                    <input type="text" className="input_3" placeholder=" 1500 руб"/>
                                </div>
                            </div>
                        </div>

                        <div className="add-div df">
                            <img src="./img/img-add-2.png" alt=""/>
                            <h4>Добавить услугу</h4>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}


export default Profile;
