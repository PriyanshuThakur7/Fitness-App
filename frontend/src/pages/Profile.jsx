'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Activity,
	ArrowLeft,
	AtSign,
	Calendar,
	Check,
	ChevronDown,
	Edit2,
	Eye,
	EyeOff,
	Home,
	Info,
	Lock,
	Menu,
	Save,
	User,
	UserCheck,
	Weight,
	X,
	TriangleAlert,
	TrendingDown,
	TrendingUp,
	Target,
} from 'lucide-react';

function Profile() {
	const [profile, setProfile] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);
	const [hasProfile, sethasProfile] = useState(true);
	const userId = localStorage.getItem('userId');
	const navigate = useNavigate();

	// Form validation
	const [errors, setErrors] = useState({});

	useEffect(() => {
		// Simulate API call with timeout
		setTimeout(() => {
			// Mock data for demonstration
			setIsLoading(false);
		}, 1000);

		// Uncomment for real API call
		axios
			.get(`http://localhost:8080/api/user/${userId}`)
			.then((response) => {
				setProfile(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				sethasProfile(false);
			});
	}, [userId]);

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setProfile({
			...profile,
			[name]: type === 'checkbox' ? checked : value,
		});

		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: null,
			});
		}
	};

	const handleEditProfile = () => {
		setIsEditing(true);
	};

	const validateForm = () => {
		const newErrors = {};

		if (!profile.username.trim())
			newErrors.username = 'Username is required';
		if (!profile.email.trim()) newErrors.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(profile.email))
			newErrors.email = 'Email is invalid';

		if (isEditing && profile.password && profile.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}

		// if (!profile.weight.trim()) newErrors.weight = 'Weight is required';
		else if (isNaN(profile.weight) || Number(profile.weight) <= 0) {
			newErrors.weight = 'Weight must be a positive number';
		}

		// if (!profile.age.trim()) newErrors.age = 'Age is required';
		else if (isNaN(profile.age) || Number(profile.age) <= 0) {
			newErrors.age = 'Age must be a positive number';
		}

		if (!profile.gender) newErrors.gender = 'Gender is required';
		if (!profile.fitnessGoal)
			newErrors.fitnessGoal = 'Fitness goal is required';
		if (!profile.fitnessLevel)
			newErrors.fitnessLevel = 'Fitness level is required';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSaveProfile = () => {
		if (!validateForm()) return;

		setIsSaving(true);

		axios
			.put(`http://localhost:8080/api/user/${userId}`, profile)
			.then((response) => {
				setProfile(response.data);
				setIsEditing(false);
				setIsSaving(false);

				// Show success notification
				const notification = document.getElementById('notification');
				if (notification) {
					notification.classList.remove('translate-y-16');

					// Hide notification after 3 seconds
					setTimeout(() => {
						notification.classList.add('translate-y-16');
					}, 3000);
				}
			})
			.catch((error) => {
				console.error('Error updating profile:', error);
				setIsSaving(false);
			});
	};

	const handleCancelEdit = () => {
		// Revert changes by re-fetching the profile
		setIsEditing(false);
		setErrors({});

		// For demo, we'll just use the existing profile
		// In a real app, you might want to re-fetch from the API
	};

	const goBack = () => {
		navigate('/dashboard');
	};

	if (!hasProfile) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-[#111827] text-[#F9FAFB]">
				Please Login To view profile
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="flex min-h-screen flex-col items-center justify-center bg-[#111827] text-[#F9FAFB]">
				<div className="relative h-16 w-16">
					<div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316] opacity-75"></div>
					<div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316]">
						<Activity
							className="h-8 w-8 text-white"
							strokeWidth={2}
						/>
					</div>
				</div>
				<p className="mt-4 text-lg font-medium text-[#F9FAFB]">
					Loading your profile...
				</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#111827] text-[#F9FAFB]">
			{/* Header */}
			<header className="sticky top-0 z-30 border-b border-[#374151] bg-[#111827]/80 backdrop-blur-sm">
				<div className="container mx-auto flex h-16 items-center justify-between px-4">
					<div className="flex items-center gap-4">
						<button
							onClick={goBack}
							className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2937] text-[#D1D5DB] transition-colors hover:bg-[#374151] hover:text-[#F9FAFB]"
						>
							<ArrowLeft className="h-5 w-5" />
						</button>
						<h1 className="text-xl font-bold text-[#F9FAFB]">
							My Profile
						</h1>
					</div>

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
							TrackByte
						</span>
					</div>

					<button className="md:hidden text-[#F9FAFB] h-10 w-10 flex items-center justify-center">
						<Menu className="h-6 w-6" />
					</button>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				<div className="mx-auto max-w-3xl">
					{/* Profile Header */}
					<div className="mb-8 flex flex-col items-center justify-center rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6 text-center md:flex-row md:text-left">
						<div className="flex-1">
							<h2 className="text-2xl font-bold text-[#F9FAFB]">
								{profile.username}
							</h2>
							<p className="text-[#D1D5DB]">{profile.email}</p>
							<div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
								<div className="inline-flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
									<UserCheck className="h-3 w-3 text-[#22C55E]" />
									<span>{profile.fitnessLevel}</span>
								</div>
								<div className="inline-flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
									<Weight className="h-3 w-3 text-[#F97316]" />
									<span>Goal: {profile.fitnessGoal}</span>
								</div>
								{profile.prefersHomeWorkout && (
									<div className="inline-flex items-center gap-1 rounded-full bg-[#374151]/80 px-3 py-1 text-xs font-medium text-[#F9FAFB]">
										<Home className="h-3 w-3 text-[#F59E0B]" />
										<span>Home Workouts</span>
									</div>
								)}
							</div>
						</div>
						{!isEditing ? (
							<button
								onClick={handleEditProfile}
								className="mt-4 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 md:mt-0"
							>
								<Edit2 className="h-4 w-4" />
								Edit Profile
							</button>
						) : (
							<div className="mt-4 flex gap-2 md:mt-0">
								<button
									onClick={handleCancelEdit}
									className="flex items-center gap-2 rounded-lg border border-[#374151] bg-transparent px-4 py-2 text-sm font-medium text-[#F9FAFB] transition-colors hover:bg-[#374151]"
								>
									<X className="h-4 w-4" />
									Cancel
								</button>
								<button
									onClick={handleSaveProfile}
									disabled={isSaving}
									className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 disabled:opacity-70"
								>
									{isSaving ? (
										<>
											<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
											Saving...
										</>
									) : (
										<>
											<Save className="h-4 w-4" />
											Save
										</>
									)}
								</button>
							</div>
						)}
					</div>

					{/* Profile Form */}
					<div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6">
						<h3 className="mb-6 text-xl font-bold text-[#F9FAFB]">
							Personal Information
						</h3>

						<div className="grid gap-6 md:grid-cols-2">
							{/* Username */}
							<div className="space-y-2">
								<label
									htmlFor="username"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<User className="h-4 w-4 text-[#F97316]" />
									Username
								</label>
								{isEditing ? (
									<div className="relative">
										<input
											type="text"
											id="username"
											name="username"
											value={profile.username}
											onChange={handleInputChange}
											className={`w-full rounded-lg border ${
												errors.username
													? 'border-[#EF4444]'
													: 'border-[#374151]'
											} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
										/>
										{errors.username && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.username}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.username}
									</div>
								)}
							</div>

							{/* Email */}
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<AtSign className="h-4 w-4 text-[#F97316]" />
									Email Address
								</label>
								{isEditing ? (
									<div className="relative">
										<input
											type="email"
											id="email"
											name="email"
											value={profile.email}
											onChange={handleInputChange}
											className={`w-full rounded-lg border ${
												errors.email
													? 'border-[#EF4444]'
													: 'border-[#374151]'
											} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
										/>
										{errors.email && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.email}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.email}
									</div>
								)}
							</div>

							{/* Password */}
							<div className="space-y-2">
								<label
									htmlFor="password"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<Lock className="h-4 w-4 text-[#F97316]" />
									Password
								</label>
								{isEditing ? (
									<div className="relative">
										<input
											type={
												showPassword
													? 'text'
													: 'password'
											}
											id="password"
											name="password"
											value={profile.password}
											onChange={handleInputChange}
											className={`w-full rounded-lg border ${
												errors.password
													? 'border-[#EF4444]'
													: 'border-[#374151]'
											} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
										/>
										<button
											type="button"
											onClick={() =>
												setShowPassword(!showPassword)
											}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D1D5DB] hover:text-[#F9FAFB]"
										>
											{showPassword ? (
												<EyeOff className="h-4 w-4" />
											) : (
												<Eye className="h-4 w-4" />
											)}
										</button>
										{errors.password && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.password}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										••••••••
									</div>
								)}
							</div>

							{/* Weight */}
							<div className="space-y-2">
								<label
									htmlFor="weight"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<Weight className="h-4 w-4 text-[#F97316]" />
									Weight (kg)
								</label>
								{isEditing ? (
									<div className="relative">
										<input
											type="text"
											id="weight"
											name="weight"
											value={profile.weight}
											onChange={handleInputChange}
											className={`w-full rounded-lg border ${
												errors.weight
													? 'border-[#EF4444]'
													: 'border-[#374151]'
											} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
										/>
										{errors.weight && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.weight}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.weight} kg
									</div>
								)}
							</div>

							{/* Age */}
							<div className="space-y-2">
								<label
									htmlFor="age"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<Calendar className="h-4 w-4 text-[#F97316]" />
									Age
								</label>
								{isEditing ? (
									<div className="relative">
										<input
											type="text"
											id="age"
											name="age"
											value={profile.age}
											onChange={handleInputChange}
											className={`w-full rounded-lg border ${
												errors.age
													? 'border-[#EF4444]'
													: 'border-[#374151]'
											} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
										/>
										{errors.age && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.age}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.age} years
									</div>
								)}
							</div>

							{/* Gender */}
							<div className="space-y-2">
								<label
									htmlFor="gender"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<User className="h-4 w-4 text-[#F97316]" />
									Gender
								</label>
								{isEditing ? (
									<div className="relative">
										<div className="relative">
											<select
												id="gender"
												name="gender"
												value={profile.gender}
												onChange={handleInputChange}
												className={`w-full appearance-none rounded-lg border ${
													errors.gender
														? 'border-[#EF4444]'
														: 'border-[#374151]'
												} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
											>
												<option value="">
													Select Gender
												</option>
												<option value="Male">
													Male
												</option>
												<option value="Female">
													Female
												</option>
												<option value="Other">
													Other
												</option>
												<option value="Prefer not to say">
													Prefer not to say
												</option>
											</select>
											<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D1D5DB]" />
										</div>
										{errors.gender && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.gender}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.gender}
									</div>
								)}
							</div>

							{/* Fitness Goal */}
							<div className="space-y-2">
								<label
									htmlFor="fitnessGoal"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<Target className="h-4 w-4 text-[#F97316]" />
									Fitness Goal
								</label>
								{isEditing ? (
									<div className="relative">
										<div className="grid grid-cols-2 gap-2">
											<label
												className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border ${
													profile.fitnessGoal ===
													'Gaining'
														? 'border-[#F97316] bg-[#F97316]/20 text-[#F97316]'
														: 'border-[#374151] bg-[#111827] text-[#D1D5DB]'
												} px-4 py-2.5 transition-colors hover:border-[#F97316]/50`}
											>
												<input
													type="radio"
													name="fitnessGoal"
													value="Gaining"
													checked={
														profile.fitnessGoal ===
														'Gaining'
													}
													onChange={handleInputChange}
													className="sr-only"
												/>
												<TrendingUp className="h-4 w-4" />
												<span>Gaining</span>
											</label>
											<label
												className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border ${
													profile.fitnessGoal ===
													'Losing'
														? 'border-[#F97316] bg-[#F97316]/20 text-[#F97316]'
														: 'border-[#374151] bg-[#111827] text-[#D1D5DB]'
												} px-4 py-2.5 transition-colors hover:border-[#F97316]/50`}
											>
												<input
													type="radio"
													name="fitnessGoal"
													value="Losing"
													checked={
														profile.fitnessGoal ===
														'Losing'
													}
													onChange={handleInputChange}
													className="sr-only"
												/>
												<TrendingDown className="h-4 w-4" />
												<span>Losing</span>
											</label>
										</div>
										{errors.fitnessGoal && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.fitnessGoal}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.fitnessGoal}
									</div>
								)}
							</div>

							{/* Fitness Level */}
							<div className="space-y-2">
								<label
									htmlFor="fitnessLevel"
									className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]"
								>
									<Activity className="h-4 w-4 text-[#F97316]" />
									Fitness Level
								</label>
								{isEditing ? (
									<div className="relative">
										<div className="relative">
											<select
												id="fitnessLevel"
												name="fitnessLevel"
												value={profile.fitnessLevel}
												onChange={handleInputChange}
												className={`w-full appearance-none rounded-lg border ${
													errors.fitnessLevel
														? 'border-[#EF4444]'
														: 'border-[#374151]'
												} bg-[#111827] px-4 py-2.5 text-[#F9FAFB] focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316]`}
											>
												<option value="">
													Select Level
												</option>
												<option value="Beginner">
													Beginner
												</option>
												<option value="Intermediate">
													Intermediate
												</option>
												<option value="Advanced">
													Advanced
												</option>
											</select>
											<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D1D5DB]" />
										</div>
										{errors.fitnessLevel && (
											<p className="mt-1 text-xs text-[#EF4444]">
												{errors.fitnessLevel}
											</p>
										)}
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.fitnessLevel}
									</div>
								)}
							</div>

							{/* Prefers Home Workout */}
							<div className="space-y-2 md:col-span-2">
								<label className="flex items-center gap-2 text-sm font-medium text-[#D1D5DB]">
									<Home className="h-4 w-4 text-[#F97316]" />
									Workout Preference
								</label>
								{isEditing ? (
									<div className="relative">
										<label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
											<input
												type="checkbox"
												name="prefersHomeWorkout"
												checked={
													profile.prefersHomeWorkout
												}
												onChange={handleInputChange}
												className="sr-only"
											/>
											<span
												className={`flex h-5 w-5 items-center justify-center rounded border ${
													profile.prefersHomeWorkout
														? 'border-[#F97316] bg-[#F97316] text-white'
														: 'border-[#374151] bg-transparent'
												}`}
											>
												{profile.prefersHomeWorkout && (
													<Check className="h-3 w-3" />
												)}
											</span>
											<span>
												I prefer home workouts over gym
											</span>
										</label>
									</div>
								) : (
									<div className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-2.5 text-[#F9FAFB]">
										{profile.prefersHomeWorkout
											? 'Prefers home workouts'
											: 'Prefers gym workouts'}
									</div>
								)}
							</div>
						</div>

						{/* Action Buttons (Mobile) */}
						{isEditing && (
							<div className="mt-8 flex gap-3 md:hidden">
								<button
									onClick={handleCancelEdit}
									className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#374151] bg-transparent px-4 py-3 text-sm font-medium text-[#F9FAFB] transition-colors hover:bg-[#374151]"
								>
									<X className="h-4 w-4" />
									Cancel
								</button>
								<button
									onClick={handleSaveProfile}
									disabled={isSaving}
									className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] px-4 py-3 text-sm font-medium text-white transition-transform hover:scale-105 disabled:opacity-70"
								>
									{isSaving ? (
										<>
											<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
											Saving...
										</>
									) : (
										<>
											<Save className="h-4 w-4" />
											Save Changes
										</>
									)}
								</button>
							</div>
						)}
					</div>

					{/* Danger Zone */}
					<div className="mt-6 rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/5 p-6">
						<div className="flex items-center gap-2 text-[#EF4444]">
							<TriangleAlert className="h-5 w-5" />
							<h3 className="text-lg font-medium">Danger Zone</h3>
						</div>
						<p className="mt-2 text-sm text-[#D1D5DB]">
							These actions are irreversible. Please proceed with
							caution.
						</p>
						<div className="mt-4 flex flex-wrap gap-4">
							<button className="rounded-lg border border-[#EF4444]/30 bg-transparent px-4 py-2 text-sm font-medium text-[#EF4444] transition-colors hover:bg-[#EF4444]/10">
								Delete Account
							</button>
						</div>
					</div>
				</div>
			</main>

			{/* Success Notification */}
			<div
				id="notification"
				className="fixed bottom-4 left-1/2 flex -translate-x-1/2 translate-y-16 items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-3 text-white shadow-lg transition-transform duration-300"
			>
				<Check className="h-5 w-5" />
				<span>Profile updated successfully!</span>
			</div>
		</div>
	);
}

export default Profile;
