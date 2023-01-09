import classNames from "classnames"
import { useNavigate } from "react-router";
import { Button } from "../Button/Button"
import { useAuth } from "../hooks/useAuth";
type UserInfoProps = {
    image: string,
    username: string,
    bio: string,
}
export const UserInfo = ({image, username, bio}: UserInfoProps) => {
    
    const {user} = useAuth();
    const navigate = useNavigate();
    
    return(
        <div className="user-info">
            <div className="container">
                <div className="row">
                    <div className={classNames("col-xs", "col-md-10", "offset-md-1")}>
                        <img src={image} className="user-img"/>
                        <h4>{username}</h4>
                        <p>
                            {bio}
                        </p>
                        {
                            user.username === username ?
                            <Button className={classNames("btn", "btn-sm", "btn-outline-secondary", "action-btn")}
                                onClick={() => navigate('/settings')}>
                                <i className="ion-gear-a"/>
                                &nbsp; Edit Profile Settings
                            </Button>
                            :
                            <Button className={classNames("btn", "btn-sm", "btn-outline-secondary", "action-btn")}
                                onClick={() => {}}>
                                <i className="ion-plus-round"/>
                                &nbsp; Follow {username}
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}