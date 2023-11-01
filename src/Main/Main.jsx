import React from 'react';
import module from './Main.module.scss'
import Buttons from '../Content/Buttons';

import nout from '../assets/noutSpace.png'
import product from '../assets/1.jpg'
import ava from '../assets/ava.png'
import ava1 from '../assets/ava1.jpg'
import ava2 from '../assets/ava2.jpg'
import ava3 from '../assets/ava3.jpg'
import ava4 from '../assets/ava4.jpg'
import instaLogo from '../assets/instaLogo.svg'

function Main(props) {
    return (
        <div className={module.main_content}>
            <aside className={module.sideyard}>
                <div className={module.logoImg}>
                    <img src={instaLogo}></img>
                </div>
                <Buttons />
            </aside>

            <div className={module.content}>
                <div className={module.links}>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                    <div className={module.link_item}>
                        <img className={module.link_img} src={nout}></img>
                        <div>noutspace</div>
                    </div>
                </div>
            </div>

            <div className={module.container}>
                <div className={module.container_info}>
                    <img className={module.info_img} src={nout}></img>
                    <div className={module.info_text}>noutspace <span>• 1дн.</span> <br /><small>Бишкек</small></div>
                    <div className={module.info_dop}>•••</div>
                </div>

                <div>
                    <img className={module.container_img} src={product}></img>
                </div>


                <div className={module.container_rew}>
                    <div className={module.icons}>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={module.safe}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={module.container_dop}>
                    <div className={module.dop_text}>8 отметок "Нравится"</div>
                    <span className={module.more}>ещё</span>
                    <span>  Добавьте комментарий...</span>
                    <hr />
                </div>
            </div>

            <div className={module.container}>
                <div className={module.container_info}>
                    <img className={module.info_img} src={nout}></img>
                    <div className={module.info_text}>noutspace <span>• 1дн.</span> <br /><small>Бишкек</small></div>
                    <div className={module.info_dop}>•••</div>
                </div>

                <div>
                    <img className={module.container_img} src={product}></img>
                </div>


                <div className={module.container_rew}>
                    <div className={module.icons}>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={module.safe}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={module.container_dop}>
                    <div className={module.dop_text}>8 отметок "Нравится"</div>
                    <span className={module.more}>ещё</span>
                    <span>  Добавьте комментарий...</span>
                    <hr />
                </div>
            </div>

            <div className={module.container}>
                <div className={module.container_info}>
                    <img className={module.info_img} src={nout}></img>
                    <div className={module.info_text}>noutspace <span>• 1дн.</span> <br /><small>Бишкек</small></div>
                    <div className={module.info_dop}>•••</div>
                </div>

                <div>
                    <img className={module.container_img} src={product}></img>
                </div>


                <div className={module.container_rew}>
                    <div className={module.icons}>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={module.safe}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={module.container_dop}>
                    <div className={module.dop_text}>8 отметок "Нравится"</div>
                    <span className={module.more}>ещё</span>
                    <span>  Добавьте комментарий...</span>
                    <hr />
                </div>
            </div>

            <div className={module.container}>
                <div className={module.container_info}>
                    <img className={module.info_img} src={nout}></img>
                    <div className={module.info_text}>noutspace <span>• 1дн.</span> <br /><small>Бишкек</small></div>
                    <div className={module.info_dop}>•••</div>
                </div>

                <div>
                    <img className={module.container_img} src={product}></img>
                </div>


                <div className={module.container_rew}>
                    <div className={module.icons}>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={module.safe}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={module.container_dop}>
                    <div className={module.dop_text}>8 отметок "Нравится"</div>
                    <span className={module.more}>ещё</span>
                    <span>  Добавьте комментарий...</span>
                    <hr />
                </div>
            </div>

            <div className={module.container}>
                <div className={module.container_info}>
                    <img className={module.info_img} src={nout}></img>
                    <div className={module.info_text}>noutspace <span>• 1дн.</span> <br /><small>Бишкек</small></div>
                    <div className={module.info_dop}>•••</div>
                </div>

                <div>
                    <img className={module.container_img} src={product}></img>
                </div>


                <div className={module.container_rew}>
                    <div className={module.icons}>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className={module.safe}>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className={module.container_dop}>
                    <div className={module.dop_text}>8 отметок "Нравится"</div>
                    <span className={module.more}>ещё</span>
                    <span>  Добавьте комментарий...</span>
                    <hr />
                </div>
            </div>

            <div className={module.follow}>
                <div className={module.own}>
                    <div className={module.akk}>
                        <img className={module.ava} src={ava}></img>
                        <div className={module.nik}>Hanbek <br /><span>Hangeldi</span></div>
                    </div>
                    <a className={module.change} href='#'>переключиться</a>
                </div>

                <div className={module.recomend}>
                    Рекомендации для вас
                </div>

                <div className={module.friends}>
                    <div className={module.akk1}>
                        <img className={module.ava} src={ava4}></img>
                        <div className={module.nik}>test <br /><span>test</span></div>
                    </div>
                    <a className={module.change} href='#'>подписаться</a>
                </div>

                <div className={module.friends}>
                    <div className={module.akk1}>
                        <img className={module.ava} src={ava1}></img>
                        <div className={module.nik}>test <br /><span>test</span></div>
                    </div>
                    <a className={module.change} href='#'>подписаться</a>
                </div>

                <div className={module.friends}>
                    <div className={module.akk1}>
                        <img className={module.ava} src={ava2}></img>
                        <div className={module.nik}>test <br /><span>test</span></div>
                    </div>
                    <a className={module.change} href='#'>подписаться</a>
                </div>

                <div className={module.friends}>
                    <div className={module.akk1}>
                        <img className={module.ava} src={ava3}></img>
                        <div className={module.nik}>test <br /><span>test</span></div>
                    </div>
                    <a className={module.change} href='#'>подписаться</a>
                </div>

                <div className={module.follow_info}>
                    Информация Помощь Пресса API Вакансии<br /> Конфиденциальность Условия Места Язык<br /> Meta Verified
                    <div className={module.text}>© 2023 INSTAGRAM FROM META</div>
                </div>


            </div>
        </div>
    );
}

export default Main;