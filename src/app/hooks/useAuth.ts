import { userLogin, userRegister, userPut } from "../models/user";
import { RootState, useConduitDispatch } from "../store/store";
import { loginAsync, registerAsync, updateSettingsAsync } from "../slices/authSlice";
import { useSelector } from 'react-redux';

export function useAuth(){
    const dispatch = useConduitDispatch();
    const isConnected = useSelector((state: RootState) => state.success);
    const errors = useSelector((state: RootState) => state.errors);
    const user = useSelector((state: RootState) => state.userInfo);

    async function login(userLogin: userLogin){
        dispatch(loginAsync(userLogin));
    }
    
    async function register(userRegister: userRegister){
        dispatch(registerAsync(userRegister));
    }

    function logout(){
        dispatch({type: 'auth/logout'});
    }

    async function updateSettings(userPut: userPut){
        dispatch(updateSettingsAsync(userPut))
    }

    return {
        isConnected,
        errors,
        user,
        register,
        login,
        logout,
        updateSettings
    }
}