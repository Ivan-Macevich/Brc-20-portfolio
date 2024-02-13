import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@screens/Auth/store/auth.slice";
import { mainReducer } from "@screens/Main/store/main.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
	reducer: { auth: authReducer, main: mainReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
