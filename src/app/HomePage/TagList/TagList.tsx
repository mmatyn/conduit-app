import classNames from "classnames"
import { NavLink } from "react-router-dom"

type TagListProps = {
    taglist: string[],
    onTagChanged: (tag: string) => void,
}
export const TagList = ({taglist, onTagChanged}: TagListProps) => {
    return (
        <div className="col-md-9">
            <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                    {
                        taglist.map(tag =>
                            <NavLink to={"/"} key={tag} className={classNames("tag-pill", "tag-default")}>
                                {tag}
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    )
}