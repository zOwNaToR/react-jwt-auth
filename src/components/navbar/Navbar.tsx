import React from 'react';
import classes from './styles.module.css';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../app-routes/constants';

const Navbar: React.FC = () => {
	return (
		<div className={classes.navbar}>
			<div>
				<Link to={ROUTE_PATHS.INDEX}>Home</Link>
			</div>

			<div>
				<Link to={ROUTE_PATHS.LOGIN}>
					<button>Login</button>
				</Link>
				<Link to={ROUTE_PATHS.SIGNUP}>
					<button>Signup</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
