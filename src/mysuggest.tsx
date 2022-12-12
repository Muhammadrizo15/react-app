import React from "react";
import './scss/mysuggest.css'
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {Pagination} from "swiper";


function ChoiceOfReplenishmentMethodCard() {
    return (
        <section className="page_6">
            <div className="sentence font_inter">
                <div className="sentence_text align">
                    <div className="sentence_text-1">
                        <h2>Мое предложение (Номер)</h2>
                    </div>
                    <div className="sentence_but">
                        <Link to="/pick-master"><button>Назад</button></Link>
                    </div>
                </div>
                <div className="big_id-block align">
                    <div className="id_block df align">
                        <div className="bloc-1 df">
                            <div className="bloc_img">
                                <img src="./img/my_suggestion_img/joseph.png" alt="no photo"/>
                            </div>
                            <div className="bloc_text">
                                <h2>Имя с заявки инфа </h2>

                                <h3>Телефон клиента так же это инфа в лк мастера </h3>
                            </div>
                        </div>
                        <div className="bloc-2 df align">
                            <div className="bloc-text">
                                <h2>Посмотреть фото со <br/> страници н1</h2>

                                <h3>фото клиента</h3>
                            </div>
                            <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwipetr">
                                <SwiperSlide className="swiper-slidetr sliderr"><img src="./img/img-iPhone.png" alt=""/></SwiperSlide>
                                <SwiperSlide className="swiper-slidetr sliderr"><img src="./img/img-iPhone.png" alt=""/></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="tit df align">
                        <div className="title font_robo df">
                            <div className="title_text">
                                <h2>Диагностика IPhone 11 Pro Max</h2>

                                <h3>Определение неисправностей и необходимых работ <br/> по ремонту <span>IPhone 11 Pro
                                    Max</span></h3>
                            </div>
                            <div className="title_text-2">
                                <h2>
                                    1 500 ₽
                                </h2>
                            </div>
                        </div>
                        <div className="img_swip">
                            <img src="./img/my_suggestion_img/Vector 128.png" alt=""/>
                        </div>
                    </div>

                    <div className="day font_robo df align">
                        <div className="day_text-1">
                            <h2>Осталось 22 часа 45 минут ЗАЯВКА <br/> ВЕСИТ СУТКИ</h2>
                        </div>

                        <div className="day_text-2">
                            <h2>предложений счетчик предложений</h2>
                        </div>
                    </div>
                </div>
                <div className="sentence-2 font_abel">
                    <div className="sentaince_text">
                        <h2>Предложение мастеров</h2>

                        <h3>Номер профиля</h3>
                    </div>
                </div>


                <div className="big_frame">
                    <div className="frame_2">
                        <div className="nav_right-2 df">
                            <div className="nav_left-alecsandr_2 df font_abel align">
                                <div className="alecsandr_img-4-afdsda">
                                    <img src="img/my_suggestion_img/joseph.png" alt="no photo"/>
                                </div>

                                <div className="alecsandr_info align">
                                    <div className="alecsandr_text-2">
                                        <h2><i>Алексей Михеев</i></h2>
                                        <h2>Частный мастер/Сервис</h2>
                                    </div>

                                    <div className="grade_text df align">
                                        <div className="grade_img df align">
                                            <img src="img/my_suggestion_img/Vector.png" alt="no photo"/>
                                            <img src="img/my_suggestion_img/Vector.png" alt="no photo"/>
                                            <img src="img/my_suggestion_img/Vector.png" alt="no photo"/>
                                            <img src="img/my_suggestion_img/Vector.png" alt="no photo"/>
                                            <img src="img/my_suggestion_img/Vector.png" alt="no photo"/>
                                        </div>
                                        <h4>23</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="o df">
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

                                <div className="alecsandr_info-text">
                                    <div className="info_cards df align">
                                        <div className="info_cards-text_1">
                                            <h2>На сайте: </h2>
                                            <h2>Статус:</h2>
                                            <h2>Оценка:</h2>
                                        </div>

                                        <div className="info_cards-text_2">
                                            <h2>с 2021 года</h2>
                                            <h2>Онлайн </h2>
                                            <h2>5.00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame_3">
                            <div className="nav_bottom df align font_inter">
                                <div className="nav_bottom-text_active df align">
                                    <div className="nav_bottom-text_img">
                                        <img src="img/my_suggestion_img/Star 1.png" alt="no photo"/>
                                    </div>
                                    <h2><span>4.3</span>Продавец Новичок</h2>
                                </div>

                                <div className="nav_bottom-text">
                                    <h2><span>40</span>заказов выполнено</h2>
                                </div>

                                <div className="nav_bottom-text">
                                    <h2><span>40</span>отзывов получено</h2>
                                </div>

                                <div className="nav_bottom-text">
                                    <h2><span>100%</span>заказов успешно сдано</h2>
                                </div>

                                <div className="nav_bottom-text">
                                    <h2><span>54%</span>повторных заказов 2</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="f df align">
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
                                    <td><span>Вид ремонта: </span>
                                    </td>
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
                            <div className="customer_message_text-2">
                                <textarea name="" id="" placeholder="Сообщение для клиента "></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service">
                    <div className="servis df align">
                        <div className="service_text">
                            <h2>Что входит в предложение</h2>

                            <h3>Услуга</h3>

                        </div>
                        <div className="servic df">
                            <div className="service_text-2">
                                <h2>Срок <br/>
                                    4 часа</h2>
                            </div>

                            <div className="service_text-2">
                                <h2>Стоимость</h2>

                                <div className="t-2 df align">
                                    <h2>
                                    <span>
                                        1500
                                    </span>
                                    </h2>
                                    <img src="./img/my_suggestion_img/Vector (1).png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servis_line"></div>
                <div className="servis-2 df align">
                    <div className="service_text-3">
                        <h2>Итого:</h2>
                    </div>

                    <div className="service_text-3 df align">
                        <h4>4 часа</h4>

                        <div className="t-1 df align">
                            <h3>
                                <span>1500</span>
                            </h3>

                            <div className="img">
                                <img src="./img/my_suggestion_img/Vector (1).png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom">
                <div className="customer_message-but">
                    <Link to="/added-device">
                        <button className="btn">Выбрать мастера</button>
                    </Link>
                    <Link to="/reviews-master">
                        <button className="btnn">Отзывы о мастере</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default ChoiceOfReplenishmentMethodCard;