import { ThunkAction } from '../types';

export type UserState = ThunkAction & {
	username: string | undefined;
};

export type UserLoginParams = {
	email: string;
	password: string;
};
