import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { Activity, ChevronRight, Dumbbell, User, LogOut } from "lucide-react";

function Dashboard() {
    const [profile, setProfile] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }

        // Fetch user profile
        axios
            .get(`http://localhost:8080/api/user/${userId}`)
            .then((response) => setProfile(response.data))
            .catch((error) => console.error("Error fetching profile:", error));

        // Fetch workouts
        axios
            .get(`http://localhost:8080/api/user/workout/${userId}`)
            .then((response) => setWorkouts(response.data))
            .catch((error) => console.error("Error fetching workouts:", error));
    }, [userId, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        navigate("/login");
    };

    if (!profile) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div>Please Login first</div>
                <div>
                    <button
                        onClick={() => navigate("/login")}
                        className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    // Sample workout data (replace with actual data when available)
    const todaysWorkout = [
        { id: 1, name: "Squat", sets: 3, reps: 10 },
        { id: 2, name: "Bench Press", sets: 3, reps: 8 },
        { id: 3, name: "Barbell Row", sets: 3, reps: 10 },
        { id: 4, name: "Pull-Up", sets: 3, reps: 8 },
        { id: 5, name: "Overhead Press", sets: 3, reps: 8 },
    ];

    const generateWorkoutPlan = () => {
        if (userId) {
            axios
                .post(
                    `http://localhost:8080/api/user/workout/generate/${userId}`
                )
                .then(() => {
                    alert("Workout Plan Generated Successfully");
                    // Optionally, fetch the updated workout plan
                    axios
                        .get(`http://localhost:8080/api/user/workout/${userId}`)
                        .then((response) => setWorkouts(response.data))
                        .catch((error) =>
                            console.error("Error fetching workouts:", error)
                        );
                })
                .catch((error) =>
                    console.error("Error generating workout plan:", error)
                );
        } else {
            console.error("User ID not found in localStorage");
        }
    };

    return (
        <div className="min-h-screen bg-dark p-6">
            <header className="sticky top-0 z-50 w-full border-b border-text-dark-sec bg-dark/80 backdrop-blur-sm">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8 ">
                            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                                <Activity
                                    className="h-5 w-5 text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </div>
                        <span
                            className="text-xl font-bold text-white cursor-pointer"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            TrackByte
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <a
                            href="/dashboard"
                            className="text-text-light hover:text-accent transition-colors"
                        >
                            Dashboard
                        </a>
                        <a
                            href="/workout"
                            className="text-text-light-sec hover:text-accent transition-colors"
                        >
                            Workouts
                        </a>
                        <a
                            href="/Progress"
                            className="text-text-light-sec hover:text-accent transition-colors"
                        >
                            Progress
                        </a>
                        <a
                            href="/Pricing"
                            className="text-text-light-sec hover:text-accent transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="/contactUs"
                            className="text-text-light-sec hover:text-accent transition-colors"
                        >
                            ContactUs
                        </a>
                    </nav>

                    <div className="flex gap-6">
                        <button
                            onClick={() => {
                                navigate("/profile");
                            }}
                            className="hidden md:flex bg-primary hover:bg-accent text-white transition-all h-10 px-4 py-2 rounded-md cursor-pointer"
                        >
                            {profile.username}
                            <User className="ml-1.5 h-5.2 w-5" />
                        </button>
                        <button
                            onClick={handleLogout}
                            className="hidden md:flex bg-primary hover:bg-accent text-white transition-all h-10 px-4 py-2 rounded-md cursor-pointer"
                        >
                            Logout
                            <LogOut className="ml-1.5 h-5.2 w-5" />
                        </button>
                    </div>
                </div>
            </header>
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative max-w-6xl mx-auto z-20 mt-6">
                <div className="grid grid-cols-1 gap-6">
                    {/* User Profile Card */}
                    <div className="bg-second-dark/50 border border-text-dark-sec hover:border-accent text-light rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Welcome,{" "}
                            <span className="bg-gradient-to-bl from-primary to-accent text-transparent bg-clip-text">
                                {profile.username}!
                            </span>
                        </h2>
                        <div className="space-y-2">
                            <div className="flex">
                                <span className="font-semibold w-32">
                                    Fitness Goal
                                </span>
                                <span>
                                    {profile.fitnessGoal === "BULK"
                                        ? "Gaining Muscle"
                                        : "Losing Fat"}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold w-32">Age</span>
                                <span>{profile.age}</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold w-32">
                                    Weight
                                </span>
                                <span>{profile.weight}</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold w-32">
                                    Gender
                                </span>
                                <span>{profile.gender}</span>
                            </div>
                            <div className="flex">
                                <span className="font-semibold w-32">
                                    Fitness Level
                                </span>
                                <span>{profile.fitnessLevel}</span>
                            </div>
                        </div>
                    </div>

                    {/* Workout Summary Card */}
                    <div className="bg-second-dark/50 border border-text-dark-sec hover:border-accent text-light rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Workout Summary
                        </h2>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">
                                Workout Plan
                            </h3>
                            <p>{workouts.length} exercises</p>
                        </div>
                        <button
                            onClick={generateWorkoutPlan}
                            className="flex mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors"
                        >
                            Generate Workout Plan
                            <Dumbbell className="ml-2 h-5.2 w-5" />
                        </button>
                    </div>

                    {/* Today's Workout Card */}
                    <div className="bg-second-dark/50 border border-text-dark-sec hover:border-accent text-light rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Today's Workout
                        </h2>
                        <ul className="space-y-2">
                            {workouts.map((exercise) => (
                                <li key={exercise.id} className="text-lg">
                                    {exercise.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Progressive Overload Card */}
                    <div className="bg-second-dark/50 border border-text-dark-sec hover:border-accent text-light rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Progressive Overload
                        </h2>
                        <p className="text-lg">Increase reps by 5</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
