import React from "react";
import Me from '../../assets/MeTriangle.jpg';
import Reacts from '../../assets/React.svg';
import Node from '../../assets/Nodejs.svg';
import Docker from '../../assets/Docker.svg';
import Git from '../../assets/Git.svg';
import Linux from '../../assets/Linux.svg';
import PHP from '../../assets/PHP.svg';
import Luke from '../../assets/Me.jpg';

function Resume() {
    return (
        <div className="resume__container">
            <header className="resume__header">
                <h1 className="heading-1">孫立飛的履歷作品網站</h1>
                <a href="#popup">
                    <button className="btn resume__btn">查看履歷表</button>
                </a>
            </header>
            <div className="resume__card">
                <div className="resume__list">
                    <img className="resume__img" src={Me} alt="Me.jpg" />
                    <h3 className="resume__banner">孫立飛</h3>
                    <h3 className="resume__banner">輔仁大學</h3>
                    <h3 className="resume__banner">23歲</h3>
                    <h3 className="resume__banner">攝影.跑步.投資</h3>
                    <h3 className="resume__banner">前後端程式設計</h3>
                </div>
            </div>
            <section className="features">
                <div className="feature">
                    <img className="feature__icon" src={Reacts} alt="React" />
                    <h4 className="heading-4 heading-4--dark">Reacts</h4>
                    <p className="feature__text">使用元件.狀態管理.鉤子.自製鉤子,串接後端API</p>
                </div>
                <div className="feature">
                    <img className="feature__icon" src={Node} alt="Nodejs" />
                    <h4 className="heading-4 heading-4--dark">Node.js</h4>
                    <p className="feature__text">使用Express.js框架快速開發API</p>
                </div>
                <div className="feature">
                    <img className="feature__icon" src={Docker} alt="Docker" />
                    <h4 className="heading-4 heading-4--dark">Docker</h4>
                    <p className="feature__text">使用容器化技術進行部署，使用docker-compose.yaml依次運行多個Container</p>
                </div>
                <div className="feature">
                    <img className="feature__icon" src={Linux} alt="Linux" />
                    <h4 className="heading-4 heading-4--dark">Linux</h4>
                    <p className="feature__text">懂基礎指令.對使用者及檔案權限.Shell Script有一定的理解</p>
                </div>
                <div className="feature">
                    <img className="feature__icon" src={Git} alt="Git" />
                    <h4 className="heading-4 heading-4--dark">Git</h4>
                    <p className="feature__text">能將自己的專案推到Github，並使用託管商的服務部署網站</p>
                </div>
                <div className="feature">
                    <img className="feature__icon" src={PHP} alt="PHP" />
                    <h4 className="heading-4 heading-4--dark">PHP</h4>
                    <p className="feature__text">曾使用Yii框架開發API</p>
                </div>
            </section>
            <div class="popup" id="popup">
                <div class="popup__content">
                    <div class="popup__left">
                        <img src={Luke} alt="Linux" class="popup__img" />

                    </div>
                    <div class="popup__right">
                        <a href="#section-tours" class="popup__close">&times;</a>
                        <h2 class="heading-secondary">SkyWalker &ndash; Luke</h2>
                        <h3 class="heading-tertiary u-margin-bottom-small">輔仁大學 &ndash; 資訊管理學系</h3>
                        <p class="popup__text">
                            您好，我的名字是孫立飛，出生地在美國，從小在臺灣成長，喜歡健身.投資.鑽研網頁程式相關書籍，大學期間因為專題的關係，讓我對網站架設相關知識產生了濃厚的興趣，看到網站美觀實用對我來說人生最快樂的一件事了!希望未來能從事網站架設.前後端程式設計相關的工作，如果您覺得我是您正在找的人，觀迎聯繫我!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;