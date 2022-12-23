import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { FeedToggle } from "../../../../app/HomePage/FeedToggle/FeedToggle"
describe('FeedToggle component should', () => {
    it('display Global Feed', async () => {
        render(<FeedToggle/>, {
            wrapper: MemoryRouter
        })

        expect(await screen.findByRole('list')).toBeInTheDocument();
        expect(await screen.findByRole('list')).toHaveClass("nav nav-pills outline-active");
        expect(await screen.findByText('Global Feed')).toBeInTheDocument();
    })
})