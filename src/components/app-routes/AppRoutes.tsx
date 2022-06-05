import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './constants';

const AppRoutes: React.FC = () => {
	const routes = useRoutes(ROUTES);

	return routes;
};

export default AppRoutes;
