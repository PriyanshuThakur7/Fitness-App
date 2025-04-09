import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from'react';
import axios from 'axios';

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    // Fetch user profile
    axios
      .get(`http://localhost:8080/api/user/${userId}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error('Error fetching profile:', error));

    // Fetch workouts
    axios
      .get(`http://localhost:8080/api/user/workout/${userId}`)
      .then((response) => setWorkouts(response.data))
      .catch((error) => console.error('Error fetching workouts:', error));
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  if (!profile) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Sample workout data (replace with actual data when available)
  const todaysWorkout = [
    { id: 1, name: 'Squat', sets: 3, reps: 10 },
    { id: 2, name: 'Bench Press', sets: 3, reps: 8 },
    { id: 3, name: 'Barbell Row', sets: 3, reps: 10 },
    { id: 4, name: 'Pull-Up', sets: 3, reps: 8 },
    { id: 5, name: 'Overhead Press', sets: 3, reps: 8 }
  ];

  const generateWorkoutPlan = () => {
    if (userId) {
      axios
        .post(`http://localhost:8080/api/user/workout/generate/${userId}`)
        .then(() => {
          alert('Workout Plan Generated Successfully');
          // Optionally, fetch the updated workout plan
          axios
            .get(`http://localhost:8080/api/user/workout/${userId}`)
            .then((response) => setWorkouts(response.data))
            .catch((error) => console.error('Error fetching workouts:', error));
        })
        .catch((error) => console.error('Error generating workout plan:', error));
    } else {
      console.error('User ID not found in localStorage');
    }
  };

  return (
    <div className="min-h-screen bg-[url('C:\\Users\\ujjwa\\OneDrive\\Desktop\\Fitness_App\\Fitness-App\\frontend\\src\\assets\\reg1.png')] bg-cover bg-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-50">Personalized Fitness Planner and Progress Tracker</h1>
          <button 
            onClick={handleLogout}
            className="px-6 py-2 border border-gray-300 rounded-md hover:text-gray-700 bg-gray-50 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome, {profile.username}!</h2>
            <div className="space-y-2">
              <div className="flex">
                <span className="font-semibold w-32">Username</span>
                <span>{profile.username}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Email</span>
                <span>{profile.email}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Fitness Goal</span>
                <span>{profile.fitnessGoal}</span>
              </div>
            </div>
          </div>

          {/* Workout Summary Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Workout Summary</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Workout Plan</h3>
              <p>{workouts.length} exercises</p>
            </div>
            <button 
              onClick={generateWorkoutPlan}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Generate Workout Plan
            </button>
          </div>

          {/* Today's Workout Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Today's Workout</h2>
            <ul className="space-y-2">
              {workouts.map((exercise) => (
                <li key={exercise.id} className="text-lg">{exercise.name}</li>
              ))}
            </ul>
          </div>

          {/* Progressive Overload Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Progressive Overload</h2>
            <p className="text-lg">Increase weight for {workouts[2].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;