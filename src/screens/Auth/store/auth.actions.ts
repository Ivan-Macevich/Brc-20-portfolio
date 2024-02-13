import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/authTypes";
import { addUser } from "src/libs/firebase";

export const signUpUser = createAsyncThunk<
	User,
	{ id: string; email: string ; name: string },
	{ rejectValue: string }
>("user/sign-up-user", async ({ id, email, name }, { rejectWithValue }) => {
    try {
        const user = await addUser(id, email, name);
        if(!user) {
            throw new Error("User not added successfully");
        }
        return user;
    } catch (err) {
      return rejectWithValue("Error adding user")  
    }
});
