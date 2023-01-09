import classNames from "classnames"
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import { userRegister } from "../models/user";
import { PageContainer } from "../PageContainer/PageContainer"

export const RegisterPage = () => {
    const [username, setUsername] = useState<string>(""); 
    const [email, setEmail] = useState<string>(""); 
    const [password, setPassword] = useState<string>(""); 
    const navigate = useNavigate();

    const { isConnected, register, errors } = useAuth();
    const handleClick = () => {
        const userRegister: userRegister = {
            username,
            email,
            password
        }
        register(userRegister);
    }
    
    useEffect(() => {
        if (isConnected)
            navigate('/home');
    }, [isConnected])

    return (
        <PageContainer>
            <div className="auth-page">
                <div className="row">
                    <div className={classNames("col-md-6", "offset-md-3", "col-xs-12")}>
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <NavLink to={"/login"}>Have an account?</NavLink>
                        </p>
                        <ul className="error-messages">
                            {
                                errors.email &&
                                <li>email {errors.email}</li>
                            }
                            {
                                errors?.username &&
                                <li>username {errors.username}</li>
                            }
                        </ul>
                        <form>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleClick}>Sign up</button>
                        </form> 
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}