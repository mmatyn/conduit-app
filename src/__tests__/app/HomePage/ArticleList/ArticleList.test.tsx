import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { ArticleList } from "../../../../app/HomePage/ArticleList/ArticleList"
import { FeedToggle } from "../../../../app/HomePage/FeedToggle/FeedToggle"
describe('ArticleList component should', () => {
    it('display', async () => {
        render(<ArticleList articles={[]}/>, {
            wrapper: MemoryRouter
        })
    })
})