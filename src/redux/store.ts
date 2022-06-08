import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice/userSlice';

export const store = configureStore({
	reducer: {
		user,
	},
});
