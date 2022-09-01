import './header.scss'
import {NavLink} from "react-router-dom";
import ua_lang from "../../templates/lang/ua.svg"
import logoCat from "../../templates/cat.png"
function Header(){
    return(
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

export default Header