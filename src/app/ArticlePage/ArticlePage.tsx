import classNames from "classnames"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { ArticleMeta } from "../ArticleMeta/ArticleMeta"
import { Button } from "../Button/Button"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Banner } from "../HomePage/Banner/Banner"
import { useArticle } from "../hooks/useArticle"
import { Comment } from "../Comment/Comment"

export const ArticlePage = () => {

    const { slug } = useParams();
    const { article, comments } = useArticle(slug!);

    const isAuthenticated = false;
    return(
        <>
            <Header/>
            <div className="article-page">
                <Banner title={article.title}>
                    <ArticleMeta username={article.author.username} updatedAt={article.updatedAt} image={article.author.image}>
                        <Button className={classNames("btn", "btn-outline-secondary", "btn-sm")} >
                            <i className="ion-plus-round"/>
                            &nbsp; Follow {article.author.username}
                        </Button>
                        &nbsp;&nbsp;
                        <Button className={classNames("btn", "btn-outline-primary", "btn-sm")} >
                            <i className="ion-heart"/>
                            &nbsp; Favorite Article {`(${article.favoritesCount})`}
                        </Button>
                    </ArticleMeta>
                </Banner>

                <div className="container page">
                    <div className="row article-content">
                        <div className="col-md-12">
                            <p>
                                {article.body}
                            </p>
                            <ul className="tag-list">
                                {
                                    article.tagList.map(tag => 
                                        <li key={tag} className={classNames("tag-default", "tag-pill", "tag-outline")}>
                                            {tag}
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>

                    <hr/>
                    <div className="article-actions">
                        <ArticleMeta username={article.author.username} updatedAt={article.updatedAt} image={article.author.image}>
                            <Button className={classNames("btn", "btn-outline-secondary", "btn-sm")} >
                                <i className="ion-plus-round"/>
                                &nbsp; Follow {article.author.username}
                            </Button>
                            &nbsp;&nbsp;
                            <Button className={classNames("btn", "btn-outline-primary", "btn-sm")} >
                                <i className="ion-heart"/>
                                &nbsp; Favorite Article {`(${article.favoritesCount})`}
                            </Button>
                        </ArticleMeta>
                    </div>

                    <div className="row">
                        <div className={classNames("col-xs", "col-md-8", "offset-md-2")}>
                            {
                                isAuthenticated ? 
                                <>
                                    <form className={classNames("card", "comment-form")}>
                                        <div className="card-block">
                                            <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                                        </div>
                                        <div className="card-footer">
                                            <img src={article.author.image} className="comment-author-img" />
                                            <button className={classNames("btn", "btn-outline-primary", "btn-sm")}>Post Comment</button>
                                        </div>
                                    </form>
                                    {
                                        comments.map(comment => 
                                            <Comment key={comment.id} comment={comment}/>)
                                    }
                                </>
                                :
                                <p>
                                    <NavLink to={"/login"}>Sign in</NavLink> or <NavLink to={"/register"}>sign up</NavLink> to add comments on this article.
                                </p>
                            }

                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}