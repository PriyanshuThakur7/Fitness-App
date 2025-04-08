import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

function Workout() {
	const [workouts, setWorkouts] = useState([]);
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		if (userId) {
			axios
				.get(`http://localhost:8080/api/user/workout/${userId}`)
				.then((response) => setWorkouts(response.data))
				.catch((error) => console.error('Error fetching workouts:', error));
		} else {
			console.error('User ID not found in localStorage');
		}
	}, [userId]);

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
			<div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
				<h2 className="text-center text-2xl font-bold mb-4">Workout</h2>
				<p className="text-center text-lg mb-6"></p>
				<ul className="space-y-4">
					{workouts.length > 0 ? (
						workouts.map((workout) => (
							<li key={workout.id} className="flex justify-between items-center">
								<div>
									<h3 className="text-xl font-semibold">{workout.name}</h3>
									<p className="text-sm text-gray-500">{workout.muscleGroup}</p>
								</div>
								<input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
							</li>
						))
					) : (
						<li className="text-center text-gray-500">No workouts available. Please check back later.</li>
					)}
				</ul>
				<button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
					Start Workout
				</button>
			</div>
		</div>
	);
}

export default Workout;
