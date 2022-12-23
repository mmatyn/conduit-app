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

    useEffect(() => {
        GetProfile();
    }, [username])
    return{
        profile,
    }
}