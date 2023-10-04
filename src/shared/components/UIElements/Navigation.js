import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Navigation() {
    return (
        <ul className="navigation__list">
            <li><NavLink className="navigation__item" to={"/"}>首頁</NavLink></li>
            <li><NavLink className="navigation__item" to={"/resume"}>履歷表</NavLink></li>
            <li><a className="navigation__item" href="https://auth-8aa20.web.app">網站作品</a></li>
        </ul>
    )
}

export default Navigation;