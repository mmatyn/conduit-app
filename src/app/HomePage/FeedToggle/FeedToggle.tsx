import { NavLink } from "react-router-dom"

export const FeedToggle = () => {
    return(
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <NavLink className={"nav-link"} to={"/"}>Global Feed</NavLink>
                </li>
            </ul>
        </div>
    )
}