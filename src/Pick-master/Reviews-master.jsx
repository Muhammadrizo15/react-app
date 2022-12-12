import React, {useState} from "react";
import {Link} from "react-router-dom";
import './pick-master.css'
import Popup from "reactjs-popup";
import './reviews-master.css'

function Sidebar() {
    return (
        <>
            <section className="page_3">
                <div className="hun">
                    <div className="master_button font_abel df">
                        <div className="btnasfd">
                            <Link to="/review">
                                Оставить отзыв
                            </Link>
                        </div>
                        <div className="but">
                            <Link to="/pick-master">Назад</Link>
                        </div>
                    </div>
                </div>
                <div className="client df">
                    <div className="master font_inter">
                        <div className="stars_master">
                            <div className="master_information df align">
                                <div className="master_information-text">
                                    <h2>4,6</h2>
                                </div>

                                <div className="stars_img align df">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/half_stars.png" alt="no photo"/>
                                </div>
                            </div>
                            <h3>На основании 11 оценок</h3>
                        </div>
                        <div className="grade-level">
                            <div className="level_master df align">
                                <div className="level_img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                </div>
                                <div className="level_line-1">
                                    <div className="level_line-2"></div>
                                </div>
                                <div className="level_text">
                                    <p>10</p>
                                </div>
                            </div>

                            <div className="level_master df align">
                                <div className="level_img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                </div>
                                <div className="level_line-1"></div>
                                <div className="level_text">
                                    <p>0</p>
                                </div>
                            </div>

                            <div className="level_master df align">
                                <div className="level_img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                </div>
                                <div className="level_line-1"></div>
                                <div className="level_text">
                                    <p>0</p>
                                </div>
                            </div>

                            <div className="level_master df align">
                                <div className="level_img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                </div>
                                <div className="level_line-1"></div>
                                <div className="level_text">
                                    <p>0</p>
                                </div>
                            </div>

                            <div className="level_master df align">
                                <div className="level_img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/empty_star.png" alt="no photo"/>
                                </div>
                                <div className="level_line-1">
                                    <div className="level_line-3"></div>
                                </div>
                                <div className="level_text">
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-prof">

                        <div className="info_prof-kiril font_inter">
                            <div className="prof-kiril df">
                                <div className="prof-img">
                                    <img src="./img/master-profile_img/kiril.png" alt="no photo"/>
                                </div>

                                <div className="prof-text">
                                    <h2>Кирилл Воронов</h2>

                                    <h3>26 августа</h3>
                                </div>
                            </div>
                            <div className="prof_stars df align">
                                <div className="prof_stars-img">
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                    <img src="./img/master-profile_img/Stars.png" alt="no photo"/>
                                </div>

                                <div className="prof_stars-text">
                                    <h3>Заказ выполнен на отлично.</h3>
                                </div>
                            </div>
                            <div className="comment df">
                                <div className="com">
                                    <div className="comment_text">
                                        <h2>Комментарий</h2>
                                    </div>
                                    <div className="long_text ">
                                        <p>
                                            Donec non justo elit. Praesent nec auctor tellus. Donec quam orci,
                                            tincidunt nec diam at, mollis commodo libero. Nulla a ante aliquam augue
                                            mattis dapibus eget eu ipsum. Integer fringilla vitae orci at laoreet.
                                            Quisque a justo augue. Proin a facilisis ante. Cras at nibh ultricies magna
                                            aliquet rutrum eget in lectus. Nullam sed ornare arcu. Curabitur bibendum
                                            ultrices sapien, eget viverra velit lobortis vel. Vivamus eu auctor elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper mySwiper">

                                </div>
                            </div>
                            <div className="answers-kiril">
                                <div className="kiril df align">
                                    <div className="kiril_img">
                                        <img src="./img/master-profile_img/kiril.png" alt="no photo"/>
                                    </div>
                                    <div className="kiril_text-2">
                                        <h2>Кирилл Воронов</h2>

                                        <h3>26 августа</h3>
                                    </div>
                                </div>
                                <div className="answers">
                                    <h4>Ответ</h4>

                                    <p>
                                        Donec non justo elit. Praesent nec auctor tellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Sidebar;