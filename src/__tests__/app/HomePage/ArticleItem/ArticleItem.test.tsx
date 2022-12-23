import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import { ArticleItem } from "../../../../app/HomePage/ArticleItem/ArticleItem";

describe('ArticleItem component should', () => {
    it('display the author infos, a button with the number of likes, a link to the article', async () => {
        render(<ArticleItem article={{
            favoritesCount: 10,
            author: {
                bio: "",
                image: "",
                following: false,
                username: "Mickael MATYN",
            },
            createdAt: "20 Janvier",
            updatedAt: "20 Janvier",
            slug: "How-to-create-a-React-App",
            description: "Lipsum",
            title: "How to create a React App",
            body: "",
            favorited: false,
            tagList: ["tag1", "tag2"]
        }}/>, {
            wrapper: MemoryRouter
        })

        expect(await screen.findByText('Mickael MATYN')).toBeInTheDocument();
        expect(await screen.findByText('Mickael MATYN')).toHaveClass("author");
        expect(await screen.findByText('20 Janvier')).toBeInTheDocument();
        expect(await screen.findByText('20 Janvier')).toHaveClass("date");
        expect(await screen.findByRole('button')).toBeInTheDocument();
        expect(await screen.findByText('10')).toBeInTheDocument();
        expect(await screen.findByText('How to create a React App')).toBeInTheDocument();
        expect(await screen.findByText('Lipsum')).toBeInTheDocument();
        expect(await screen.findByText('tag1')).toBeInTheDocument();
        expect(await screen.findByText('tag2')).toBeInTheDocument();
    });

    describe('navigate to the author page', () => {
        it('by clicking on the image', async () => {
            const history = createMemoryHistory();
            history.push = jest.fn()
            render(<Router location={history.location} navigator={history} >
                    <ArticleItem article={{
                        favoritesCount: 10,
                        author: {
                            bio: "",
                            image: "",
                            following: false,
                            username: "Mickael MATYN",
                        },
                        createdAt: "20 Janvier",
                        updatedAt: "20 Janvier",
                        slug: "How-to-create-a-React-App",
                        description: "Lipsum",
                        title: "How to create a React App",
                        body: "",
                        favorited: false,
                        tagList: ["tag1", "tag2"]
                    }}/>
            </Router>);
            
            userEvent.click(await screen.findByRole('img'));

            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toHaveBeenCalledWith(
                {
                    hash: '#/profile/Mickael MATYN',
                    pathname: `/`,
                    search: '',
                },
                undefined,
                {
                    "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
                }
            );
        });

        it('by clicking on the author name', async () => {
            const history = createMemoryHistory();
            history.push = jest.fn()
            render(<Router location={history.location} navigator={history} >
                    <ArticleItem article={{
                        favoritesCount: 10,
                        author: {
                            bio: "",
                            image: "",
                            following: false,
                            username: "Mickael MATYN",
                        },
                        createdAt: "20 Janvier",
                        updatedAt: "20 Janvier",
                        slug: "How-to-create-a-React-App",
                        description: "Lipsum",
                        title: "How to create a React App",
                        body: "",
                        favorited: false,
                        tagList: ["tag1", "tag2"]
                    }}/>
            </Router>);
            
            userEvent.click(await screen.findByText('Mickael MATYN'));

            expect(history.push).toBeCalledTimes(1);
            expect(history.push).toHaveBeenCalledWith(
                {
                    hash: '#/profile/Mickael MATYN',
                    pathname: `/`,
                    search: '',
                },
                undefined,
                {
                    "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
                }
            );
        });
    });

    it('navigate to the article page', async () => {
        const history = createMemoryHistory();
        history.push = jest.fn()
        render(<Router location={history.location} navigator={history} >
                <ArticleItem article={{
                    favoritesCount: 10,
                    author: {
                        bio: "",
                        image: "",
                        following: false,
                        username: "Mickael MATYN",
                    },
                    createdAt: "20 Janvier",
                    updatedAt: "20 Janvier",
                    slug: "How-to-create-a-React-App",
                    description: "Lipsum",
                    title: "How to create a React App",
                    body: "",
                    favorited: false,
                    tagList: ["tag1", "tag2"]
                }}/>
        </Router>);
        
        userEvent.click(await screen.findByText('How to create a React App'));

        expect(history.push).toBeCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '#/article/How-to-create-a-React-App',
                pathname: `/`,
                search: '',
            },
            undefined,
            {
                "preventScrollReset" : undefined, "relative" : undefined, "replace" : false, "state": undefined,
            }
        );
    });
})