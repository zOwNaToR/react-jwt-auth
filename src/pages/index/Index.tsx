import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const Index: React.FC = () => {
	const user = useAppSelector((state) => state.user);

	return (
		<>
			<div>Hi {user.username ?? 'anonymous'}</div>
		</>
	);
};

export default Index;
