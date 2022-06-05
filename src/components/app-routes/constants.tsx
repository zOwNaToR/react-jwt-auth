import { RouteObject } from 'react-router/lib/router';
import { KeyValue } from '../../utils/types';
import Index from '../../pages/index/Index';
import Login from '../../pages/login/Login';

export const ROUTE_PATHS: KeyValue<string> = {
	INDEX: '/',
	LOGIN: 'login',
};

export const ROUTES: RouteObject[] = [
	{
		index: true,
		path: ROUTE_PATHS.INDEX,
		element: <Index />,
	},
	{
		path: ROUTE_PATHS.LOGIN,
		element: <Login />,
	},
];
