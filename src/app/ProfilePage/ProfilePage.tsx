import classNames from "classnames";
import { useState } from "react";
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ArticleList } from "../HomePage/ArticleList/ArticleList";
import { Pagination } from "../HomePage/Pagination/Pagination";
import { useArticles } from "../hooks/useArticles";
import { useProfile } from "../hooks/useProfile";
import { UserInfo } from "../UserInfo/UserInfo";

const limit = 5;
export const ProfilePage = () => {

    const { username, favorites } = useParams();
    
    const {profile} = useProfile(username!);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(0);

    const {articles, articlesCount} = useArticles(limit, offset, undefined, username);
    
    const handlePageChanged = (newPage: number) => {
        setCurrentPage(newPage);
        setOffset((newPage - 1) * 5);
    }

    return (
        <>
            <Header/>
            <div className="profile-page">
                <UserInfo image={profile.image} username={profile.username} bio={profile.bio}/>

                <div className="container">
                    <div className="row">
                        <div className={classNames("col-md-10", "col-xs-12", "offset-md-1")}>
                            <div className="articles-toggle">
                                <ul className="nav nav-pills outline-active">
                                    <li className="nav-item">
                                        <NavLink className={"nav-link"} to={`/profile/${username}`}>My Articles</NavLink>
                                        <NavLink className={"nav-link"} to={`/profile/${username}/favorites`}>Favorited Articles</NavLink>
                                    </li>
                                </ul>
                            </div>

                            <ArticleList articles={articles}/>

                            <Pagination 
                                currentPage={currentPage}
                                articlesCount={articlesCount}
                                onPageChanged={handlePageChanged}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}