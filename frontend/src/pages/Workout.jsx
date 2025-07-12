'use client';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {
	Activity,
	AlertCircle,
	CheckCircle,
	ChevronDown,
	ChevronUp,
	Clock,
	Dumbbell,
	Flame,
	Play,
	Pause,
	RotateCcw,
	X,
	Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Workout() {
	const Navigate = useNavigate();
	const [workouts, setWorkouts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeWorkout, setActiveWorkout] = useState(null);
	const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
	const [workoutStarted, setWorkoutStarted] = useState(false);
	const [workoutCompleted, setWorkoutCompleted] = useState(false);
	const [expandedExercise, setExpandedExercise] = useState(null);
	const [timer, setTimer] = useState(0);
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const timerRef = useRef(null);
	const userId = localStorage.getItem('userId');

	// Fetch workouts from API
	useEffect(() => {
		if (userId) {
			setLoading(true);
			axios
				.get(`http://localhost:8080/api/user/workout/${userId}`)
				.then((response) => {
					setWorkouts(response.data);
					// Check if there's a workout for today
					const todayWorkout = response.data.find(
						(workout) => !workout.completed
					);
					if (todayWorkout) {
						setActiveWorkout(todayWorkout);
					}
					setLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching workouts:', error);
					setError(
						'Failed to load your workouts. Please try again later.'
					);
					setLoading(false);
				});
		} else {
			setError('User ID not found. Please log in again.');
			setLoading(false);
		}
	}, [userId]);

	// Timer functionality
	useEffect(() => {
		if (isTimerRunning) {
			timerRef.current = setInterval(() => {
				setTimer((prevTimer) => prevTimer + 1);
			}, 1000);
		} else if (timerRef.current) {
			clearInterval(timerRef.current);
		}

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [isTimerRunning]);

	// Format timer to MM:SS
	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	};

	// Start workout
	const handleStartWorkout = () => {
		if (activeWorkout) {
			setWorkoutStarted(true);
			setIsTimerRunning(true);
			setCurrentExerciseIndex(0);
			// Expand the first exercise automatically
			if (activeWorkout.exercises && activeWorkout.exercises.length > 0) {
				setExpandedExercise(activeWorkout.exercises[0].id);
			}
		}
	};

	// Toggle exercise details
	const toggleExerciseDetails = (exerciseId) => {
		if (expandedExercise === exerciseId) {
			setExpandedExercise(null);
		} else {
			setExpandedExercise(exerciseId);
		}
	};

	// Mark exercise as completed
	const markExerciseCompleted = (exerciseId) => {
		if (activeWorkout) {
			const updatedExercises = activeWorkout.exercises.map((exercise) => {
				if (exercise.id === exerciseId) {
					return { ...exercise, completed: !exercise.completed };
				}
				return exercise;
			});

			setActiveWorkout({
				...activeWorkout,
				exercises: updatedExercises,
			});

			// Check if all exercises are completed
			const allCompleted = updatedExercises.every(
				(exercise) => exercise.completed
			);
			if (allCompleted) {
				// Show completion modal or notification
				setWorkoutCompleted(true);
				setIsTimerRunning(false);
			}

			// Move to next exercise if current one is completed
			const currentExercise =
				activeWorkout.exercises[currentExerciseIndex];
			if (
				currentExercise &&
				currentExercise.id === exerciseId &&
				currentExerciseIndex < activeWorkout.exercises.length - 1
			) {
				setCurrentExerciseIndex(currentExerciseIndex + 1);
				setExpandedExercise(
					activeWorkout.exercises[currentExerciseIndex + 1].id
				);
			}
		}
	};

	// Finish workout
	const finishWorkout = async () => {
		try {
			// Update workout status on the server
			// await axios.put(
			// 	`http://localhost:8080/api/user/workout/${activeWorkout.id}/complete`,
			// 	{
			// 		userId,
			// 		duration: timer,
			// 	}
			// );

			// Update local state
			setWorkoutCompleted(true);
			setWorkoutStarted(false);
			setIsTimerRunning(false);

			// Show success notification
			const notification = document.getElementById(
				'workout-success-notification'
			);
			notification.classList.remove('translate-y-16');

			// Hide notification after 3 seconds
			setTimeout(() => {
				notification.classList.add('translate-y-16');
			}, 3000);
		} catch (error) {
			console.error('Error completing workout:', error);
			// Show error notification
			const notification = document.getElementById(
				'workout-error-notification'
			);
			notification.classList.remove('translate-y-16');

			// Hide notification after 3 seconds
			setTimeout(() => {
				notification.classList.add('translate-y-16');
			}, 3000);
		}
	};

	// Reset workout
	const resetWorkout = () => {
		if (activeWorkout) {
			const resetExercises = activeWorkout.exercises.map((exercise) => ({
				...exercise,
				completed: false,
			}));

			setActiveWorkout({
				...activeWorkout,
				exercises: resetExercises,
			});

			setWorkoutStarted(true);
			setIsTimerRunning(true);
			setCurrentExerciseIndex(0);
			setExpandedExercise(null);
			setTimer(0);
			setIsTimerRunning(false);
		}
	};

	// Pause/resume timer
	const toggleTimer = () => {
		setIsTimerRunning(!isTimerRunning);
	};

	// Calculate workout progress
	const calculateProgress = () => {
		if (
			!activeWorkout ||
			!activeWorkout.exercises ||
			activeWorkout.exercises.length === 0
		)
			return 0;
		const completedExercises = activeWorkout.exercises.filter(
			(exercise) => exercise.completed
		).length;
		return Math.round(
			(completedExercises / activeWorkout.exercises.length) * 100
		);
	};

	// Get estimated calories burned (simplified calculation)
	const getEstimatedCalories = () => {
		// Simple estimation: 5 calories per minute of workout
		return Math.round((timer / 60) * 5);
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-[#111827] text-[#F9FAFB] flex flex-col items-center justify-center p-6">
				<div className="relative h-16 w-16 mb-4">
					<div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316] opacity-75"></div>
					<div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316]">
						<Dumbbell
							className="h-8 w-8 text-white"
							strokeWidth={2}
						/>
					</div>
				</div>
				<p className="text-lg font-medium text-[#F9FAFB]">
					Loading your workout...
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-[#111827] text-[#F9FAFB] flex flex-col items-center justify-center p-6">
				<div className="max-w-md w-full bg-[#1F2937] rounded-xl border border-[#374151] shadow-lg p-6">
					<div className="flex items-center justify-center mb-4">
						<div className="p-3 rounded-full bg-[#EF4444]/20">
							<AlertCircle className="h-8 w-8 text-[#EF4444]" />
						</div>
					</div>
					<h2 className="text-center text-2xl font-bold mb-4 text-[#F9FAFB]">
						Error
					</h2>
					<p className="text-center text-[#D1D5DB] mb-6">{error}</p>
					<button
						onClick={() => window.location.reload()}
						className="w-full py-3 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
					>
						<RotateCcw className="h-5 w-5" />
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#111827] text-[#F9FAFB]">
			{/* Header */}
			<header className="sticky top-0 z-30 border-b border-[#374151] bg-[#111827]/80 backdrop-blur-sm">
				<div className="container mx-auto flex h-16 items-center justify-between px-4">
					<div className="flex items-center gap-2">
						<div className="relative h-8 w-8">
							<div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316]">
								<Activity
									className="h-5 w-5 text-white"
									strokeWidth={2.5}
								/>
							</div>
						</div>
						<span className="text-xl font-bold text-white">
							<button
								onClick={() => {
									Navigate('/');
								}}
							>
								TrackByte
							</button>
						</span>
					</div>

					{workoutStarted && !workoutCompleted && (
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 bg-[#1F2937] px-3 py-1.5 rounded-full">
								<Clock className="h-4 w-4 text-[#F97316]" />
								<span className="text-sm font-medium">
									{formatTime(timer)}
								</span>
							</div>
							<button
								onClick={toggleTimer}
								className={`p-2 rounded-full ${
									isTimerRunning
										? 'bg-[#EF4444]/20 text-[#EF4444]'
										: 'bg-[#22C55E]/20 text-[#22C55E]'
								}`}
							>
								{isTimerRunning ? (
									<Pause className="h-5 w-5" />
								) : (
									<Play className="h-5 w-5" />
								)}
							</button>
						</div>
					)}
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<div className="max-w-3xl mx-auto">
					{/* Workout Header */}
					<div className="mb-8">
						<h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">
							Today's Workout
						</h1>
						<p className="text-[#D1D5DB]">
							{activeWorkout
								? `Focus: ${
										activeWorkout.muscleGroup || 'Full Body'
								  }`
								: 'No workout scheduled for today. Take a rest or try a quick workout!'}
						</p>
					</div>

					{/* Workout Status Card */}
					{!workoutStarted && activeWorkout && !workoutCompleted && (
						<div className="mb-8 rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6 relative overflow-hidden">
							<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#EF4444]/20 blur-3xl"></div>
							<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F97316]/20 blur-3xl"></div>

							<div className="relative grid gap-8 md:grid-cols-2 items-center">
								<div>
									<h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">
										{activeWorkout.name || 'Workout Plan'}
									</h2>
									<p className="text-[#D1D5DB] mb-4">
										{activeWorkout.description ||
											"Your personalized workout plan is ready. Start when you're ready to begin."}
									</p>
									<div className="flex flex-wrap gap-2 mb-6">
										<div className="flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
											<Dumbbell className="h-3.5 w-3.5 text-[#F97316]" />
											<span>
												{activeWorkout.exercises
													?.length || 0}{' '}
												Exercises
											</span>
										</div>
										<div className="flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
											<Clock className="h-3.5 w-3.5 text-[#F97316]" />
											<span>
												{activeWorkout.estimatedDuration ||
													'30-45'}{' '}
												mins
											</span>
										</div>
										<div className="flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
											<Flame className="h-3.5 w-3.5 text-[#F97316]" />
											<span>
												{activeWorkout.estimatedCalories ||
													'150-200'}{' '}
												cal
											</span>
										</div>
									</div>
									<button
										onClick={handleStartWorkout}
										className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white rounded-lg hover:opacity-90 transition-opacity"
									>
										<Play className="h-5 w-5" />
										Start Workout
									</button>
								</div>

								<div className="relative">
									<div className="aspect-square max-w-[240px] mx-auto relative">
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="h-full w-full rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316] opacity-20 blur-2xl animate-pulse"></div>
											<div className="absolute h-4/5 w-4/5 rounded-full border-4 border-[#F97316]/30 animate-spin-slow"></div>
											<div className="absolute h-3/5 w-3/5 rounded-full border-4 border-[#EF4444]/30 animate-spin-slow-reverse"></div>
											<div className="absolute h-2/5 w-2/5 rounded-full bg-[#111827] flex items-center justify-center">
												<Dumbbell
													className="h-12 w-12 text-[#F97316]"
													strokeWidth={1.5}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Workout Completed Card */}
					{workoutCompleted && (
						<div className="mb-8 rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-6 relative overflow-hidden">
							<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#22C55E]/20 blur-3xl"></div>
							<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#22C55E]/20 blur-3xl"></div>

							<div className="relative flex flex-col items-center text-center">
								<div className="mb-4 p-4 rounded-full bg-[#22C55E]/20">
									<CheckCircle className="h-12 w-12 text-[#22C55E]" />
								</div>
								<h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">
									Workout Completed!
								</h2>
								<p className="text-[#D1D5DB] mb-6 max-w-md">
									Great job! You've completed today's workout.
									Take some time to rest and recover.
								</p>

								<div className="grid grid-cols-3 gap-4 w-full max-w-md mb-6">
									<div className="rounded-lg bg-[#111827] p-4 text-center">
										<p className="text-xs text-[#D1D5DB] mb-1">
											Duration
										</p>
										<p className="text-xl font-bold text-[#F9FAFB]">
											{formatTime(timer)}
										</p>
									</div>
									<div className="rounded-lg bg-[#111827] p-4 text-center">
										<p className="text-xs text-[#D1D5DB] mb-1">
											Exercises
										</p>
										<p className="text-xl font-bold text-[#F9FAFB]">
											{activeWorkout?.exercises?.length ||
												0}
										</p>
									</div>
									<div className="rounded-lg bg-[#111827] p-4 text-center">
										<p className="text-xs text-[#D1D5DB] mb-1">
											Calories
										</p>
										<p className="text-xl font-bold text-[#F9FAFB]">
											{getEstimatedCalories()}
										</p>
									</div>
								</div>

								<button
									onClick={() => window.location.reload()}
									className="flex items-center gap-2 px-6 py-3 bg-[#1F2937] border border-[#374151] text-[#F9FAFB] rounded-lg hover:bg-[#374151] transition-colors"
								>
									<RotateCcw className="h-5 w-5" />
									Start Another Workout
								</button>
							</div>
						</div>
					)}

					{/* Active Workout */}
					{workoutStarted && activeWorkout && !workoutCompleted && (
						<div className="mb-8">
							{/* Progress Bar */}
							<div className="mb-6">
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm text-[#D1D5DB]">
										Progress
									</span>
									<span className="text-sm font-medium text-[#F9FAFB]">
										{calculateProgress()}%
									</span>
								</div>
								<div className="h-2 w-full bg-[#1F2937] rounded-full overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-[#EF4444] to-[#F97316] rounded-full transition-all duration-500 ease-out"
										style={{
											width: `${calculateProgress()}%`,
										}}
									></div>
								</div>
							</div>

							{/* Workout Stats */}
							<div className="grid grid-cols-3 gap-4 mb-6">
								<div className="rounded-lg bg-[#1F2937] p-4">
									<div className="flex items-center gap-2 mb-1">
										<Clock className="h-4 w-4 text-[#F97316]" />
										<p className="text-xs text-[#D1D5DB]">
											Duration
										</p>
									</div>
									<p className="text-lg font-bold text-[#F9FAFB]">
										{formatTime(timer)}
									</p>
								</div>
								<div className="rounded-lg bg-[#1F2937] p-4">
									<div className="flex items-center gap-2 mb-1">
										<Zap className="h-4 w-4 text-[#F97316]" />
										<p className="text-xs text-[#D1D5DB]">
											Completed
										</p>
									</div>
									<p className="text-lg font-bold text-[#F9FAFB]">
										{activeWorkout.exercises?.filter(
											(ex) => ex.completed
										).length || 0}
										/{activeWorkout.exercises?.length || 0}
									</p>
								</div>
								<div className="rounded-lg bg-[#1F2937] p-4">
									<div className="flex items-center gap-2 mb-1">
										<Flame className="h-4 w-4 text-[#F97316]" />
										<p className="text-xs text-[#D1D5DB]">
											Calories
										</p>
									</div>
									<p className="text-lg font-bold text-[#F9FAFB]">
										{getEstimatedCalories()}
									</p>
								</div>
							</div>

							{/* Exercise List */}
							<div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 overflow-hidden">
								<div className="p-4 border-b border-[#374151] bg-[#1F2937]">
									<h3 className="font-medium text-[#F9FAFB]">
										Exercises
									</h3>
								</div>
								<ul className="divide-y divide-[#374151]">
									{activeWorkout.exercises?.map(
										(exercise, index) => (
											<li
												key={exercise.id}
												className="relative"
											>
												{/* Highlight current exercise */}
												{index ===
													currentExerciseIndex && (
													<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#EF4444] to-[#F97316]"></div>
												)}
												<div
													className={`p-4 ${
														index ===
														currentExerciseIndex
															? 'bg-[#374151]/30'
															: ''
													} hover:bg-[#374151]/20 transition-colors`}
												>
													<div className="flex items-center justify-between">
														<div className="flex items-center gap-3">
															<div
																className={`flex h-8 w-8 items-center justify-center rounded-full ${
																	exercise.completed
																		? 'bg-[#22C55E]/20 text-[#22C55E]'
																		: 'bg-[#1F2937] text-[#D1D5DB]'
																}`}
															>
																{exercise.completed ? (
																	<CheckCircle className="h-5 w-5" />
																) : (
																	<span className="text-sm font-medium">
																		{index +
																			1}
																	</span>
																)}
															</div>
															<div>
																<h4 className="font-medium text-[#F9FAFB]">
																	{
																		exercise.name
																	}
																</h4>
																<p className="text-xs text-[#D1D5DB]">
																	{
																		exercise.sets
																	}{' '}
																	sets •{' '}
																	{
																		exercise.reps
																	}{' '}
																	reps
																</p>
															</div>
														</div>
														<div className="flex items-center gap-2">
															<button
																onClick={() =>
																	markExerciseCompleted(
																		exercise.id
																	)
																}
																className={`p-1.5 rounded-md ${
																	exercise.completed
																		? 'bg-[#22C55E]/20 text-[#22C55E]'
																		: 'bg-[#374151] text-[#D1D5DB] hover:text-[#F9FAFB]'
																}`}
															>
																{exercise.completed ? (
																	<CheckCircle className="h-5 w-5" />
																) : (
																	<CheckCircle className="h-5 w-5" />
																)}
															</button>
															<button
																onClick={() =>
																	toggleExerciseDetails(
																		exercise.id
																	)
																}
																className="p-1.5 rounded-md bg-[#374151] text-[#D1D5DB] hover:text-[#F9FAFB]"
															>
																{expandedExercise ===
																exercise.id ? (
																	<ChevronUp className="h-5 w-5" />
																) : (
																	<ChevronDown className="h-5 w-5" />
																)}
															</button>
														</div>
													</div>

													{/* Exercise Details */}
													{expandedExercise ===
														exercise.id && (
														<div className="mt-4 pl-11">
															<div className="rounded-lg bg-[#111827] p-4">
																{exercise.description && (
																	<p className="text-sm text-[#D1D5DB] mb-4">
																		{
																			exercise.description
																		}
																	</p>
																)}
																<div className="grid grid-cols-3 gap-3 mb-4">
																	<div className="rounded bg-[#1F2937] p-2 text-center">
																		<p className="text-xs text-[#D1D5DB] mb-1">
																			Sets
																		</p>
																		<p className="font-medium text-[#F9FAFB]">
																			{
																				exercise.sets
																			}
																		</p>
																	</div>
																	<div className="rounded bg-[#1F2937] p-2 text-center">
																		<p className="text-xs text-[#D1D5DB] mb-1">
																			Reps
																		</p>
																		<p className="font-medium text-[#F9FAFB]">
																			{
																				exercise.reps
																			}
																		</p>
																	</div>
																	<div className="rounded bg-[#1F2937] p-2 text-center">
																		<p className="text-xs text-[#D1D5DB] mb-1">
																			Rest
																		</p>
																		<p className="font-medium text-[#F9FAFB]">
																			{exercise.rest ||
																				'60s'}
																		</p>
																	</div>
																</div>
																{exercise.instructions && (
																	<div>
																		<p className="text-xs font-medium text-[#F9FAFB] mb-2">
																			Instructions:
																		</p>
																		<ul className="text-xs text-[#D1D5DB] list-disc pl-4 space-y-1">
																			{exercise.instructions
																				.split(
																					'. '
																				)
																				.map(
																					(
																						instruction,
																						i
																					) => (
																						<li
																							key={
																								i
																							}
																						>
																							{
																								instruction
																							}
																						</li>
																					)
																				)}
																		</ul>
																	</div>
																)}
															</div>
														</div>
													)}
												</div>
											</li>
										)
									)}
								</ul>
							</div>

							{/* Action Buttons */}
							<div className="mt-6 flex gap-4">
								<button
									onClick={() => window.location.reload()}
									className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1F2937] border border-[#374151] text-[#F9FAFB] rounded-lg hover:bg-[#374151] transition-colors"
								>
									<X className="h-5 w-5" />
									Cancel
								</button>
								<button
									onClick={finishWorkout}
									className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white rounded-lg hover:opacity-90 transition-opacity"
								>
									<CheckCircle className="h-5 w-5" />
									Finish Workout
								</button>
							</div>
						</div>
					)}

					{/* No Workout Available */}
					{!activeWorkout && !loading && (
						<div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6 text-center">
							<div className="flex justify-center mb-4">
								<div className="p-4 rounded-full bg-[#374151]/50">
									<Dumbbell className="h-10 w-10 text-[#D1D5DB]" />
								</div>
							</div>
							<h2 className="text-xl font-bold text-[#F9FAFB] mb-2">
								No Workout Scheduled
							</h2>
							<p className="text-[#D1D5DB] mb-6 max-w-md mx-auto">
								You don't have any workouts scheduled for today.
								Take a rest day or try a quick workout!
							</p>
							<button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white rounded-lg hover:opacity-90 transition-opacity">
								<Zap className="h-5 w-5" />
								Try a Quick Workout
							</button>
						</div>
					)}
				</div>
			</main>

			{/* Success notification */}
			<div
				id="workout-success-notification"
				className="fixed bottom-4 left-1/2 -translate-x-1/2 translate-y-16 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg transition-transform duration-300"
			>
				<CheckCircle className="h-5 w-5" />
				<span>Workout completed successfully!</span>
			</div>

			{/* Error notification */}
			<div
				id="workout-error-notification"
				className="fixed bottom-4 left-1/2 -translate-x-1/2 translate-y-16 flex items-center gap-2 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg transition-transform duration-300"
			>
				<AlertCircle className="h-5 w-5" />
				<span>Failed to save workout. Please try again.</span>
			</div>
		</div>
	);
}

export default Workout;
