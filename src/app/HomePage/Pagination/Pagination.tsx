/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames"
import { NavLink } from "react-router-dom"

type PaginationProps = {
    articlesCount: number,
    currentPage: number,
    onPageChanged: (newPage: number) => void,
}
export const Pagination = ({articlesCount, currentPage, onPageChanged}: PaginationProps) => {

    return(
        <div className="ng-isolate-scope">
            <nav>
                <ul className="pagination">
                    {
                        Array.from({ length: Math.round(articlesCount / 10) }, (_, i) => i+1).map(number => 
                            <li key={number} className={classNames("page-item", "ng-scope", {"active" : currentPage === number} )}>
                                <a className={"page-link ng-binding"} onMouseDown={() => onPageChanged(number)}>
                                    {number}
                                </a>
                            </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}