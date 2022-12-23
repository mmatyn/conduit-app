import classNames from "classnames"
import { NavLink } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const LoginPage = () =>{
    return (
        <>
            <Header></Header>
            <div className="auth-page">
                <div className="row">
                    <div className={classNames("col-md-6", "offset-md-3", "col-xs-12")}>
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <NavLink to={"/register"}>Need an account?</NavLink>
                        </p>

                        <ul className="error-messages">
                            <li>Email or password is invalid</li>
                        </ul>
                        <form>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" placeholder="Password" />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                        </form> 
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}