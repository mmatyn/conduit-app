import classNames from "classnames"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { userLogin } from "../models/user"
import { PageContainer } from "../PageContainer/PageContainer"

export const LoginPage = () => {

    const [email, setEmail] = useState<string>(""); 
    const [password, setPassword] = useState<string>("");
    const { isConnected, errors, login} = useAuth();
    const navigate = useNavigate();

    const handleClick = () => { 
        const userLogin: userLogin = {
            email,
            password
        }
        login(userLogin);
    }

    useEffect(() => {
        console.log(isConnected);
        if (isConnected)
            navigate('/home');
    }, [isConnected])

    return (
        <PageContainer>
            <div className="auth-page">
                <div className="row">
                    <div className={classNames("col-md-6", "offset-md-3", "col-xs-12")}>
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <NavLink to={"/register"}>Need an account?</NavLink>
                        </p>

                        <ul className="error-messages">
                            {
                                errors?.email &&
                                <li>email {errors.email}</li>
                            }
                        </ul>
                        <form>
                            <fieldset className="form-group">
                                <input 
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleClick}>Sign in</button>
                        </form> 
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}