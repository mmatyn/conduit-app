import { useEffect, useState } from "react";
import { article } from "../models/article";
import { comment } from "../models/comment";

export function useArticle(slug: string) {

    const [article, setArticle] = useState<article>({
        slug:"",
        author: {
            username: "",
            bio: "",
            image: "",
            following: false,
        },
        title: "",
        tagList: [],
        description: "",
        body: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        favorited: false,
        favoritesCount: 0
    });
    const [comments, setComments] = useState<comment[]>([]);

    async function GetArticle() {
        try{
            const response = await fetch(`https://api.realworld.io/api/articles/${slug}`);
            const data = await response.json();
            setArticle(data.article);
        }
        catch(error) {
            console.error(error);
        }
    }

    async function GetComments() {
        try{
            const response = await fetch(`https://api.realworld.io/api/articles/${slug}/comments`);
            const data = await response.json();
            setComments(data.comments);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetArticle();
        GetComments();
    }, []);

    return {
        article,
        comments
    }
}