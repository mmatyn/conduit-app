import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function useFavorites (){
    const userToken = useSelector((state: RootState) => state.userToken);

    async function setAsFavorite(slug: string) {
        try{                
            const response = await fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userToken}`
                }
            });
            const data = await response.json();
        }
        catch(error) {
            console.error(error);
        }
    }

    async function deleteFromFavorite(slug: string) {
        try{                
            const response = await fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userToken}`
                }
            });
            const data = await response.json();
        }
        catch(error) {
            console.error(error);
        }
    }
    
    return {
        setAsFavorite,
        deleteFromFavorite
    }
}