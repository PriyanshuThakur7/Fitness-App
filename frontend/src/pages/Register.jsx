import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

	const handleSubmit = async () => {
		const response = await fetch('http://localhost:8080/api/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email, // Make sure these are correctly set
				password: password,
			}),
		});

		const text = await response.text(); // Read response as text first
		console.log('Raw response:', text);

		try {
			const data = JSON.parse(text); // Convert to JSON if possible
			console.log('Parsed response:', data);
		} catch (error) {
			console.error(
				'Response is not JSON, might be an error message:',
				text
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="username"
				placeholder="Username"
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				onChange={handleChange}
				required
			/>
			<select name="fitnessGoal" onChange={handleChange} required>
				<option value="">Select Goal</option>
				<option value="BULK">Bulk</option>
				<option value="CUT">Cut</option>
			</select>
			<label>
				<input
					type="checkbox"
					name="prefersHomeWorkout"
					onChange={handleChange}
				/>
				Prefer Home Workout
			</label>
			<button type="submit">Register</button>
		</form>
	);
}

export default Register;
