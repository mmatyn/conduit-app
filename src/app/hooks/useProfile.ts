import { useEffect, useState } from "react";
import { profile } from "../models/profile";

export function useProfile(username: string){

    const [profile, setProfile] = useState<profile>({
        username: "",
        bio: "",
        image: "",
        following: false,
    });

    async function GetProfile(){
        try{
            const response = await fetch(`https://api.realworld.io/api/profiles/${username}`);
            
            const data = await response.json();
            setProfile(data.profile);
        }
        catch(e){
            console.error(e);            
        }
    }

    async function follow(username: string){
        try{
            await fetch(`https://api.realworld.io/api/profiles/${username}`, {
                method: 'POST',
                headers : {
                    'Authorization' : 'Token'
                }
            });
        }
        catch(e){
            console.error(e);            
        }
    }

    async function unfollow(username: string){
        try{
            await fetch(`https://api.realworld.io/api/profiles/${username}`, {
                method: 'DELETE',
                headers : {}
            });
        }
        catch(e){
            console.error(e);            
        }
    }

    useEffect(() => {
        GetProfile();
    }, [username])
    return{
        profile,
        follow,
        unfollow
    }
}