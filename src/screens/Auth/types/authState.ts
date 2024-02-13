import { BaseState } from "src/types/baseState";

export interface IAuthState extends BaseState {
    id: string;
    email: string;
    name: string;
}