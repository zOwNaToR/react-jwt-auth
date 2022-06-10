import axios, { AxiosRequestConfig } from 'axios';
import { AxiosInterceptorsIds } from './types';
import { formatApiErrors } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/constants';
import { AppDispatch } from '../../redux/types';
import { refreshToken } from '../../redux/userSlice/userSlice';

const axiosInterceptorsIds: AxiosInterceptorsIds = {
	requestId: undefined,
	responseId: undefined,
};

export const setupAxiosInterceptors = (dispatch: AppDispatch, token: string) => {
	axios.defaults.baseURL = API_BASE_URL;
	axios.defaults.withCredentials = true;

	removePreviousInterceptors();

	axiosInterceptorsIds.requestId = axios.interceptors.request.use((config) =>
		configRequestInterceptor(config, token),
	);

	axiosInterceptorsIds.responseId = axios.interceptors.response.use(
		(response) => response,
		(errorResponse) => configRejectedResponseIntercepor(errorResponse, token, dispatch),
	);
};

const removePreviousInterceptors = () => {
	if (typeof axiosInterceptorsIds.requestId !== 'undefined') {
		axios.interceptors.request.eject(axiosInterceptorsIds.requestId);
	}

	if (typeof axiosInterceptorsIds.responseId !== 'undefined') {
		axios.interceptors.response.eject(axiosInterceptorsIds.responseId);
	}
};

const configRequestInterceptor = (config: AxiosRequestConfig, token: string) => {
	if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
	return config;
};
const configRejectedResponseIntercepor = async (
	errorResponse: any,
	token: string,
	dispatch: AppDispatch,
) => {
	const originalRequest = errorResponse.config;

	if (isRequestCanceled(errorResponse) || originalRequest._retry) {
		return Promise.reject(errorResponse);
	}

	if (isAuthenticationError(errorResponse) && canRefreshToken()) {
		console.log('token expired, trying to refresh');
		originalRequest._retry = true;

		await dispatch(refreshToken(token));

		return axios(originalRequest);
	}

	console.error('Response errors: ' + formatApiErrors(errorResponse));
	return Promise.reject(errorResponse);
};

const isRequestCanceled = (errorResponse: any) => !errorResponse.response && !errorResponse.config;
const isAuthenticationError = (errorResponse: any) => errorResponse.response?.status === 401;
// TODO Omar
const canRefreshToken = () => true;
