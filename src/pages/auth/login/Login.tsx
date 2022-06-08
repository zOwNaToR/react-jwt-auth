import React, { ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { login } from '../../../redux/userSlice/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../../components/app-routes/constants';

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.currentTarget.value);
	};

	const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.currentTarget.value);
	};

	const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await dispatch(login({ email: 'email', password: 'password' }));

		navigate(ROUTE_PATHS.INDEX);
	};

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleFormSubmit}>
				<div>
					<label>Email</label>
					<input
						className="block"
						type="Email"
						placeholder="email"
						onChange={handleEmailChange}
						value={email}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						className="block"
						type="password"
						placeholder="Password"
						onChange={handlePasswordChange}
						value={password}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default Login;
