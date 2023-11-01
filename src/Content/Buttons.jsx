import React from 'react';
import module from './Buttons.module.scss'

import Home from '../assets/home.png'
import Compass from '../assets/compass.png'
import Magnifier from '../assets/Magnifier.png'
import plus from '../assets/plus.png'
import Noti from '../assets/Noti.png'
import reel from '../assets/reel.png'
import Ava from '../assets/Ava.jpg'
import burgerMenu from '../assets/burgerMenu.png'
import threadsLogo from '../assets/threadsLogo.png'

function Buttons(props) {
    return (
        <div className={module.main_content}>
            <div className={module.upperBtn}>
                <button><img src={Home} /> Главная</button>
                <button><img src={Magnifier} /> Поисковый запрос</button>
                <button><img src={Compass} /> Интересное</button>
                <button><img src={reel} /> Reels</button>
                <button><img src={Noti} /> Сообщения</button>
                <button><img src={Home} /> Уведомления</button>
                <button><img src={plus} /> Создать</button>
                <button className="round-button">
                    <img src={Ava} alt="Изображение" /> Профиль
                </button>
            </div>
            <div className={module.botBtn}>
                <button><img src={threadsLogo} alt="Изображение" /> Threads</button>
                <button><img src={burgerMenu} alt="Изображение" /> Ещё</button>
            </div>
        </div>

    );
}

export default Buttons;