import {
	Activity,
	AtSign,
	Clock,
	Globe,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
	ChevronRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Contact() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col min-h-screen bg-[#111827] text-[#F9FAFB]">
			{/* Navigation */}
			<header className="sticky top-0 z-50 w-full border-b border-text-dark-sec bg-dark/80 backdrop-blur-sm">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="relative h-8 w-8">
							<div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
								<Activity
									onClick={navigate('/')}
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
							href="/contactus"
							className="text-text-light-sec hover:text-accent hover:border-b-2 transition-colors active:text-accent"
						>
							ContactUs
						</a>
					</nav>

					<div className="flex items-center gap-4">
						<button
							onClick={() => {
								navigate('/register');
							}}
							className="hidden md:flex bg-primary hover:bg-accent text-white transition-all h-10 px-4 py-2 rounded-md cursor-pointer"
						>
							Get Started
							<ChevronRight className="ml-1.5 h-5.2 w-5" />
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative overflow-hidden py-20 md:py-24 bg-[#111827]">
				<div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

				{/* Animated gradient orbs */}
				<div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#EF4444]/20 blur-3xl animate-pulse"></div>
				<div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse delay-700"></div>

				<div className="container relative">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="inline-flex items-center gap-2 rounded-full bg-[#374151]/50 px-4 py-1.5 text-sm font-medium text-[#F9FAFB] mb-6">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></span>
								<span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]"></span>
							</span>
							<span>We're Here to Help</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9FAFB] mb-6">
							Get in <span className="text-[#EF4444]">Touch</span>{' '}
							With Us
						</h1>

						<p className="text-lg md:text-xl text-[#D1D5DB] max-w-2xl mx-auto">
							Have questions about TrackByte or need personalized
							assistance? Our team is ready to help you on your
							fitness journey.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-start">
						{/* Contact Form */}
						<div className="relative">
							<div className="absolute -inset-1 bg-gradient-to-r from-[#EF4444] to-[#F97316] rounded-2xl blur-sm opacity-50"></div>
							<div className="relative rounded-2xl border border-[#374151] bg-[#1F2937]/80 backdrop-blur-sm p-6 md:p-8">
								<h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">
									Send Us a Message
								</h2>

								<form className="space-y-6">
									<div className="space-y-4">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
											<div className="space-y-2">
												<label
													htmlFor="name"
													className="text-sm font-medium text-[#D1D5DB]"
												>
													Full Name
												</label>
												<div className="relative">
													<input
														type="text"
														id="name"
														className="w-full h-12 bg-[#111827] border border-[#374151] rounded-lg px-4 text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
														placeholder="Name"
													/>
												</div>
											</div>

											<div className="space-y-2">
												<label
													htmlFor="email"
													className="text-sm font-medium text-[#D1D5DB]"
												>
													Email Address
												</label>
												<div className="relative">
													<input
														type="email"
														id="email"
														className="w-full h-12 bg-[#111827] border border-[#374151] rounded-lg px-4 text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
														placeholder="Email"
													/>
												</div>
											</div>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="subject"
												className="text-sm font-medium text-[#D1D5DB]"
											>
												Subject
											</label>
											<div className="relative">
												<input
													type="text"
													id="subject"
													className="w-full h-12 bg-[#111827] border border-[#374151] rounded-lg px-4 text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
													placeholder="How can we help you?"
												/>
											</div>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="message"
												className="text-sm font-medium text-[#D1D5DB]"
											>
												Message
											</label>
											<div className="relative">
												<textarea
													id="message"
													rows={5}
													className="w-full bg-[#111827] border border-[#374151] rounded-lg p-4 text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent"
													placeholder="Tell us how we can assist you..."
												></textarea>
											</div>
										</div>
									</div>

									<button
										className="w-full bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white h-12 rounded-lg transition-all flex items-center justify-center"
										onClick={() => {
											alert('Message send succesfully');
										}}
									>
										Send Message
										<Send className="ml-2 h-4 w-4" />
									</button>
								</form>
							</div>
						</div>

						{/* Contact Info */}
						<div className="space-y-8">
							<div className="space-y-6">
								<h2 className="text-2xl font-bold text-[#F9FAFB]">
									Contact Information
								</h2>
								<p className="text-[#D1D5DB]">
									Our dedicated team is ready to answer your
									questions and provide support. Reach out to
									us through any of the following channels.
								</p>
							</div>

							<div className="grid gap-6">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-[#111827] w-fit">
										<MapPin className="h-6 w-6 text-[#EF4444]" />
									</div>
									<div>
										<h3 className="text-lg font-medium text-[#F9FAFB]">
											Our Location
										</h3>
										<p className="text-[#D1D5DB]">
											lorem ipsum dolor sit amet,
											<br />
											consectetur adipiscing elit.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-[#111827] w-fit">
										<Phone className="h-6 w-6 text-[#F97316]" />
									</div>
									<div>
										<h3 className="text-lg font-medium text-[#F9FAFB]">
											Phone Number
										</h3>
										<p className="text-[#D1D5DB]">
											038198909
										</p>
										<p className="text-sm text-[#D1D5DB]">
											Mon-Fri from 8am to 6pm
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-lg bg-[#111827] w-fit">
										<Mail className="h-6 w-6 text-[#22C55E]" />
									</div>
									<div>
										<h3 className="text-lg font-medium text-[#F9FAFB]">
											Email Address
										</h3>
										<p className="text-[#D1D5DB]">
											support@trackbyte.com
										</p>
										<p className="text-sm text-[#D1D5DB]">
											We'll respond within 24 hours
										</p>
									</div>
								</div>
							</div>

							<div className="rounded-2xl border border-[#374151] bg-[#1F2937]/50 p-6">
								<h3 className="text-lg font-medium text-[#F9FAFB] mb-4">
									Business Hours
								</h3>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Clock className="h-5 w-5 text-[#F97316]" />
										<div>
											<p className="text-[#F9FAFB]">
												Monday - Friday
											</p>
											<p className="text-sm text-[#D1D5DB]">
												8:00 AM - 6:00 PM
											</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<Clock className="h-5 w-5 text-[#F97316]" />
										<div>
											<p className="text-[#F9FAFB]">
												Saturday
											</p>
											<p className="text-sm text-[#D1D5DB]">
												9:00 AM - 4:00 PM
											</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<Clock className="h-5 w-5 text-[#F97316]" />
										<div>
											<p className="text-[#F9FAFB]">
												Sunday
											</p>
											<p className="text-sm text-[#D1D5DB]">
												Closed
											</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-medium text-[#F9FAFB] mb-4">
									Connect With Us
								</h3>
								<div className="flex gap-4">
									{[
										{
											name: 'Twitter',
											icon: (
												<AtSign className="h-5 w-5" />
											),
										},
										{
											name: 'Instagram',
											icon: <Globe className="h-5 w-5" />,
										},
										{
											name: 'Facebook',
											icon: (
												<MessageSquare className="h-5 w-5" />
											),
										},
									].map((social, index) => (
										<a
											key={index}
											href="#"
											className="p-3 rounded-lg bg-[#111827] text-[#D1D5DB] hover:text-[#F97316] transition-colors"
										>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gradient-to-br from-[#111827] to-[#1F2937]">
				<div className="container">
					<div className="relative overflow-hidden rounded-2xl border border-[#374151] bg-[#111827]/50 backdrop-blur-sm p-8 md:p-12">
						<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#EF4444]/20 blur-3xl"></div>
						<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F97316]/20 blur-3xl"></div>

						<div className="relative">
							<div className="text-center mb-12">
								<h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4">
									Frequently Asked Questions
								</h2>
								<p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
									Can't find the answer you're looking for?
									Reach out to our customer support team.
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
								{[
									{
										question:
											'How quickly will I receive a response?',
										answer: 'We aim to respond to all inquiries within 24 hours during business days.',
									},
									{
										question:
											'Do you offer technical support?',
										answer: 'Yes, our technical team is available to help with any app-related issues you might encounter.',
									},
									{
										question: 'Can I schedule a demo?',
										answer: 'You can request a personalized demo through our contact form or by calling us directly.',
									},
									{
										question:
											'Do you have a physical location?',
										answer: 'Yes, our main office is located in San Francisco. Feel free to visit us during business hours.',
									},
								].map((faq, index) => (
									<div
										key={index}
										className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6 transition-all hover:border-[#F97316]/50"
									>
										<h3 className="text-xl font-bold text-[#F9FAFB] mb-2">
											{faq.question}
										</h3>
										<p className="text-[#D1D5DB]">
											{faq.answer}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-[#374151] bg-[#111827]">
				<div className="container">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
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

						<div className="text-sm text-[#D1D5DB]">
							© {new Date().getFullYear()} TrackByte. All rights
							reserved.
						</div>

						<div className="flex gap-4">
							{['Twitter', 'Instagram', 'Facebook'].map(
								(social) => (
									<a
										key={social}
										href="#"
										className="text-sm text-[#D1D5DB] hover:text-[#F97316]"
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

export default Contact;
