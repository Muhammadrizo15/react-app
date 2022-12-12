import React from "react";
import './scss/detail.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import Popup from 'reactjs-popup';

import './scss/media.scss'
import {Navigation} from "swiper";

function Detail(){
    return (
        <div>
            <section className="main__info container">
                <div className="main__info__content">
                    <h1>Стоимость услуг по ремонту <strong>iPhone 11 Pro Max</strong></h1>
                    <div className="order__cards__to__scroll">
                        <div className="main__info__content__card">
                            <div className="main__card__first">
                                <h4>Диагностика <strong>IPhone 11 Pro Max</strong></h4>
                                <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                            </div>
                            <div className="main__card__second">
                                <p>От 30 мин</p>
                                <button>Выбрать</button>
                            </div>
                            <div className="main__card__third active"></div>
                        </div>
                        <div className="main__info__content__card">
                            <div className="main__card__first">
                                <h4>Диагностика IPhone 11 Pro Max</h4>
                                <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                            </div>
                            <div className="main__card__second">
                                <p>От 30 мин</p>
                                <button>Выбрать</button>
                            </div>
                            <div className="main__card__third active"></div>
                        </div>
                        <div className="first__s__card">
                            <h1>Замена стекла / экрана / дисплея</h1>
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>Диагностика IPhone 11 Pro Max</h4>
                                    <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>От 30 мин</p>
                                    <button>Выбрать</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                        </div>
                        <div className="first__s__card">
                            <h1>Замена стекла / экрана / дисплея</h1>
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>Диагностика IPhone 11 Pro Max</h4>
                                    <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>От 30 мин</p>
                                    <button>Выбрать</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                        </div>
                        <div className="first__s__card">
                            <h1>Замена стекла / экрана / дисплея</h1>
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>Диагностика IPhone 11 Pro Max</h4>
                                    <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>От 30 мин</p>
                                    <button>Выбрать</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                        </div>
                        <div className="first__s__card">
                            <h1>Замена стекла / экрана / дисплея</h1>
                            <div className="main__info__content__card">
                                <div className="main__card__first">
                                    <h4>Диагностика IPhone 11 Pro Max</h4>
                                    <p>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</p>
                                </div>
                                <div className="main__card__second">
                                    <p>От 30 мин</p>
                                    <button>Выбрать</button>
                                </div>
                                <div className="main__card__third"></div>
                            </div>
                        </div>
                    </div>
                    <Popup
                        trigger={<button  id="myBtn"> Оформить заказ</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal-content">
                                <span className="close"  onClick={close}>&times;</span>
                                <h1>Оформить заказ</h1>
                                <p>Официальные цены можете дальше не заходить</p>
                                <form>
                                    <div className="df">
                                        <input type="text" placeholder="Ваше имя"/>
                                        <input type="text" placeholder="Номер телефона"/>
                                    </div>
                                    <input type="text" placeholder="Причина обращения"/>
                                    <input type="text" placeholder="Описание проблемы"/>
                                    <Popup trigger={<button className="done" type='button'>Отправить</button>} modal nested>
                                        <div id="myModal-two" className="modal-two">
                                            <div className="modal-content-two">
                                                <h1>Ваша заявка рассмотрена</h1>
                                                <p>
                                                    Вам будет предоставлен
                                                    список мастеров готовых
                                                    взяться выполнить заказ
                                                </p>
                                                <button className="done-two"  onClick={close}>ОК</button>
                                            </div>
                                        </div>
                                    </Popup>
                                </form>
                            </div>
                        )}
                    </Popup>
                </div>

                <div className="main__info__image">
                    <img src="img/detail-iphone.png" alt=""/>
                    <p>
                        Запчасти для ремонта уже включены в стоимость работы.
                        Это окончательная цена
                    </p>
                </div>
            </section>
            <section className="detail__price">
                <div className="container">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            500: {
                                slidesPerView: 2
                            },
                            800: {
                                slidesPerView: 3
                            },
                            1124: {
                                slidesPerView: 4
                            },
                        }}
                    >
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red">
                        <div className="price">
                            <h1>500 </h1>
                            <img src="img/rubl.png" alt=""/>
                        </div>
                        <p>Название сервиса и цена на услуги информация прайса </p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                        <div className="price">
                            <h1>500 </h1>
                            <img src="img/rubl.png" alt=""/>
                        </div>
                        <p>Название сервиса и цена на услуги информация прайса </p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                        <div className="price">
                            <h1>500 </h1>
                            <img src="img/rubl.png" alt=""/>
                        </div>
                        <p>Название сервиса и цена на услуги информация прайса </p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                        <div className="price">
                            <h1>500 </h1>
                            <img src="img/rubl.png" alt=""/>
                        </div>
                        <p>Название сервиса и цена на услуги информация прайса </p>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt=""/>
                                </div>
                                <p>Название сервиса и цена на услуги информация прайса </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt=""/>
                                </div>
                                <p>Название сервиса и цена на услуги информация прайса </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card red ">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt=""/>
                                </div>
                                <p>Название сервиса и цена на услуги информация прайса </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="sliderr">
                            <div className="detail__price__card">
                                <div className="price">
                                    <h1>500 </h1>
                                    <img src="img/rubl.png" alt=""/>
                                </div>
                                <p>Название сервиса и цена на услуги информация прайса </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="map">
                <div style={{position:'relative', overflow:'hidden'}}><a
                    href="https://yandex.uz/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
                    style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Санкт‑Петербург</a><a
                    href="https://yandex.uz/maps/geo/sankt_peterburg/53000093/?ll=30.565964%2C59.908159&utm_medium=mapframe&utm_source=maps&z=11.18"
                    style={{color:'#eee', fontSize:'12px',position:'absolute',top:'14px'}}>Санкт-Петербург — Яндекс Карты</a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1165abdd6351d157b37028cadb7ff3e96f2eafa521b1912fb171e532f46f1721&amp;source=constructor"
                        width="100%" height="715" frameBorder="0"></iframe>
                </div>
            </section>
        </div>
    )
}


export default Detail