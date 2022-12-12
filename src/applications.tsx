import React from "react";
import Sidebar from "./sidebar";
import './scss/applications.css'
import {Link} from "react-router-dom";


function App() {
    return (
        <div className='main nal df'>
            <Sidebar/>
            <div className="block-info-4">
                <div className="mini-text">
                    <h1>Заявки</h1>
                </div>

                <div className="mini-wrap mini-wrap_links history__links df">
                    <Link className="just active2" to='#'><h3>Мои заявки</h3></Link>
                    <Link className="just" to='#'><h3>Выполнено</h3></Link>
                    <Link className="just " to='#'><h3>Отменено</h3></Link>
                    <Link className="just" to='#'><h3>Все</h3></Link>
                </div>

                <div className="so_3">

                    <div className="flex-content df">
                        <div className="name">
                            <h1>Имя</h1>
                            <p>ФАМИЛИЯ </p>
                        </div>

                        <div className="date">
                            <p>Дата</p>
                        </div>

                        <div className="info-content">
                            <h3>Диагностика IPhone 11 Pro Max</h3>
                            <h4>Определение неисправностей и необходимых работ по ремонту IPhone 11 Pro Max</h4>
                        </div>

                        <div className="quality">
                            <p>Стоимость</p>
                        </div>

                        <div className="value">
                            <p>1 500 ₽ </p>
                        </div>

                        <div className="btn_2_progress">
                            <button>В процессе</button>
                        </div>

                        <div className="img">
                            <img src="./img/img-phone.png" alt=""/>
                        </div>
                    </div>

                    <div className="misirble-block">
                        <h2>Сообщение от клиента//</h2>
                    </div>

                    <div className="misirble-block">
                        <h2>Сообщение мастера, напишите сообщение Готов взяться выполнить</h2>
                    </div>

                    <div className="btn__content df">
                        <div>
                            <Link to="/added-device" className="link__2">
                                Согласиться
                            </Link>
                            <a href="#" className="link__2">Отмена</a>
                        </div>

                        <div className="so_2">
                            <input type="text" placeholder="3 часа "/>
                                <p>Выставить время </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default App;
