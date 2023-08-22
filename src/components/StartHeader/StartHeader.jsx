import React from "react";
import './startHeader.scss';

export const StartHeader = () => {
    return (
        <>
            <div className={"welcomeBack"}>
                <div className="header">
                    <div className={"logo"}>AniHub</div>
                    <button className={"loginBtn"}>Войти</button>
                </div>
                <div className={"welcomeCont"}>
            <span className={"welcomeTextFirst"}>
                  Добро пожаловать в AniHub!
                </span>
                    <span className={"welcomeTextSecond"}>
                Лучшее место для просмотра аниме. Зарегистрируйтесь сейчас и наслаждайтесь огромным выбором релизов от любимых студий.
                    </span>
                </div>
                <div className={"welcomeTheme"}></div>
            </div>
        </>
    )
}