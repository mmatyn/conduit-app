import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useAuth } from "../hooks/useAuth";
export const Header = () => {

    const { isConnected, user } = useAuth();

    return (
        <nav className={classNames("navbar", "navbar-light")}>
            <div className={"container"}>
                <NavLink className={"navbar-brand"} to={"/home"}>conduit</NavLink>
                <ul className={classNames("nav", "navbar-nav", "pull-xs-right")}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/home"}>Home</NavLink>
                    </li>
                    {
                        isConnected ?
                        <>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={"/editor"}>New Article</NavLink>
                            </li>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={"/settings"}>Settings</NavLink>
                            </li>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={`/profile/${user.username}`}>
                                    <i className="ion-compose"></i>
                                    &nbsp;{user.username}
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={"/login"}>Sign in</NavLink>
                            </li>
                            <li className={"nav-item"}>
                                <NavLink className={"nav-link"} to={"/register"}>Sign up</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    )
}