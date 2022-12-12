import React from "react";
import './scss/orders.css'
import Sidebar from "./sidebar";
import './scss/swiper.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
import { Navigation } from "swiper";
import { Pagination } from "swiper";



function App() {
    return (
        <div className='main nal df'>
            <Sidebar/>
            <div className="block-info-4">
                <div className="huge-content">
                    <h1>Заказы</h1>

                    <div className="huge-input-content df">
                        <div className="two-input">
                            <input type="text" placeholder="Мои заказы "/>
                            <input type="text" placeholder="Все заказы "/>
                        </div>
                        <div className="only-input">
                            <input type="text" placeholder="настройка Email уведомления"/>
                        </div>
                    </div>
                </div>

                    <div className="info-about-personadsfsaddas df">


                    <div className="user-info">
                        <div className="img-user df">
                            <img src="./img/img-face.png" alt="Face"/>
                            <div>
                                <h4>Имя фамилия </h4>
                                <h4>Телефон скрытый клиента</h4>
                            </div>
                        </div>

                        <div className="small-content-user">
                            <h4>Название устройства </h4>
                            <h5>клиент описывает свою проблему </h5>
                        </div>
                    </div>

                    <div className="slider-user">
                        <div className="slider-content df">
                            {/*<div className="img__2 swiper-slide">*/}
                            {/*    <img src="./img/img-iPhone.png" alt=""/>*/}
                            {/*</div>*/}

                            <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwipetr">
                                <SwiperSlide className="swiper-slidetr sliderr"><img src="./img/img-iPhone.png" alt=""/></SwiperSlide>
                                <SwiperSlide className="swiper-slidetr sliderr  "><img src="./img/img-iPhone.png" alt=""/></SwiperSlide>
                            </Swiper>


                            <div className="info-user">
                                <div className="df kichkina">
                                    <img src="./img/img-face-2.png" alt=""/>
                                    <p>Номер клиента </p>
                                </div>

                                <h3>Имя фамилия </h3>
                            </div>

                        </div>
                        <div>
                            <Link to='/offer-service'>
                                <button>Предложить услугу</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
