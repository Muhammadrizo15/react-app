import React, {useState} from 'react';
import '../scss/style.scss'
import DropdownService from "../dropdownService";

const Menu = ({active, setActive}) => {
    const [visibleCountry, setVisibleCountry] = useState(false)
    const [visibleService, setVisibleService] = useState(false)
    const [menuActive, setMenuActive] = useState(false)
    return (
        <div className={active ? 'menu active': 'menu'} onClick={()=> setActive(false)}>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <ul>
                    <li>
                        <a href="#footer">Услуги</a>
                    </li>
                    <li>
                        <a href="#">Город</a>
                    </li>
                    <li>
                        <a href="#">Статьи</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;