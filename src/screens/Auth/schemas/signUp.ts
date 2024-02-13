import { ISignUp } from "@screens/Auth/types/authTypes";
import * as Yup from "yup";

export const initialSignUpValues: ISignUp = {
	name: "",
	email: "",
	password: "",
	repeatPassword: ""
};

export const validationSignUpSchema = Yup.object().shape({
	name: Yup.string().trim().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
	repeatPassword: Yup.string()
		.oneOf([Yup.ref("password"), undefined], "Passwords must match")
		.required("Repeat Password is required")
});
