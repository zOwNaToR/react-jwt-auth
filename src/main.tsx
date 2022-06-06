import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import WithAxios from './components/with-axios/WithAxios';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<WithAxios>
				<App />
			</WithAxios>
		</BrowserRouter>
	</React.StrictMode>,
);
