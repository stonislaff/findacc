import './header.scss'
import './mobile-header.scss'
import {NavLink} from "react-router-dom";
import ua_lang from "../../templates/lang/ua.svg"
import en_lang from "../../templates/lang/en.svg"
import burger from "../../templates/burger.svg"
import {useEffect, useState} from "react";
import strings from "../../localisation/localisation"

function Header(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [burgerState, setBurger] = useState(false)
    const [burgerClass, setClass] = useState('closed')
    const [lang, swapLanguage] = useState("en")
    const [langImg, setLanguageImg] = useState(en_lang)

    const updateLanguage = () =>{
        let setLang = 'ua'
        let setLangImg = ua_lang
        if (lang === "en"){
            setLang = 'ua'
            setLangImg = ua_lang
        }
        else{
            setLang = 'en'
            setLangImg = en_lang
        }
        swapLanguage(setLang)
        setLanguageImg(setLangImg)
        strings.setLanguage(setLang)
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    const changeBurgerState = () => {
      setBurger(!burgerState)
        if(burgerState){
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
                    <img alt='burger' src={burger} onClick={changeBurgerState}/>
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
                        <NavLink to="search"><span>{strings.search}</span></NavLink>
                        <NavLink to="rate"><span>{strings.rate}</span></NavLink>
                        <NavLink to="about-us"><span>{strings.about}</span></NavLink>
                    </nav>
                    <nav className="loginButtons">
                        <NavLink to="login"><span className="login">{strings.login}</span></NavLink>
                        <NavLink to="sign-up"><span className="signup">{strings.signup}</span></NavLink>
                    </nav>
                    <div className="changeLanguage"  onClick={updateLanguage}>
                        <img src={langImg}/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header