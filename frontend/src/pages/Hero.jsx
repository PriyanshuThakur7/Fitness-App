import {
	Activity,
	BarChart3,
	ChevronRight,
	Dumbbell,
	Flame,
	LineChart,
	Menu,
	Target,
	Zap,
} from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col min-h-screen bg-dark text-text-light">
			{/* Navigation */}
			<header className="sticky top-0 z-50 w-full border-b border-text-dark-sec bg-dark/80 backdrop-blur-sm">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="relative h-8 w-8">
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
								navigate('/');
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
							Home
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
							Nutrition
						</a>
						<a
							href="#"
							className="text-text-light-sec hover:text-accent transition-colors"
						>
							Progress
						</a>
						<a
							href="#"
							className="text-text-light-sec hover:text-accent transition-colors"
						>
							Community
						</a>
					</nav>

					<div className="flex items-center gap-4">
						<button
							onClick={() => {
								navigate('/register');
							}}
							className="hidden md:flex bg-primary hover:bg-accent text-white transition-all h-10 px-4 py-2 rounded-md"
						>
							Get Started
							<ChevronRight className="ml-1.5 h-5.2 w-5" />
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative overflow-hidden py-20 md:py-32 bg-dark">
				<div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

				{/* Animated gradient orbs */}
				<div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse delay-700"></div>

				<div className="container relative">
					<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="flex flex-col gap-6">
							<div className="inline-flex items-center gap-2 rounded-full bg-text-dark-sec/50 px-4 py-1.5 text-sm font-medium text-text-light">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
									<span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
								</span>
								<span>Personalized Fitness Revolution</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-light">
								Your <span className="text-primary">Smart</span>{' '}
								Fitness Companion
							</h1>

							<p className="text-lg md:text-xl text-text-light-sec max-w-xl">
								Introducing TrackByte – a revolutionary step in
								personalized fitness. Imagine a fitness app so
								smart, it feels like a personal trainer and a
								data analyst rolled into one!
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mt-2">
								<button
									onClick={() => {
										navigate('/register');
									}}
									className="bg-primary hover:bg-accent text-white h-12 px-8 rounded-lg transition-all text-base flex items-center justify-center"
								>
									Start Your Journey
									<ChevronRight className="ml-2 h-4 w-4" />
								</button>
								<button className="border border-text-dark-sec text-text-light hover:bg-text-dark-sec/30 h-12 px-8 rounded-lg transition-all text-base flex items-center justify-center">
									Learn More
								</button>
							</div>

							<div className="flex items-center gap-4 mt-4">
								<div className="flex -space-x-2">
									{[1, 2, 3, 4].map((i) => (
										<div
											key={i}
											className="h-8 w-8 rounded-full border-2 border-dark bg-gradient-to-br from-primary to-accent"
										></div>
									))}
								</div>
								<div className="text-sm text-text-light-sec">
									<span className="font-bold text-text-light">
										1,000+
									</span>{' '}
									active users
								</div>
								<div className="flex items-center">
									{[1, 2, 3, 4, 5].map((i) => (
										<Flame
											key={i}
											className="h-4 w-4 text-accent"
										/>
									))}
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="relative z-10 rounded-xl overflow-hidden border border-text-dark-sec bg-dark/50 backdrop-blur-sm shadow-2xl">
								<div className="aspect-[4/3] relative">
									<img
										src="/placeholder.svg"
										alt="TrackByte App Dashboard"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
								</div>

								{/* Floating UI Elements */}
								<div className="absolute top-6 right-6 bg-dark/80 backdrop-blur-sm rounded-lg p-3 border border-text-dark-sec shadow-lg">
									<div className="flex items-center gap-2">
										<LineChart className="h-5 w-5 text-success" />
										<span className="text-sm font-medium text-text-light">
											+12% Progress
										</span>
									</div>
								</div>

								<div className="absolute bottom-20 left-6 bg-dark/80 backdrop-blur-sm rounded-lg p-3 border border-text-dark-sec shadow-lg">
									<div className="flex items-center gap-2">
										<Dumbbell className="h-5 w-5 text-accent" />
										<span className="text-sm font-medium text-text-light">
											Workout Generated
										</span>
									</div>
								</div>

								<div className="absolute bottom-6 right-6 bg-dark/80 backdrop-blur-sm rounded-lg p-3 border border-text-dark-sec shadow-lg animate-pulse">
									<div className="flex items-center gap-2">
										<Target className="h-5 w-5 text-primary" />
										<span className="text-sm font-medium text-text-light">
											Goal Tracking
										</span>
									</div>
								</div>
							</div>

							{/* Background decorative elements */}
							<div className="absolute -z-10 -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-2xl"></div>
							<div className="absolute -z-10 -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-dark">
				<div className="container">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
							Not Just Another Workout App
						</h2>
						<p className="text-lg text-text-light-sec max-w-2xl mx-auto">
							We engineered a smart fitness companion that adapts
							to your goals, environment, and lifestyle –
							dynamically and intelligently.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: <Zap className="h-8 w-8 text-primary" />,
								title: 'Smart Adaptation',
								description:
									'From bulking to cutting, home to gym – TrackByte evolves with you.',
							},
							{
								icon: (
									<BarChart3 className="h-8 w-8 text-accent" />
								),
								title: 'Real-time Analytics',
								description:
									'Track your progress with advanced metrics and visualizations.',
							},
							{
								icon: (
									<Target className="h-8 w-8 text-success" />
								),
								title: 'Goal-oriented Planning',
								description:
									'Set targets and let TrackByte create the perfect plan to achieve them.',
							},
						].map((feature, index) => (
							<div
								key={index}
								className="relative group p-6 rounded-xl border border-text-dark-sec bg-[#1F2937]/50 hover:bg-[#1F2937] transition-all"
							>
								<div className="absolute -inset-px bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
								<div className="absolute -inset-px bg-[#1F2937] rounded-xl border border-text-dark-sec group-hover:border-transparent z-10"></div>
								<div className="relative z-20 flex flex-col gap-4">
									<div className="p-3 rounded-lg bg-dark w-fit">
										{feature.icon}
									</div>
									<h3 className="text-xl font-bold text-text-light">
										{feature.title}
									</h3>
									<p className="text-text-light-sec">
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-dark to-[#1F2937]">
				<div className="container">
					<div className="relative overflow-hidden rounded-2xl border border-text-dark-sec bg-dark/50 backdrop-blur-sm p-8 md:p-12">
						<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
						<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>

						<div className="relative grid gap-8 md:grid-cols-2 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
									Begin Your Fitness Evolution Today
								</h2>
								<p className="text-lg text-text-light-sec mb-6">
									The user journey is seamless – login, input
									preferences, and BOOM! A personalized plan,
									generated in real time using advanced logic
									and verified algorithms.
								</p>
								<button className="bg-primary hover:bg-accent text-white h-12 px-8 rounded-lg transition-all text-base flex items-center justify-center">
									Start Your Journey
									<ChevronRight className="ml-2 h-4 w-4" />
								</button>
							</div>

							<div className="relative">
								<div className="aspect-square max-w-[320px] mx-auto relative">
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl animate-pulse"></div>
										<div className="absolute h-4/5 w-4/5 rounded-full border-4 border-accent/30 animate-spin-slow"></div>
										<div className="absolute h-3/5 w-3/5 rounded-full border-4 border-primary/30 animate-spin-slow-reverse"></div>
										<div className="absolute h-2/5 w-2/5 rounded-full bg-dark flex items-center justify-center">
											<Activity
												className="h-12 w-12 text-accent"
												strokeWidth={2}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-text-dark-sec bg-dark">
				<div className="container">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2">
							<div className="relative h-8 w-8">
								<div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
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

						<div className="text-sm text-text-light-sec">
							© {new Date().getFullYear()} TrackByte. All rights
							reserved.
						</div>

						<div className="flex gap-4">
							{['Twitter', 'Instagram', 'Facebook'].map(
								(social) => (
									<a
										key={social}
										href="#"
										className="text-sm text-text-light-sec hover:text-accent"
									>
										{social}
									</a>
								)
							)}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Landing;
