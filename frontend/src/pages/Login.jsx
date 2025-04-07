// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const response = await fetch(
				'http://localhost:8080/api/user/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				}
			);

			const text = await response.text(); // Read response as text
			console.log('Raw response:', text);
			console.log(typeof text);

			try {
				const data = JSON.parse(text); // Try parsing as JSON
				console.log('Parsed response:', data);
				navigate('/profile');
			} catch (jsonError) {
				console.error(
					'Response is not JSON, might be an error message:',
					text
				);
			}
		} catch (error) {
			console.error('Error during fetch:', error);
		}
	};

	return (
		<div>
			<input
				type="email"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
