import classNames from "classnames"
import { NavLink, useNavigate } from "react-router-dom"
import { ArticleMeta } from "../../ArticleMeta/ArticleMeta"
import { Button } from "../../Button/Button"
import { useAuth } from "../../hooks/useAuth"
import { useFavorites } from "../../hooks/useFavorites"
import { article } from "../../models/article"

type ArticleItemProps = {
    article : article
}

export const ArticleItem = ({article}: ArticleItemProps) => {

    const navigate = useNavigate();
    const {isConnected} = useAuth();
    const { setAsFavorite, deleteFromFavorite} = useFavorites();
    const handleClick = () => {
        if(isConnected)
        {
            if(article.favorited)
                deleteFromFavorite(article.slug)
            else
                setAsFavorite(article.slug)
        }
        else
            navigate('/register');
    }
    return(
        <div className="article-preview">
            <ArticleMeta username={article.author.username} updatedAt={article.updatedAt} image={article.author.image}>
                <Button className={classNames("btn", "btn-outline-primary", "btn-sm", "pull-xs-right")} 
                    onClick={handleClick}>
                    <i className="ion-heart"/> {article.favoritesCount}
                </Button>
            </ArticleMeta>
            <NavLink to={`/article/${article.slug}`} className="preview-link">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {
                        article.tagList.map(tag => 
                            <li key={tag} className={classNames("tag-default", "tag-pill", "tag-outline")}>
                                {tag}
                            </li>)
                    }
                </ul>
            </NavLink>
        </div>
    )
}