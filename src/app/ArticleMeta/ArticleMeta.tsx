import { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import { AuthorInfo } from "./AuthorInfo/AuthorInfo"

type ArticleMetaProps = PropsWithChildren<{
    username: string,
    image: string,
    updatedAt: Date,
}>;

export const ArticleMeta = ({username, image, updatedAt, children}: ArticleMetaProps) => {
    return(
        <div className="article-meta">
            <NavLink to={`/profile/${username}`}>
                <img src={image}/>
            </NavLink>
            <AuthorInfo username={username} updatedAt={updatedAt} />
            {
                children
            }
        </div>
    )
}