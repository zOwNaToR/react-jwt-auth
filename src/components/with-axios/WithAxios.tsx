import React, { useMemo } from 'react';
import { setupAxiosInterceptors } from '../../services/axios-service/axiosService';
import { NFC } from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// eslint-disable-next-line react/prop-types
const WithAxios: NFC = ({ children }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);

	useMemo(() => {
		if (user.token) {
			setupAxiosInterceptors(dispatch, user.token);
		}
	}, [dispatch, user.token]);

	return <>{children}</>;
};

export default WithAxios;
