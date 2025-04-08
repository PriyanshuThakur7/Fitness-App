// Login.jsx
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

			try {
				const data = JSON.parse(text); // Try parsing as JSON
				console.log('Parsed response:', data);
				localStorage.setItem('userId', data);
				navigate('/dashboard');
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
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Don't have an account?{' '}
						<Link to="/" className="font-medium text-blue-600 hover:text-blue-500">
							Create an account
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<input
								type="email"
								placeholder="Email Address"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<input
								type="password"
								placeholder="Password"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Log in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
