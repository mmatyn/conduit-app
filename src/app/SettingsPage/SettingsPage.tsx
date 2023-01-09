import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth"
import { PageContainer } from "../PageContainer/PageContainer"

export const SettingsPage = () => {

    const {user, logout, updateSettings} = useAuth();

    const [email, setEmail] = useState<string>(user.email)
    const [bio, setBio] = useState<string>(user.bio)
    const [username, setUsername] = useState<string>(user.username)
    const [image, setImage] = useState<string>(user.image)
    const [password, setPassword] = useState<string>()

    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/home');
    }

    const handleUpdateSettings = () => {
        const userUput = {
            email,
            bio,
            username,
            image,
            password
        }
        updateSettings(userUput);
        navigate(`/profile/${user.username}`)
    }
    return (
        <PageContainer>
            <div className="settings-page">
                <div className="container page">
                    <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>

                        <form>
                        <fieldset>
                            <fieldset className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="URL of profile picture"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Your Name" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea
                                    className="form-control form-control-lg"
                                    rows={8}
                                    placeholder="Short bio about you"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    className="form-control form-control-lg"
                                    type="text" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input 
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </fieldset>
                            <button 
                                className="btn btn-lg btn-primary pull-xs-right"
                                onClick={handleUpdateSettings}>
                                    Update Settings
                            </button>
                        </fieldset>
                        </form>
                        <hr />
                        <button 
                            className="btn btn-outline-danger"
                            onClick={handleLogout}>
                                Or click here to logout.
                        </button>
                    </div>
                    </div>
                </div>
                </div>
        </PageContainer>
    )
}