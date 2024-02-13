import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../types/authState";
import { StateStatus } from "src/types/baseState";
import { signUpUser } from "./auth.actions";
import { User } from "../types/authTypes";

const initialState: IAuthState = {
	id: "",
	name: "",
	email: "",
	error: null,
	status: StateStatus.INIT
};

const authSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signUpUser.pending, (state) => {
			state.status = StateStatus.LOADING;
			state.error = null;
		});
		builder.addCase(
			signUpUser.fulfilled,
			(state, action: PayloadAction<User>) => {
				state.status = StateStatus.SUCCESS;
				state.id = action.payload.id;
				state.name = action.payload.name;
				state.email = action.payload.email;
				state.error = null;
			}
		);
		builder.addCase(signUpUser.rejected, (state, action) => {
			state.status = StateStatus.ERROR;
			state.error = action.payload;
		});
	}
});

export const { reducer: authReducer } = authSlice
