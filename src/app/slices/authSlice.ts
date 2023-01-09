import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userLogin, userPut, userRegister } from '../models/user';
import { RootState } from '../store/store';

const initialState = {
  loading: false,
  userInfo: {
    username: "",
    email: "",
    password: "",
    token: "",
    bio: "",
    image: "",
  }, // for user object
  userToken: "", // for storing the JWT
  errors: {
    username:"",
    email: "",
  },
  success: false, // for monitoring the registration process.
}

export const registerAsync = createAsyncThunk('auth/register', async (userRegister: userRegister) => {
    const response = await fetch(`https://api.realworld.io/api/users`, {
        body: JSON.stringify({user : userRegister}),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await response.json();
    return data;
})

export const updateSettingsAsync = createAsyncThunk('auth/updatesettings', async (userPut: userPut, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const response = await fetch(`https://api.realworld.io/api/user`, {
        body: JSON.stringify({user : userPut}),
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Token ${state.userToken}`, },
    });
    
    const data = await response.json();
    return data;
})

export const loginAsync = createAsyncThunk('auth/login', async (userLogin: userLogin) => {
    const response = await fetch(`https://api.realworld.io/api/users/login`, {
        body: JSON.stringify({user : userLogin}),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await response.json();
    console.log(data);
    return data;
});

export type errorAction = {
    type: string,
    payload: {
        errors: {
            email: string,
            username: string,
            "email or password": []
        }
    }
}

export type fullfilledAction = {
    type: string,
    payload: {
        user: {
            username: string,
            email: string,
            password: string,
            token: string,
            bio: string,
            image: string,
        }
    }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {        
        state.success = false;
    }
  },
  extraReducers(builder) {
    builder
        .addCase(loginAsync.fulfilled, (state, action: any) => {
            state.errors = {username: "", email: ""};
            state.userInfo = action.payload.user;
            state.success = true;
            state.userToken = action.payload.user.token;
        })
        .addCase(loginAsync.rejected, (state, action: any) => {
            state.errors = action.payload.errors;
            state.success = false;
        })
        .addCase(registerAsync.fulfilled, (state, action) => {
            state.userInfo = action.payload.user;
            state.success = true;
            state.userToken = action.payload.user.token;
        })
        .addCase(registerAsync.rejected, (state, action: any) => {
            state.errors = action.payload.errors;
            state.success = false;
        })
        .addCase(updateSettingsAsync.fulfilled, (state, action) => {
            state.userInfo = action.payload.user;
            state.success = true;
        })
        .addCase(updateSettingsAsync.rejected, (state, action: any) => {
            state.errors = action.payload.errors;
            state.success = false;
        })
    }
})