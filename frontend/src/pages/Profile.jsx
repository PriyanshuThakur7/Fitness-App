import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
	const [profile, setProfile] = useState(null);
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		axios
			.get('http://localhost:8080/${userId}') // Replace with user ID from auth
			.then((response) => setProfile(response.data))
			.catch((error) => console.error(error));
	}, []);

	if (!profile) return <p>Loading...</p>;

	return (
		<div>
			<h2>Profile</h2>
			<p>Username: {profile.username}</p>
			<p>Email: {profile.email}</p>
			<p>Fitness Goal: {profile.fitnessGoal}</p>
		</div>
	);
}

export default Profile;
