import { articles } from "../../models/article"
import { ArticleItem } from "../ArticleItem/ArticleItem"

type ArticleListProps = {
    articles: articles
}

export const ArticleList = ({articles}: ArticleListProps) => {
    return(
        <>
            {
                articles.map(article =>
                    <ArticleItem key={article.slug} article={article}></ArticleItem>
                )
            }
        </>
    )
}