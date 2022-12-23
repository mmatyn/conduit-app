import moment from "moment"
import { NavLink } from "react-router-dom"
import { comment } from "../models/comment"

type CommentProps = {
    comment: comment
}

export const Comment = ({comment}: CommentProps) => {
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">
                    {comment.body}
                </p>
            </div>
            <div className="card-footer">
                <NavLink className={"comment-author"} to={`/profile/${comment.author.username}`}>
                    <img src={comment.author.image} className="comment-author-img"/>
                </NavLink>
                &nbsp;
                <NavLink  className={"comment-author"} to={`/profile/${comment.author.username}`}>{comment.author.username}</NavLink>
                <span className="date-posed">{moment(comment.updatedAd).format("MMM Do")}</span>
            </div>
        </div>
    )
}