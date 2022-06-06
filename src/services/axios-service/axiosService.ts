import axios from 'axios';
import { AxiosInterceptorsIds } from './types';
import { formatApiErrors } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/constants';

const axiosInterceptorsIds: AxiosInterceptorsIds = {
	requestId: undefined,
	responseId: undefined,
};

export const setupAxiosInterceptors = (dispatch: any, token: string) => {
	axios.defaults.baseURL = API_BASE_URL;
	axios.defaults.withCredentials = true;

	// Setup Bearer JWT Token for each request
	if (typeof axiosInterceptorsIds.requestId !== 'undefined') {
		axios.interceptors.request.eject(axiosInterceptorsIds.requestId);
	}
	axiosInterceptorsIds.requestId = axios.interceptors.request.use((config) => {
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	});

	// Configure errors in responses
	if (typeof axiosInterceptorsIds.responseId !== 'undefined') {
		axios.interceptors.response.eject(axiosInterceptorsIds.responseId);
	}
	axiosInterceptorsIds.responseId = axios.interceptors.response.use(
		(response) => response,
		async (errorResponse) => {
			const originalRequest = errorResponse.config;

			if (isRequestCanceled(errorResponse) || originalRequest._retry) {
				return Promise.reject(errorResponse);
			}

			if (isAuthenticationError(errorResponse) && canRefreshToken()) {
				console.log('token expired, trying to refresh');
				originalRequest._retry = true;

				// TODO Omar
				await dispatch('Login');

				return axios(originalRequest);
			}

			console.error('Response errors: ' + formatApiErrors(errorResponse));
			return Promise.reject(errorResponse);
		},
	);
};

const isRequestCanceled = (errorResponse: any) => !errorResponse.response && !errorResponse.config;
const isAuthenticationError = (errorResponse: any) => errorResponse.response?.status === 401;
// TODO Omar
const canRefreshToken = () => true;
