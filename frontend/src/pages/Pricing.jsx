import {
    Activity,
    Check,
    ChevronRight,
    CreditCard,
    Dumbbell,
    Flame,
    Menu,
    Shield,
    Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Pricing() {
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
                            href="/contactus"
                            className="text-text-light-sec hover:text-accent transition-colors"
                        >
                            ContactUs
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                navigate("/register");
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
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#374151]/50 px-4 py-1.5 text-sm font-medium text-[#F9FAFB] mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]"></span>
                            </span>
                            <span>Flexible Plans for Everyone</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9FAFB] mb-6">
                            Choose Your{" "}
                            <span className="text-[#EF4444]">Fitness</span>{" "}
                            Journey
                        </h1>

                        <p className="text-lg md:text-xl text-[#D1D5DB] max-w-2xl mx-auto mb-12">
                            Select the perfect plan that aligns with your
                            fitness goals. From beginners to advanced athletes,
                            we have the right tools to help you succeed.
                        </p>

                        <div className="flex justify-center gap-4 mb-12">
                            <button className="bg-[#1F2937] text-[#F9FAFB] border border-[#374151] px-6 py-2 rounded-full font-medium">
                                Monthly
                            </button>
                            <button className="bg-[#EF4444] text-white px-6 py-2 rounded-full font-medium relative">
                                <span>Yearly</span>
                                <span className="absolute -top-2 -right-2 bg-[#22C55E] text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    SAVE 20%
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Basic Plan */}
                        <div className="relative group rounded-2xl border border-[#374151] bg-[#1F2937]/50 p-6 transition-all hover:border-[#F97316]/50 hover:bg-[#1F2937]">
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-[#F97316] to-[#EF4444] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-[#111827] w-fit">
                                        <Dumbbell className="h-6 w-6 text-[#F97316]" />
                                    </div>
                                    <div className="text-sm text-[#D1D5DB] font-medium">
                                        For Beginners
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">
                                    Basic
                                </h3>
                                <p className="text-[#D1D5DB] mb-4">
                                    Perfect for those just starting their
                                    fitness journey.
                                </p>

                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-4xl font-bold text-[#F9FAFB]">
                                        $9
                                    </span>
                                    <span className="text-[#D1D5DB] mb-1">
                                        /month
                                    </span>
                                </div>

                                <button className="w-full bg-[#111827] hover:bg-[#374151] text-[#F9FAFB] border border-[#374151] h-12 rounded-lg transition-all mb-6 flex items-center justify-center">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </button>

                                <div className="space-y-3">
                                    {[
                                        "Personalized workout plans",
                                        "Basic progress tracking",
                                        "5 workout templates",
                                        "Email support",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-[#22C55E]" />
                                            </div>
                                            <span className="text-sm text-[#D1D5DB]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="relative rounded-2xl p-0.5 bg-gradient-to-b from-[#F97316] to-[#EF4444]">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-[#EF4444] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-[#111827]">
                                MOST POPULAR
                            </div>

                            <div className="h-full rounded-2xl bg-[#1F2937] p-6 relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-[#111827] w-fit">
                                        <Flame className="h-6 w-6 text-[#EF4444]" />
                                    </div>
                                    <div className="text-sm text-[#D1D5DB] font-medium">
                                        For Enthusiasts
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">
                                    Pro
                                </h3>
                                <p className="text-[#D1D5DB] mb-4">
                                    Advanced features for dedicated fitness
                                    enthusiasts.
                                </p>

                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-4xl font-bold text-[#F9FAFB]">
                                        $19
                                    </span>
                                    <span className="text-[#D1D5DB] mb-1">
                                        /month
                                    </span>
                                </div>

                                <button className="w-full bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white h-12 rounded-lg transition-all mb-6 flex items-center justify-center">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </button>

                                <div className="space-y-3">
                                    {[
                                        "Everything in Basic",
                                        "Advanced analytics",
                                        "Nutrition planning",
                                        "20 workout templates",
                                        "Priority support",
                                        "Progress photos storage",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-[#22C55E]" />
                                            </div>
                                            <span className="text-sm text-[#D1D5DB]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Elite Plan */}
                        <div className="relative group rounded-2xl border border-[#374151] bg-[#1F2937]/50 p-6 transition-all hover:border-[#F97316]/50 hover:bg-[#1F2937]">
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-[#F97316] to-[#EF4444] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-lg bg-[#111827] w-fit">
                                        <Zap className="h-6 w-6 text-[#F59E0B]" />
                                    </div>
                                    <div className="text-sm text-[#D1D5DB] font-medium">
                                        For Athletes
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">
                                    Elite
                                </h3>
                                <p className="text-[#D1D5DB] mb-4">
                                    Premium features for serious athletes and
                                    professionals.
                                </p>

                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-4xl font-bold text-[#F9FAFB]">
                                        $39
                                    </span>
                                    <span className="text-[#D1D5DB] mb-1">
                                        /month
                                    </span>
                                </div>

                                <button className="w-full bg-[#111827] hover:bg-[#374151] text-[#F9FAFB] border border-[#374151] h-12 rounded-lg transition-all mb-6 flex items-center justify-center">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </button>

                                <div className="space-y-3">
                                    {[
                                        "Everything in Pro",
                                        "AI workout recommendations",
                                        "Personal coach consultation",
                                        "Unlimited workout templates",
                                        "Advanced body metrics",
                                        "Premium video tutorials",
                                        "24/7 priority support",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-[#22C55E]" />
                                            </div>
                                            <span className="text-sm text-[#D1D5DB]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#111827]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                            Everything you need to know about our pricing plans
                            and features.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                question: "Can I switch between plans?",
                                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.",
                            },
                            {
                                question: "Is there a free trial available?",
                                answer: "We offer a 7-day free trial for all new users. You can explore all features of the Pro plan during your trial period.",
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed and encrypted.",
                            },
                            {
                                question:
                                    "Can I cancel my subscription anytime?",
                                answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.",
                            },
                            {
                                question: "Are there any hidden fees?",
                                answer: "No, the price you see is the price you pay. There are no setup fees, hidden charges, or cancellation fees.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-6 transition-all hover:border-[#F97316]/50"
                            >
                                <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-[#D1D5DB]">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#111827] to-[#1F2937]">
                <div className="container">
                    <div className="relative overflow-hidden rounded-2xl border border-[#374151] bg-[#111827]/50 backdrop-blur-sm p-8 md:p-12">
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#EF4444]/20 blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F97316]/20 blur-3xl"></div>

                        <div className="relative grid gap-8 md:grid-cols-2 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4">
                                    Still Have Questions?
                                </h2>
                                <p className="text-lg text-[#D1D5DB] mb-6">
                                    Our team is here to help you choose the
                                    right plan for your fitness journey. Contact
                                    us for personalized assistance.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-[#EF4444] hover:bg-[#F97316] text-white h-12 px-8 rounded-lg transition-all text-base flex items-center justify-center">
                                        Contact Sales
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </button>
                                    <button className="bg-transparent border border-[#374151] text-[#F9FAFB] h-12 px-8 rounded-lg transition-all text-base flex items-center justify-center">
                                        View Documentation
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square max-w-[320px] mx-auto relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-full rounded-full bg-gradient-to-br from-[#EF4444] to-[#F97316] opacity-20 blur-2xl animate-pulse"></div>
                                        <div className="absolute h-4/5 w-4/5 rounded-full border-4 border-[#F97316]/30 animate-spin-slow"></div>
                                        <div className="absolute h-3/5 w-3/5 rounded-full border-4 border-[#EF4444]/30 animate-spin-slow-reverse"></div>
                                        <div className="absolute h-2/5 w-2/5 rounded-full bg-[#111827] flex items-center justify-center">
                                            <CreditCard
                                                className="h-12 w-12 text-[#F97316]"
                                                strokeWidth={1.5}
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
                            {["Twitter", "Instagram", "Facebook"].map(
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

export default Pricing;
