export const formatApiErrors = (error: any) => {
	if (error.response?.data?.errors) return error.response.data.errors;
	if (error.message) return error.message;

	return '';
};
