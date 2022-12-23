import { useEffect, useState } from "react";
import { articles } from "../models/article";

export function useArticles (limit: number, offset: number, tag?: string, author?: string, favorited?: string,){

    const [articles, setArticles] = useState<articles>([]);
    const [articlesCount, setArticlesCount] = useState<number>(0);

    async function GetAll() {
        try{
            let queries = `limit=${limit}&offset=${offset}`;
            if(tag)
                queries += `&tag=${tag}`;
            if(author)
                queries += `&author=${author}`;
            if(favorited)
                queries += `&favorited=${favorited}`;
                
            const response = await fetch(`https://api.realworld.io/api/articles?${queries}`);
            const data = await response.json();
            setArticles(data.articles);
            setArticlesCount(data.articlesCount);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetAll();
    }, [offset, author, tag, favorited]);
    
    return {
        articles,
        articlesCount
    }
}