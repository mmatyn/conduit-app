import { useState, useEffect } from "react";

export function useTags(){
    
    const [tags, setTags] = useState<string[]>([]);

    async function GetTags(){
        try{
            const response = await fetch(`https://api.realworld.io/api/tags`);
            const data = await response.json();
            setTags(data.tags);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetTags();
    }, []);

    return{
        tags,
    }
}