import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Workout from './pages/Workout';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/workout" element={<Workout />} />
		</Routes>
	);
}

export default App;
