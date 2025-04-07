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
