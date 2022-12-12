import React from "react";

import {
    Link,
} from "react-router-dom";
function ChoiceOfReplenishmentMethodHistory(){
    return (
        <div className="middle-block-2">

            <Link to="/history">
                <h1>История операций </h1>
            </Link>

            <div className="blocks">
                <div className="block df">
                    <div className="df poplocho">
                        <img src="img/img-qivi-2.png" alt=""/>
                        <h2>Пополнение счета </h2>
                    </div>
                    <p><span className="abel">+1500</span>₽</p>
                </div>
                <div className="block df">
                    <div className="df poplocho">
                        <img src="img/img-card-2.png" alt=""/>
                        <h2>Пополнение счета </h2>
                    </div>
                    <p><span className="abel">+2000</span>₽</p>
                </div>
                <div className="block df">
                    <div className="df poplocho">
                        <img src="img/img-card-2.png" alt=""/>
                        <h2>Пополнение счета </h2>
                    </div>
                    <p><span className="abel">+500</span>₽</p>
                </div>
            </div>
        </div>
    )
}


export default ChoiceOfReplenishmentMethodHistory;