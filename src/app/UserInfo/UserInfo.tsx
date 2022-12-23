import classNames from "classnames"
import { Button } from "../Button/Button"
type UserInfoProps = {
    image: string,
    username: string,
    bio: string,
}
export const UserInfo = ({image, username, bio}: UserInfoProps) => {
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
                        <Button className={classNames("btn", "btn-sm", "btn-outline-secondary", "action-btn")}>
                            <i className="ion-plus-round"/>
                            &nbsp; Follow {username}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}