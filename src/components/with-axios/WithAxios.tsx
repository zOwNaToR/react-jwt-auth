import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setupAxiosInterceptors } from '../../services/axios-service/axiosService';
import { NFC } from '../../utils/types';

// eslint-disable-next-line react/prop-types
const WithAxios: NFC = ({ children }) => {
	const dispatch = useDispatch();

	useMemo(() => {
		// TODO Omar
		setupAxiosInterceptors(dispatch, '');
	}, [dispatch]);

	return <>{children}</>;
};

export default WithAxios;
