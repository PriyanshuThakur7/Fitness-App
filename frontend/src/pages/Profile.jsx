import { useEffect, useState } from 'react';
import React from'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const [profile, setProfile] = useState(null);
	const userId = localStorage.getItem('userId');
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/user/${userId}`)
			.then((response) => setProfile(response.data))
			.catch((error) => console.error(error));
	}, [userId]);

	if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
			<div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
				{/* <div className="flex justify-center mb-6">
					<img
						src={"../../assets/reg1.png"}  // Replace with actual image path
						alt="Profile"
						className="w-24 h-24 rounded-full border-2 border-gray-300"
					/>
				</div> */}
				<h2 className="text-center text-2xl font-bold mb-4">{profile.username}</h2>
				<button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-6">
					Edit Profile
				</button>
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="font-semibold">Name</span>
						<span>{profile.username}</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Email Address</span>
						<span>{profile.email}</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Fitness Goal</span>
						<span>{profile.fitnessGoal}</span>
					</div>
				</div>
				<div className="mt-6">
					<button 
						onClick={() => navigate('/settings')}
						className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
					>
						Settings
					</button>
				</div>
			</div>
		</div>
	);
}

export default Profile;
