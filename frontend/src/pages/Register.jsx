import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';

function Register() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		fitnessGoal: '',
		prefersHomeWorkout: false,
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:8080/api/user/register',
				formData
			);
			alert('Registered successfully!');
			navigate('/login');
		} catch (error) {
			alert('Registration failed: ' + error.response.data.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Create your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Already have an account?{' '}
						<Link
							to="/login"
							className="font-medium text-blue-600 hover:text-blue-500"
						>
							Log in
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<input
								type="text"
								name="username"
								placeholder="Username"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								placeholder="Password"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={handleChange}
							/>
						</div>
						<div>
							<select
								name="fitnessGoal"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								onChange={handleChange}
							>
								<option value="">Select Fitness Goal</option>
								<option value="BULK">Bulk</option>
								<option value="CUT">Cut</option>
							</select>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								name="prefersHomeWorkout"
								className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								onChange={handleChange}
							/>
							<label className="ml-2 block text-sm text-gray-900">
								Prefer Home Workout
							</label>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
