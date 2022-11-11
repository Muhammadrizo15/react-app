import React from 'react';
import Header from "./Header";
import './swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Footer from './Footer'


import { Navigation } from "swiper";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";

function App() {
    return (
        <div className="wrap">
            <Header/>
            <main>
                <section className="slider">
                    <div className="container">
                        <div className="slider__content">
                            <h2>
                                Для любой поломки есть мастер техники
                                Apple
                            </h2>
                            <h4>Оригинальные запчасти</h4>
                            <h4>Разумные цены</h4>
                            <h4>Выезд</h4>
                        </div>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src="img/slider-phone.png" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="img/slider-phone.png" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="img/slider-phone.png" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="img/slider-phone.png" alt=""/></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="go">
                    <div className="container">
                        <div className="go__card">
                            <img src="img/go__car.png" alt=""/>
                            <div className="go__card__content">
                                <h4>Выезд</h4>
                                <p>
                                    Время - деньги. Заказав переклейку или ремонт iphone у нас
                                    Вы можете сэкономить 3-4 часа времени. Мастер приедет
                                    и произведет ремонт у вас дома или в офисе или заберет
                                    у вас телефон, потом доставит отремонтированный.
                                </p>
                            </div>
                        </div>
                        <div className="go__card">
                            <img src="img/go__str.png" alt=""/>
                            <div className="go__card__content">
                                <h4>Качество</h4>
                                <p>
                                    Наши мастера имеют 10+ лет опыта работы в области переклейки
                                    и ремонта Iphone. Работая с нами, Вы можете быть совершенно уверены в том, что ваш
                                    телефон в надежных и опытных руках.
                                </p>
                            </div>
                        </div>
                        <div className="go__card">
                            <img src="img/go__bir.png" alt=""/>
                            <div className="go__card__content">
                                <h4>Цены</h4>
                                <p>
                                    Наши цены ниже среднерыночных, несмотря на то, что качество работы яна самом высшем
                                    уровне. Несмотря на то, что мы используем только оригинальные зап. части. Мы любим
                                    свою работу, работаем много и это позволяет предлагать лучшие
                                    на рынке условия.
                                </p>
                            </div>
                        </div>
                        <div className="go__card">
                            <img src="img/go__timer.png" alt=""/>
                            <div className="go__card__content">
                                <h4>Сроки работы</h4>
                                <p>
                                    Мы пунктуальны и ответственны. Называем срок работы с запасом
                                    и выполняем работу почти всегда раньше обещанного срока,
                                    а ровно в срок сдаем тогда, когда происходят непредвиденные обстоятельства.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="order">
                    <div className="container">
                        <h1>Отзывы</h1>
                        <div className="order__card__list">
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img src="img/feedback_yandex 2.png" alt=""/>
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img src="img/feedback_google 4.png" alt=""/>
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img src="img/feedback_yandex 2.png" alt=""/>
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                            <div className="order__card">
                                <div className="order__card__content">
                                    <img src="img/feedback_google 4.png" alt=""/>
                                    <div className="order__card__title">
                                        <h3>Адам и Ева.  Потерянный Рай</h3>
                                        <div className="mark__stars">
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                            <img src="img/mark__star.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <p>Рекомендуем данную организацию,
                                    заказом довольны, все устроило.</p>
                            </div>
                        </div>
                        <a href="#">Оставить отзыв после регистрации </a>
                    </div>
                </section>
                <section className="blog">
                    <div className="container">
                        <h1>Статьи</h1>
                        <div className="blog__card__list">
                            <div className="blog__card">
                                <img src="img/phone (1).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                            <div className="blog__card">
                                <img src="img/phone (2).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                            <div className="blog__card">
                                <img src="img/phone (3).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                            <div className="blog__card">
                                <img src="img/phone (4).png" alt=""/>
                                <div className="blog__card__content">
                                    <h4>Работа </h4>
                                    <p>Госпли развития. В рамках спецификации современных стандартов, ключевые ...</p>
                                    <span>11.02.2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
