import './header.scss'
import './mobile-header.scss'
import {NavLink} from "react-router-dom";
import ua_lang from "../../templates/lang/ua.svg"
import burger from "../../templates/burger.svg"
import {useEffect, useState} from "react";
function Header(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [burgerState, setBurger] = useState(false)
    const [burgerClass, setClass] = useState('closed')
    const updateDimensions = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    const changeBurgerState = () => {
      setBurger(!burgerState)
        if(burgerState === true){
            setClass('open')
        }
        else{
            setClass('closed')
        }
    }
    useEffect(() =>
        {
            window.addEventListener("resize", updateDimensions)
            return() => window.removeEventListener("resize", updateDimensions)
        },[]
    )

    if (width <= 900){
        return (
            <header>
                <div className={burgerClass}>
                    <img src={burger} onClick={changeBurgerState}/>
                </div>
            </header>
        )
    }
    else {
        return (
            <header>
                <nav className="navBar">
                    <nav className="navLogo">
                        <NavLink to="/"><span className="logo1">Find</span><span className="logo2">acc</span></NavLink>
                    </nav>
                    <nav className="navButtons">
                        <NavLink to="search"><span>Пошук</span></NavLink>
                        <NavLink to="rate"><span>Тарифи</span></NavLink>
                        <NavLink to="about-us"><span>Про нас</span></NavLink>
                    </nav>
                    <nav className="loginButtons">
                        <NavLink to="login"><span className="login">Увійти</span></NavLink>
                        <NavLink to="sign-up"><span className="signup">Зареєструватись</span></NavLink>
                    </nav>
                    <div className="changeLanguage">
                        <img src={ua_lang}/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header