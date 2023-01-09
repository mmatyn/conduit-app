import { useState } from "react"
import { useArticles } from "../hooks/useArticles"
import { useTags } from "../hooks/useTags"
import { PageContainer } from "../PageContainer/PageContainer"
import { ArticleList } from "./ArticleList/ArticleList"
import { Banner } from "./Banner/Banner"
import { FeedToggle } from "./FeedToggle/FeedToggle"
import { Pagination } from "./Pagination/Pagination"
import { TagList } from "./TagList/TagList"

const limit = 10;
export const HomePage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [tag, setTag] = useState<string>("");
    const [offset, setOffset] = useState<number>(0);
    const { articles, articlesCount } = useArticles(limit, offset, tag);
    const { tags } = useTags();
    const handlePageChanged = (newPage: number) => {
        setCurrentPage(newPage);
        setOffset((newPage - 1) * 10);
    }
    return (
        <PageContainer>
            <div className="home-page">
                <Banner title="conduit">
                    <p>A place to share your knowleged.</p>
                </Banner>

                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <FeedToggle/>
                            <ArticleList articles={articles}/>
                            <Pagination 
                                currentPage={currentPage}
                                articlesCount={articlesCount}
                                onPageChanged={handlePageChanged}/>

                            <TagList taglist={tags} onTagChanged={setTag}/>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}