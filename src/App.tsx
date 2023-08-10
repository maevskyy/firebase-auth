import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NonExisting from './pages/NonExisting';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				Component={HomePage}
			/>
			<Route
				path='/login'
				Component={LoginPage}
			/>
			<Route
				path='/register'
				Component={RegisterPage}
			/>
			<Route
				path='*'
				Component={NonExisting}
			/>
		</Routes>
	);
};

export default App;
