import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login, logout } from '../../redux/userSlice/userSlice';

const Index: React.FC = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);

	return (
		<>
			<div>Hi {user.username ?? 'anonymous'}</div>
			{user.status === 'succeeded' ? (
				<button
					className="bg-blue-300 active:bg-blue-300 px-6 py-3"
					onClick={() => dispatch(logout())}
				>
					logout
				</button>
			) : (
				<button
					className="bg-blue-300 active:bg-blue-300 px-6 py-3"
					onClick={() => dispatch(login({ email: 'email', password: 'password' }))}
				>
					login
				</button>
			)}
		</>
	);
};

export default Index;
