import React from 'react';
import classes from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../app-routes/constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout } from '../../redux/userSlice/userSlice';

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user);

	const handleLogout = () => {
		dispatch(logout());

		navigate(ROUTE_PATHS.INDEX);
	};

	return (
		<div className={classes.navbar}>
			<div>
				<Link to={ROUTE_PATHS.INDEX}>Home</Link>
			</div>

			<div>
				{user.status === 'logged' ? (
					<>
						<div>Hi {user.username}</div>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
					<>
						<Link to={ROUTE_PATHS.LOGIN}>
							<button>Login</button>
						</Link>
						<Link to={ROUTE_PATHS.SIGNUP}>
							<button>Signup</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
