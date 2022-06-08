import { store } from './store';

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

export type ThunkAction = {
	status: ThunkStatus;
	error: string | undefined;
};
