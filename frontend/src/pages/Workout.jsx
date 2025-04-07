import { useEffect, useState } from 'react';
import axios from 'axios';

function Workout() {
	const [workouts, setWorkouts] = useState([]);
	const userId = localStorage.getItem('userId');

	useEffect(() => {
		axios
			.get('http://localhost:8080/workout/${userId}') // Replace with dynamic user ID
			.then((response) => setWorkouts(response.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h2>Workout Plan</h2>
			{workouts.map((workout) => (
				<div key={workout.id}>
					<h3>{workout.name}</h3>
					<p>Muscle Group: {workout.muscleGroup}</p>
					<p>Category: {workout.category}</p>
				</div>
			))}
		</div>
	);
}

export default Workout;
