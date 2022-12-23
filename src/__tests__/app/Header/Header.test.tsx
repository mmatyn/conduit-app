import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import { Header } from "../../../app/Header/Header";

describe('Header component should', () => {
    it('display conduit, Home, Sign in, Sign up links' , async () => {
        render(<Header/>,{
            wrapper: MemoryRouter
        });

        expect(await screen.findByRole('navigation')).toBeInTheDocument();
        expect(await screen.findByRole('navigation')).toHaveClass("navbar navbar-light");
        expect(await screen.findByText('conduit')).toBeInTheDocument();
        expect(await screen.findByText('conduit')).toHaveClass("navbar-brand");
        expect((await screen.findByRole('list'))).toHaveClass("nav navbar-nav pull-xs-right");
        (await screen.findAllByRole('listitem')).forEach(listitem => {
            expect(listitem).toHaveClass("nav-item");
        })
        expect((await screen.findAllByRole('listitem')).length).toBe(3);
        expect(await screen.findByText('Home')).toBeInTheDocument();
        expect(await screen.findByText('Home')).toHaveClass("nav-link active");
        expect(await screen.findByText('Sign in')).toBeInTheDocument();
        expect(await screen.findByText('Sign in')).toHaveClass("nav-link");
        expect(await screen.findByText('Sign up')).toBeInTheDocument();
        expect(await screen.findByText('Sign up')).toHaveClass("nav-link");
    });

    it('navigate to Home page when clicking on conduit', async () => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <Header />
            </Router>);
        
        userEvent.click(await screen.findByText('conduit'));

        expect(history.push).toBeCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '#/',
                pathname: `/`,
                search: '',
            },
            undefined,
            {
                "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
            }
        );
    });

    it('navigate to Home page', async () => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <Header />
            </Router>);
        
        userEvent.click(await screen.findByText('Home'));

        expect(history.push).toBeCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '#/',
                pathname: `/`,
                search: '',
            },
            undefined,
            {
                "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
            }
        );
    });

    it('navigate to Sign in page', async () => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <Header />
            </Router>);
        
        userEvent.click(await screen.findByText('Sign in'));

        expect(history.push).toBeCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '#/login',
                pathname: `/`,
                search: '',
            },
            undefined,
            {
                "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
            }
        );
    });

    it('navigate to Sign up page', async () => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <Header />
            </Router>);
        
        userEvent.click(await screen.findByText('Sign up'));

        expect(history.push).toBeCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '#/register',
                pathname: `/`,
                search: '',
            },
            undefined,
            {
                "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
            }
        );
    });

    it.each`
        displayedLinkName
        ${"Home"} 
        ${"Sign in"} 
        ${"Sign up"} 
    `('to have a className active after navigation', async ({displayedLinkName}) => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <Header />
            </Router>);
        
        userEvent.click(await screen.findByText(displayedLinkName));

        expect(await screen.findByText(displayedLinkName)).toHaveClass('active');
    });
})