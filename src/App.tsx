import React from 'react';
import AppRoutes from './components/app-routes/AppRoutes';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<AppRoutes />
		</div>
	);
};

export default App;
