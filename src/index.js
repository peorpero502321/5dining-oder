import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router basename={process.env.PUBLIC_URL}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>
);
