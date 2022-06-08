export type UserState = {
	username: string | undefined;
	error: string | undefined;
	status: 'idle' | 'pending' | 'logged' | 'failed';
};

export type UserLoginParams = {
	email: string;
	password: string;
};
