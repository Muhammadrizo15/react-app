import React from "react";
import '.././scss/chat.css'
import {useState} from 'react'
import Sidebar from "../sidebar";
import {Link} from 'react-router-dom'

function ChoiceOfReplenishmentMethodCard() {

    const [answer, Isanswer] = useState(false)
    const [edit, Isedit] = useState(false)

    return (
        <div className="main nal df">

            <Sidebar/>
            <section className="page_2 inter">
                <div className="big_frame-chat df">
                    <div className="frame_messages">
                        <div className="block_messages font_inter">
                            <div className="messages_text">
                                <h2>
                                    Сообщения
                                </h2>
                            </div>
                            <div className="magnafire df align">
                                <div className="magnafire_img">
                                    <img src="../img/chat_img/лупа.png" alt="no photo"/>
                                </div>
                                <div className="magnafire_input">
                                    <input type="text" placeholder="Поиск..."/>
                                </div>
                            </div>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/ilya.png" alt="no photo"/>
                                </div>

                                <div className="ilya_text">
                                    <h2>
                                        Илья Понамарев
                                    </h2>

                                    <span>
                                <h3>
                                    Печатает...
                                </h3>
                            </span>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        16:33
                                    </h2>

                                    <h3>
                                        3
                                    </h3>
                                </div>
                            </div>
                            <div className="line_ilya"></div>
                        </div>

                        <div className="big_messages">
                            <Link to="/chat/168789461">
                                <div className="ilya df font_inter align">
                                    <div className="ilya_img">
                                        <img src="../img/chat_img/тех подержка.png" alt="no photo"/>
                                    </div>

                                    <div className="ilya_text">
                                        <h2>
                                            Тех поддержка
                                        </h2>

                                        <h3>
                                            Хорошо
                                        </h3>
                                    </div>

                                    <div className="ilya_text-2">
                                        <h2>
                                            14:12
                                        </h2>

                                        <h3>
                                            1
                                        </h3>
                                    </div>
                                </div>
                                <div className="line_ilya"></div>
                            </Link>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/кирил.png" alt="no photo"/>
                                </div>

                                <div className="ilya_text">
                                    <h2>
                                        Кирилл Воронов
                                    </h2>

                                    <h3>
                                        Смогу приехать ч..
                                    </h3>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        14:02
                                    </h2>
                                </div>
                            </div>
                            <div className="line_ilya"></div>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/елена.png" alt="no photo"/>
                                </div>

                                <div className="ilya_text">
                                    <h2>
                                        Елена Ионова
                                    </h2>

                                    <h3>
                                        Фото пришлю позже
                                    </h3>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        11:57
                                    </h2>
                                </div>
                            </div>
                            <div className="line_ilya"></div>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/флипп.png" alt="no photo"/>
                                </div>
                                <div className="ilya_text">
                                    <h2>
                                        Филипп Терешов
                                    </h2>

                                    <h3>
                                        Спасибо
                                    </h3>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        10:33
                                    </h2>
                                </div>
                            </div>
                            <div className="line_ilya"></div>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/михаил.png" alt="no photo"/>
                                </div>

                                <div className="ilya_text">
                                    <h2>
                                        Михаил Серов
                                    </h2>

                                    <h3>
                                        Отправьте адрес
                                    </h3>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        09:56
                                    </h2>
                                </div>
                            </div>
                            <div className="line_ilya"></div>
                        </div>

                        <div className="big_messages">
                            <div className="ilya df font_inter align">
                                <div className="ilya_img">
                                    <img src="../img/chat_img/евгений.png" alt="no photo"/>
                                </div>

                                <div className="ilya_text">
                                    <h2>
                                        Евгений Конеев
                                    </h2>

                                    <h3>
                                        Спасибо
                                    </h3>
                                </div>

                                <div className="ilya_text-2">
                                    <h2>
                                        09:23
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profil">
                        <Link to="/profile-number">
                            <div className="kiril_profil df font_inter">
                                <div className="kirill df align">
                                    <div className="prof_img">
                                        <img src="../img/chat_img/кирил.png" alt="no photo"/>
                                    </div>

                                    <div className="nik">
                                        <h2>
                                            Кирилл Воронов
                                        </h2>

                                        <div className="info_nik df">
                                            <div className="kiril_info">
                                                <h3>
                                                    Офлайн 31 минута
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className="chatt">
                            <div className="right_menu">
                                <div className="correspondence font_inter df">
                                    <div className="correspondence_ciril-4 df">
                                        <div className="ciril-img">
                                            <img src="../img/chat_img/кирил.png" alt="no photo"/>
                                        </div>
                                        <div className="let">
                                            <div className="letter">
                                                <div className="letter_kiril-4 df">
                                                    <div className="letter_text-1">
                                                        <h2>Кирилл Воронов</h2>
                                                    </div>
                                                    <div className="letter_text-2">
                                                        <h3>14:02</h3>
                                                    </div>
                                                </div>
                                                <div className="sms df align">
                                                    <div className="sms_text-2">
                                                        <h2>Смогу приехать через час</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame_icon ">
                                        <div className="choice df">
                                            <div className="choice_img">
                                                <img src="../img/chat_img/img.png" alt="no photo"/>
                                            </div>
                                            <div className="im_attach pull-left align">
                                                <input type="file" className="im_attach_input"
                                                       title="Send file"/>
                                                <p>Фото или видео</p>
                                            </div>
                                        </div>

                                        <div className="folder df">
                                            <div className="choice_img">
                                                <img src="../img/chat_img/folder.png" alt="no photo"/>
                                            </div>
                                            <div className="im_attach pull-left align">
                                                <input type="file" className="im_attach_input"
                                                       title="Send file"/>
                                                <p>Документ</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="right_menu-img df align">
                                        <img className="ansver" src="../img/chat_img/ответ.png" alt="no photo"/>
                                        <img src="../img/chat_img/span.png" alt="no photo"/>
                                    </div>
                                </div>
                            </div>

                            <div className="my_chat">
                                <div className="correspondence-active font_inter df">

                                    <div className="right_menu-img df align">
                                        <img src="../img/chat_img/edid.png" onClick={()=> Isedit(true)} alt="no photo"/>
                                        <img className="ansver" src="../img/chat_img/ответ.png" alt="no photo"/>
                                    </div>

                                    <div className="message__fix">
                                        <div className="correspondence_ciril-3">
                                            <div className="letter_kiril-3 df">
                                                <div className="letter_text-2">
                                                    <h3>13:54</h3>
                                                </div>
                                                <div className="letter_text-1">
                                                    <h4>Вы</h4>
                                                </div>
                                            </div>

                                            <div className="sms df align">
                                                <div className="viewed_img-2">
                                                    <img src="../img/chat_img/просмотрено.png" alt="no photo"/>
                                                </div>

                                                <div className="sms_text-3">
                                                    <h2>Хорошо, мне подходит</h2>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="you-img">
                                            <img src="../img/chat_img/2.png" alt="no photo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="correspondence font_inter df">
                                <div className="correspondence_ciril-2 df">
                                    <div className="ciril-img">
                                        <img src="../img/chat_img/кирил.png" alt="no photo"/>
                                    </div>
                                    <div className="let">
                                        <div className="letter_kiril-2 df">
                                            <div className="letter_text-1">
                                                <h2>Кирилл Воронов</h2>
                                            </div>
                                            <div className="letter_text-2">
                                                <h3>13:45</h3>
                                            </div>
                                        </div>
                                        <div className="sms df align">
                                            <div className="sms_text-2">
                                                <h2>Стоимость работ будет 2000 рублей</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="right_menu-img df align">
                                    <img className="ansver" src="../img/chat_img/ответ.png" alt="no photo"/>
                                    <img src="../img/chat_img/span.png" alt="no photo"/>
                                </div>

                            </div>


                            <div className="correspondence df font_inter">
                                <div className="correspondence_ciril df">
                                    <div className="ciril-img">
                                        <img src="../img/chat_img/кирил.png" alt="no photo"/>
                                    </div>
                                    <div className="let">
                                        <div className="letter_kiril df">
                                            <div className="letter_text-1">
                                                <h2>Кирилл Воронов</h2>
                                            </div>
                                            <div className="letter_text-2">
                                                <h3>13:44</h3>
                                            </div>
                                        </div>
                                        <div className="sms df align">
                                            <div className="sms_text">
                                                <h2>Могу выполнить заказ</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_menu-img df align">
                                    <img className="ansver" onClick={()=> Isanswer(true)} src="../img/chat_img/ответ.png" alt="no photo"/>
                                    <img src="../img/chat_img/span.png" alt="no photo"/>
                                </div>
                            </div>


                            <div className="call_date font_inter">
                                <div className="cal_date-text df align">
                                    <div className="date_line-left"></div>
                                    <div className="date1">
                                        <h2>21 АВГ</h2>
                                    </div>
                                    <div className="date_line-right"></div>
                                </div>
                            </div>
                        </div>
                        <div className="message_block">
                            <div className="block_messages-2 font_inter">
                                {answer ? <p className="answer_to_message">Ответить <span>Смогу приехать через час</span> <button onClick={()=> Isanswer(false)}>X</button> </p> : null}
                                {edit ? <p className="answer_to_message">Редактирование <button onClick={()=> Isedit(false)}>X</button> </p> : null}
                                <div className="magnafire-2 df align">
                                    <div className="magnafire_input-2">
                                        <input className="inp" type="text" placeholder="Введите сообщение..."/>
                                    </div>
                                    <div className="nav_message df">
                                        <label htmlFor="file-input" className="clip">
                                            <img src="../img/chat_img/clip.png" alt="no photo"/>
                                        </label>
                                        <input id="file-input" style={{display: "none"}} type="file"/>

                                        <div className="plane">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}


export default ChoiceOfReplenishmentMethodCard;