import { RouteObject } from 'react-router/lib/router';
import { KeyValue } from '../../utils/types';
import Index from '../../pages/index/Index';
import Login from '../../pages/auth/login/Login';
import Signup from '../../pages/auth/signup/Signup';
import ResetPassword from '../../pages/auth/reset-password/ResetPassword';
import ForgotPassword from '../../pages/auth/forgot-password/ForgotPassword';
import ConfirmEmail from '../../pages/auth/confirm-email/ConfirmEmail';

export const ROUTE_PATHS: KeyValue<string> = {
	INDEX: '/',
	SIGNUP: 'signup',
	LOGIN: 'login',
	CONFIRM_EMAIL: 'confirm-email',
	FORGOT_PASSWORD: 'forgot-password',
	RESET_PASSWORD: 'reset-password',
};

export const ROUTES: RouteObject[] = [
	{
		index: true,
		path: ROUTE_PATHS.INDEX,
		element: <Index />,
	},
	{
		path: ROUTE_PATHS.SIGNUP,
		element: <Signup />,
	},
	{
		path: ROUTE_PATHS.LOGIN,
		element: <Login />,
	},
	{
		path: ROUTE_PATHS.CONFIRM_EMAIL,
		element: <ConfirmEmail />,
	},
	{
		path: ROUTE_PATHS.FORGOT_PASSWORD,
		element: <ForgotPassword />,
	},
	{
		path: ROUTE_PATHS.RESET_PASSWORD,
		element: <ResetPassword />,
	},
];
