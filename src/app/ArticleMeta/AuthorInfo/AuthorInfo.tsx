import { NavLink } from "react-router-dom"
import moment from "moment"

type AuthorInfoProps = {
    username: string,
    updatedAt: Date
}
export const AuthorInfo = ({username, updatedAt}: AuthorInfoProps) => {
    return(
        <div className="info">
            <NavLink to={`/profile/${username}`} className="author">{username}</NavLink>
            <span className="date">{moment(updatedAt).format('MMMM D, YYYY')}</span>
        </div>
    )
}