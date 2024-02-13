import { ISignIn } from "@screens/Auth/types/authTypes";
import * as Yup from "yup";

export const initialSignInValues: ISignIn = {
	email: "",
	password: ""
};

export const validationSignInSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long"),
	
});
