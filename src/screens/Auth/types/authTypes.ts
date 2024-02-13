export interface ISignIn {
    email: string;
    password: string;
};

export interface ISignUp {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface User {
    id:string;
    name: string;
    email:string;
}