import React, {useState} from "react";
import {Link} from "react-router-dom";
import './pick-master.css'
import Popup from "reactjs-popup";

function Sidebar() {
    return (
        <>
            <section className="page_1">
                <div className="frame df font_abel">
                    <div className="nav_left">
                        <div className="bord">
                            <div className="nav_left-alecsandr df font_abel">
                                <div className="alecsandr_img">
                                    <img src="../img/profil_img/1.png" alt="no photo"/>
                                </div>

                                <div className="alecsandr_info align">
                                    <div className="alecsandr_text ">
                                        <h2>Алексей Михеев</h2>
                                        <h2>Частный мастер/Сервис</h2>
                                        <h2>Сообение для клиента </h2>
                                    </div>

                                    <div className="grade_text df align">
                                        <h4>4,6</h4>
                                        <div className="grade_img df align">
                                            <img src="./img/profil_img/3.png" alt="no photo"/>
                                            <img src="./img/profil_img/3.png" alt="no photo"/>
                                            <img src="./img/profil_img/3.png" alt="no photo"/>
                                            <img src="./../img/profil_img/3.png" alt="no photo"/>
                                            <img src="./../img/profil_img/4.png" alt="no photo"/>
                                        </div>
                                        <h3>11</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="alecsandr_line"></div>
                        </div>
                        <div className="bord">
                            <div className="nav_left-alecsandr df font_abel">
                                <div className="alecsandr_img-3">
                                    <img src="../img/profil_img/2.png" alt="no photo"/>
                                </div>

                                <div className="alecsandr_info align">
                                    <div className="alecsandr_text ">
                                        <h2>Алексей Михеев</h2>
                                        <h2>привет! </h2>
                                    </div>

                                    <div className="grade_text df align">
                                        <span>5</span>
                                        <div className="grade_img df align">
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                        </div>
                                        <h3>5</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="alecsandr_line"></div>
                        </div>
                        <div className="bord">
                            <div className="nav_left-alecsandr df font_abel">
                                <div className="alecsandr_img-3">
                                    <img src="../img/profil_img/2.png" alt="no photo"/>
                                </div>

                                <div className="alecsandr_info align">
                                    <div className="alecsandr_text ">
                                        <h2>Алексей Михеев</h2>
                                        <h2>Частный мастер/Сервис <br/> привет!</h2>
                                    </div>

                                    <div className="grade_text df align">
                                        <h4>4,6</h4>
                                        <div className="grade_img df align">
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/3.png" alt="no photo"/>
                                            <img src="../img/profil_img/4.png" alt="no photo"/>
                                        </div>
                                        <h3>11</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="alecsandr_line"></div>
                    </div>
                    <div className="big_frame__fex">
                        <div className="frame_2">
                            <div className="nav_right df">
                                <div className="nav_left-alecsandr_2 df font_abel">
                                    <div className="alecsandr_img-4">
                                        <img src="../img/profil_img/1.png" alt="no photo"/>
                                    </div>

                                    <div className="alecsandr_info align">
                                        <div className="alecsandr_text-2">
                                            <h2>Алексей Михеев</h2>
                                            <h2>Частный мастер/Сервис</h2>
                                        </div>

                                        <div className="grade_text df align">
                                            <h2>5</h2>
                                            <div className="grade_img df align">
                                                <img src="../img/profil_img/3.png" alt="no photo"/>
                                                <img src="../img/profil_img/3.png" alt="no photo"/>
                                                <img src="../img/profil_img/3.png" alt="no photo"/>
                                                <img src="../img/profil_img/3.png" alt="no photo"/>
                                                <img src="../img/profil_img/3.png" alt="no photo"/>
                                            </div>
                                            <h3>5</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="alecsandr_info-text">
                                    <div className="info_cards df align">
                                        <div className="info_cards-text_1">
                                            <h2>Город:</h2>
                                            <h2>Район:</h2>
                                            <h2>Станция метро:</h2>
                                        </div>

                                        <div className="info_cards-text_2">
                                            <h2>Санкт-Петербург</h2>
                                            <h2>Васильеостовский</h2>
                                            <h2>Приморская</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w">
                                <div className="frame_3">
                                    <div className="nav_bottom df align font_inter">
                                        <div className="nav_bottom-text_active df align">
                                            <div className="nav_bottom-text_img">
                                                <img src="../img/profil_img/5.png" alt="no photo"/>
                                            </div>
                                            <h2><span>5</span>Продавец Новичок</h2>
                                        </div>

                                        <div className="nav_bottom-text">
                                            <h2><span>13</span>заказов выполнено</h2>
                                        </div>

                                        <div className="nav_bottom-text">
                                            <h2><span>23</span>отзывов получено</h2>
                                        </div>

                                        <div className="nav_bottom-text">
                                            <h2><span>100%</span>заказов успешно сдано</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="frame_4">
                                    <div className="registration_date df align">
                                        <div className="regist_date-1 df">
                                            <div className="registration_date-info df">
                                                <div className="registration_text-1">
                                                    <h2>На сайте: </h2>
                                                </div>
                                                <div className="registration_text-2">
                                                    <h2>с 2021 года</h2>
                                                </div>
                                            </div>
                                            <div className="registration_date-info df">
                                                <div className="registration_text-1">
                                                    <h2>Статус:</h2>
                                                </div>
                                                <div className="registration_text-2">
                                                    <h2><span>Онлайн</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="regist_date-2 df">
                                            <div className="registration_date-info df">
                                                <div className="registration_text-1">
                                                    <h2>Оценка:</h2>
                                                </div>
                                                <div className="registration_text-2">
                                                    <h2><span>5.00</span></h2>
                                                </div>
                                            </div>
                                            <div className="registration_date-info df">
                                                <div className="registration_text-2">
                                                    <h2><span className="big">54%</span> повторных заказов 2</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="frame_5">
                            <div className="pro_repair font_abel">
                                <table>
                                    <tr>
                                        <td><span>Имя организации:</span></td>
                                        <td>
                                            <p>PRO Ремонт</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Список услуг:</span></td>
                                        <td>
                                            <p>Диагностика, ремонт (Из списка)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Выбор устойств:</span></td>
                                        <td>
                                            <p>IPhone, Macbook (Из списка)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Вид ремонта:</span></td>
                                        <td>
                                            <p>Пайка IPhone, переклейка экрана (Из списка)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Ваша деятельность:</span></td>
                                        <td>
                                            <p>Занимаюсь ремонтом техники Apple</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Основное направление:</span></td>
                                        <td>
                                            <p>Переклейка экранов</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Основной бизнес:</span></td>
                                        <td>
                                            <p>Мастерская</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="frame_6 font_abel">
                            <div className="customer_message">
                                <div className="customer_message_text">
                                    <textarea placeholder="Сообщение для клиента "></textarea>
                                </div>
                            </div>
                            <div className="customer_message-but">
                                <Popup
                                    trigger={<button className="btnn">Выбрать мастера</button>}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal-content">
                                            <span className="close" onClick={close}>&times;</span>
                                            <div className="containerPopUp">
                                                <h3 className="finance__popup__title abel">
                                                    Вы подтверждаете выбор исполнителя?
                                                </h3>
                                                <p className="finance__popup__subtitle abel" style={{textAlign: "center"}}>
                                                    Подверждая исполнителя вы вы открываете с ним диалог в чате
                                                </p>
                                                <div className="popUpBtn">
                                                    <button className="btn_6PopUpBack " onClick={close}>Нет</button>
                                                    <Link to="/mysuggest"><button className="btn_6PopUp" onClick={close}>Да</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <Link to="/reviews-master">
                                    <button className="btn">Посмотреть отзывы</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}


export default Sidebar;