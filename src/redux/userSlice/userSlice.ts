import { LoginReturn, UserLoginParams, UserState } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const login = createAsyncThunk<LoginReturn, UserLoginParams, { rejectValue: string }>(
	'user/login',
	async ({ email, password }, thunkAPI) => {
		try {
			return {
				username: 'myUsername',
				token: 'myToken',
			};
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.toString());
		}
	},
);

const refreshToken = createAsyncThunk<LoginReturn, string, { rejectValue: number }>(
	'user/refreshToken',
	async (token, thunkAPI) => {
		try {
			return {
				username: 'myRefreshedUsername',
				token: 'myRefreshedToken',
			};
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.toString());
		}
	},
);

const initialState: UserState = {
	username: undefined,
	token: undefined,
	status: 'idle',
	error: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout(state) {
			state.status = 'idle';
			state.username = undefined;
			state.error = undefined;
		},
	},
	extraReducers: (builder) => {
		builder
			// Login
			.addCase(login.pending, (state) => {
				state.username = undefined;
				state.token = undefined;
				state.status = 'pending';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.username = action.payload.username;
				state.token = action.payload.token;
				state.status = 'logged';
			})
			.addCase(login.rejected, (state, action) => {
				state.username = undefined;
				state.token = undefined;
				state.error = action.payload?.toString();
				state.status = 'failed';
			})
			// Refresh token
			.addCase(refreshToken.fulfilled, (state, action) => {
				state.username = action.payload.username;
				state.token = action.payload.token;
				state.status = 'logged';
			})
			.addCase(refreshToken.rejected, (state, action) => {
				state.username = undefined;
				state.token = undefined;
				state.error = action.payload?.toString();
				state.status = 'failed';
			});
	},
});

export const { logout } = userSlice.actions;
export { login, refreshToken };
export default userSlice.reducer;
