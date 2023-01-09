import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from '../slices/authSlice';

const store = configureStore({
    reducer: authSlice.reducer,
});

export type ConduitDispatch = typeof store.dispatch;
export const useConduitDispatch: () => ConduitDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store