import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const [profile, setProfile] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const userId = localStorage.getItem('userId');
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/user/${userId}`)
			.then((response) => setProfile(response.data))
			.catch((error) => console.error(error));
	}, [userId]);

	const handleEditProfile = () => {
		setIsEditing(true);
	};

	const handleSaveProfile = () => {
		axios
			.put(`http://localhost:8080/api/user/${userId}`, profile)
			.then((response) => {
				setProfile(response.data);
				setIsEditing(false);
				alert('Profile updated successfully!');
			})
			.catch((error) => console.error('Error updating profile:', error));
	};

	if (!profile)
		return (
			<div className="min-h-screen flex items-center justify-center">
				Loading...
			</div>
		);

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
			<div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
				<h2 className="text-center text-2xl font-bold mb-4">
					{profile.username}
				</h2>
				{isEditing ? (
					<button
						onClick={handleSaveProfile}
						className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mb-6"
					>
						Save Profile
					</button>
				) : (
					<button
						onClick={handleEditProfile}
						className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-6"
					>
						Edit Profile
					</button>
				)}
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="font-semibold">Name</span>
						{isEditing ? (
							<input
								type="text"
								value={profile.username}
								onChange={(e) =>
									setProfile({
										...profile,
										username: e.target.value,
									})
								}
								className="border border-gray-300 rounded-md p-1"
							/>
						) : (
							<span>{profile.username}</span>
						)}
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Email Address</span>
						{isEditing ? (
							<input
								type="email"
								value={profile.email}
								onChange={(e) =>
									setProfile({
										...profile,
										email: e.target.value,
									})
								}
								className="border border-gray-300 rounded-md p-1"
							/>
						) : (
							<span>{profile.email}</span>
						)}
					</div>
					<div className="flex justify-between items-center">
						<span className="font-semibold">Fitness Goal</span>
						{isEditing ? (
							<input
								type="text"
								value={profile.fitnessGoal}
								onChange={(e) =>
									setProfile({
										...profile,
										fitnessGoal: e.target.value,
									})
								}
								className="border border-gray-300 rounded-md p-1"
							/>
						) : (
							<span>{profile.fitnessGoal}</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
