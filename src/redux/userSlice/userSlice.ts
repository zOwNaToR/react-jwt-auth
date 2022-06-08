import { UserLoginParams, UserState } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const login = createAsyncThunk<string, UserLoginParams, { rejectValue: number }>(
	'user/login',
	async ({ email, password }, thunkAPI) => {
		try {
			return 'myUsername' as string;
		} catch (err) {
			return thunkAPI.rejectWithValue(3);
		}
	},
);

const initialState: UserState = {
	username: undefined,
	status: 'idle',
	error: undefined,
};

export const userSlice = createSlice({
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
			.addCase(login.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.username = action.payload;
				state.status = 'logged';
			})
			.addCase(login.rejected, (state, action) => {
				state.error = action.payload?.toString();
				state.status = 'failed';
			});
	},
});

export const { logout } = userSlice.actions;
export { login };
export default userSlice.reducer;
