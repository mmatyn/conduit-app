import { NavLink } from "react-router-dom";
import classNames from "classnames";
export const Header = () => {

    return (
        <nav className={classNames("navbar", "navbar-light")}>
            <div className={"container"}>
                <NavLink className={"navbar-brand"} to={"/"}>conduit</NavLink>
                <ul className={classNames("nav", "navbar-nav", "pull-xs-right")}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/login"}>Sign in</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/register"}>Sign up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}