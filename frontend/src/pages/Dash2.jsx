"use client";

import { useState } from "react";
import {
    Activity,
    Award,
    Bell,
    Calendar,
    ChevronRight,
    Clock,
    Dumbbell,
    Flame,
    Heart,
    Home,
    LineChart,
    Menu,
    MessageSquare,
    Moon,
    MoreHorizontal,
    Plus,
    Settings,
    Smile,
    Target,
    Utensils,
    User,
    Users,
    X,
    Zap,
} from "lucide-react";

function Dash2() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-[#111827] text-[#F9FAFB]">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#374151] bg-[#111827] transition-transform duration-300 lg:static lg:translate-x-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex h-16 items-center justify-between border-b border-[#374151] px-4">
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
                    <button
                        className="rounded-md p-1 text-[#D1D5DB] hover:bg-[#1F2937] hover:text-[#F9FAFB] lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* User Profile */}
                <div className="flex flex-col items-center border-b border-[#374151] p-4">
                    <div className="relative">
                        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#F97316] bg-gradient-to-br from-[#1F2937] to-[#111827]">
                            <img
                                src="/placeholder-user.svg"
                                alt="User"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 rounded-full bg-[#22C55E] p-1">
                            <div className="h-2 w-2 rounded-full bg-[#22C55E]"></div>
                        </div>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[#F9FAFB]">
                        Alex Johnson
                    </h3>
                    <p className="text-sm text-[#D1D5DB]">Premium Member</p>
                    <div className="mt-2 flex items-center gap-1 rounded-full bg-[#1F2937] px-3 py-1 text-xs font-medium text-[#22C55E]">
                        <Target className="h-3 w-3" />
                        <span>Goal: Weight Loss</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-1">
                        {[
                            {
                                id: "home",
                                name: "Dashboard",
                                icon: <Home className="h-5 w-5" />,
                            },
                            {
                                id: "workouts",
                                name: "Workouts",
                                icon: <Dumbbell className="h-5 w-5" />,
                            },
                            {
                                id: "nutrition",
                                name: "Nutrition",
                                icon: <Utensils className="h-5 w-5" />,
                            },
                            {
                                id: "progress",
                                name: "Progress",
                                icon: <LineChart className="h-5 w-5" />,
                            },
                            {
                                id: "activity",
                                name: "Activity",
                                icon: <Activity className="h-5 w-5" />,
                            },
                            {
                                id: "community",
                                name: "Community",
                                icon: <Users className="h-5 w-5" />,
                            },
                            {
                                id: "schedule",
                                name: "Schedule",
                                icon: <Calendar className="h-5 w-5" />,
                            },
                        ].map((item) => (
                            <li key={item.id}>
                                <button
                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                                        activeSection === item.id
                                            ? "bg-gradient-to-r from-[#EF4444]/20 to-[#F97316]/20 text-[#F9FAFB]"
                                            : "text-[#D1D5DB] hover:bg-[#1F2937] hover:text-[#F9FAFB]"
                                    }`}
                                    onClick={() => setActiveSection(item.id)}
                                >
                                    <span
                                        className={`flex h-6 w-6 items-center justify-center rounded-md ${
                                            activeSection === item.id
                                                ? "bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white"
                                                : "bg-[#1F2937] text-[#D1D5DB]"
                                        }`}
                                    >
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 space-y-2">
                        <h4 className="px-3 text-xs font-semibold uppercase text-[#D1D5DB]">
                            Quick Actions
                        </h4>
                        <ul className="space-y-1">
                            {[
                                {
                                    id: "log-workout",
                                    name: "Log Workout",
                                    icon: <Plus className="h-4 w-4" />,
                                },
                                {
                                    id: "log-meal",
                                    name: "Log Meal",
                                    icon: <Plus className="h-4 w-4" />,
                                },
                                {
                                    id: "settings",
                                    name: "Settings",
                                    icon: <Settings className="h-4 w-4" />,
                                },
                            ].map((item) => (
                                <li key={item.id}>
                                    <button
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[#D1D5DB] transition-colors hover:bg-[#1F2937] hover:text-[#F9FAFB]"
                                        onClick={() =>
                                            setActiveSection(item.id)
                                        }
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#1F2937] text-[#D1D5DB]">
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="border-t border-[#374151] p-4">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[#D1D5DB] transition-colors hover:bg-[#1F2937] hover:text-[#F9FAFB]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1F2937] text-[#D1D5DB]">
                            <User className="h-4 w-4" />
                        </span>
                        <span>Profile</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#374151] bg-[#111827]/80 px-4 backdrop-blur-sm">
                    <button
                        className="rounded-md p-2 text-[#D1D5DB] hover:bg-[#1F2937] hover:text-[#F9FAFB] lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <Menu className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2 lg:hidden">
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

                    <div className="ml-auto flex items-center gap-4">
                        <button className="relative rounded-full p-1 text-[#D1D5DB] hover:bg-[#1F2937] hover:text-[#F9FAFB]">
                            <Bell className="h-5 w-5" />
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EF4444] text-[10px] font-bold text-white">
                                3
                            </span>
                        </button>

                        <button className="relative rounded-full p-1 text-[#D1D5DB] hover:bg-[#1F2937] hover:text-[#F9FAFB]">
                            <MessageSquare className="h-5 w-5" />
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F97316] text-[10px] font-bold text-white">
                                5
                            </span>
                        </button>

                        <div className="hidden items-center gap-2 md:flex">
                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                <img
                                    src="/placeholder-user.svg"
                                    alt="User"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-[#F9FAFB]">
                                Alex Johnson
                            </span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    <div className="mx-auto max-w-7xl">
                        {/* Page Title */}
                        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h1 className="text-2xl font-bold text-[#F9FAFB] md:text-3xl">
                                Dashboard
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-[#D1D5DB]">
                                    {new Date().toLocaleDateString()}
                                </span>
                                <div className="flex items-center gap-1 rounded-full bg-[#1F2937] px-3 py-1 text-xs font-medium text-[#22C55E]">
                                    <Clock className="h-3 w-3" />
                                    <span>Last updated: Just now</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Overview */}
                        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Daily Steps",
                                    value: "8,742",
                                    target: "10,000",
                                    icon: (
                                        <Activity className="h-5 w-5 text-[#F97316]" />
                                    ),
                                    progress: 87,
                                },
                                {
                                    title: "Workout Streak",
                                    value: "7 days",
                                    icon: (
                                        <Flame className="h-5 w-5 text-[#EF4444]" />
                                    ),
                                    badge: "Personal Best!",
                                },
                                {
                                    title: "Calories Burned",
                                    value: "487",
                                    target: "600",
                                    icon: (
                                        <Zap className="h-5 w-5 text-[#F59E0B]" />
                                    ),
                                    progress: 81,
                                },
                                {
                                    title: "Active Minutes",
                                    value: "42",
                                    target: "60",
                                    icon: (
                                        <Clock className="h-5 w-5 text-[#22C55E]" />
                                    ),
                                    progress: 70,
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-xl border border-[#374151] bg-[#1F2937]/50 p-4 transition-all hover:border-[#F97316]/50"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-[#D1D5DB]">
                                                {stat.title}
                                            </p>
                                            <p className="mt-1 text-2xl font-bold text-[#F9FAFB]">
                                                {stat.value}
                                            </p>
                                            {stat.target && (
                                                <p className="text-xs text-[#D1D5DB]">
                                                    Target:{" "}
                                                    <span className="text-[#F9FAFB]">
                                                        {stat.target}
                                                    </span>
                                                </p>
                                            )}
                                            {stat.badge && (
                                                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#EF4444]/20 px-2 py-0.5 text-xs font-medium text-[#EF4444]">
                                                    <Award className="h-3 w-3" />
                                                    {stat.badge}
                                                </div>
                                            )}
                                        </div>
                                        <div className="rounded-lg bg-[#111827] p-2">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    {stat.progress && (
                                        <div className="mt-3">
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#374151]">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-[#EF4444] to-[#F97316]"
                                                    style={{
                                                        width: `${stat.progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <p className="mt-1 text-right text-xs text-[#D1D5DB]">
                                                {stat.progress}%
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Main Dashboard Sections */}
                        <div className="grid gap-6 lg:grid-cols-3">
                            {/* Workout Summary */}
                            <div className="col-span-2 rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">🏋️</span>Workout
                                        Summary
                                    </h2>
                                    <button className="rounded-md p-1 text-[#D1D5DB] hover:text-[#F9FAFB]">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Today's Workout */}
                                <div className="mb-5 rounded-lg border border-[#374151] bg-[#111827] p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            Today's Workout
                                        </h3>
                                        <div className="rounded-full bg-[#EF4444]/20 px-2 py-0.5 text-xs font-medium text-[#EF4444]">
                                            High Intensity
                                        </div>
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold text-[#F9FAFB]">
                                        Full Body HIIT Circuit
                                    </h4>
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        <div className="rounded-full bg-[#374151] px-2 py-0.5 text-xs text-[#D1D5DB]">
                                            45 min
                                        </div>
                                        <div className="rounded-full bg-[#374151] px-2 py-0.5 text-xs text-[#D1D5DB]">
                                            350 cal
                                        </div>
                                        <div className="rounded-full bg-[#374151] px-2 py-0.5 text-xs text-[#D1D5DB]">
                                            Full Body
                                        </div>
                                        <div className="rounded-full bg-[#374151] px-2 py-0.5 text-xs text-[#D1D5DB]">
                                            Strength
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className="h-8 w-8 rounded-full border-2 border-[#111827] bg-gradient-to-br from-[#EF4444] to-[#F97316]"
                                                ></div>
                                            ))}
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111827] bg-[#374151] text-xs font-medium text-[#F9FAFB]">
                                                +2
                                            </div>
                                        </div>
                                        <button className="rounded-lg bg-gradient-to-r from-[#EF4444] to-[#F97316] px-4 py-2 text-sm font-medium text-white">
                                            Start Workout
                                        </button>
                                    </div>
                                </div>

                                {/* Weekly Progress */}
                                <div className="mb-4">
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Weekly Progress
                                    </h3>
                                    <div className="grid grid-cols-7 gap-1">
                                        {[
                                            "M",
                                            "T",
                                            "W",
                                            "T",
                                            "F",
                                            "S",
                                            "S",
                                        ].map((day, i) => (
                                            <div
                                                key={i}
                                                className="flex flex-col items-center"
                                            >
                                                <span className="mb-2 text-xs text-[#D1D5DB]">
                                                    {day}
                                                </span>
                                                <div
                                                    className={`flex h-12 w-full items-center justify-center rounded-md ${
                                                        i < 4
                                                            ? "bg-gradient-to-r from-[#EF4444] to-[#F97316] text-white"
                                                            : i === 4
                                                            ? "border border-dashed border-[#F97316] bg-transparent text-[#F97316]"
                                                            : "bg-[#374151] text-[#D1D5DB]"
                                                    }`}
                                                >
                                                    {i < 4 ? (
                                                        <Check />
                                                    ) : i === 4 ? (
                                                        "Today"
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Muscle Groups */}
                                <div>
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Muscle Groups Targeted
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        {[
                                            { name: "Chest", percentage: 70 },
                                            { name: "Back", percentage: 85 },
                                            { name: "Legs", percentage: 60 },
                                            { name: "Arms", percentage: 75 },
                                            { name: "Core", percentage: 90 },
                                            {
                                                name: "Shoulders",
                                                percentage: 65,
                                            },
                                        ].map((muscle, i) => (
                                            <div
                                                key={i}
                                                className="rounded-lg bg-[#111827] p-3"
                                            >
                                                <div className="mb-1 flex items-center justify-between">
                                                    <span className="text-sm font-medium text-[#F9FAFB]">
                                                        {muscle.name}
                                                    </span>
                                                    <span className="text-xs text-[#D1D5DB]">
                                                        {muscle.percentage}%
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#374151]">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-[#EF4444] to-[#F97316]"
                                                        style={{
                                                            width: `${muscle.percentage}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Calories & Nutrition */}
                            <div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">🔥</span>Calories
                                        & Nutrition
                                    </h2>
                                    <button className="rounded-md p-1 text-[#D1D5DB] hover:text-[#F9FAFB]">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Calories Circle */}
                                <div className="mb-5 flex flex-col items-center">
                                    <div className="relative mb-3 h-40 w-40">
                                        <svg
                                            className="h-full w-full"
                                            viewBox="0 0 100 100"
                                        >
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="transparent"
                                                stroke="#374151"
                                                strokeWidth="10"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="transparent"
                                                stroke="url(#gradient)"
                                                strokeWidth="10"
                                                strokeDasharray="282.7"
                                                strokeDashoffset="70.7" // 25% of 282.7
                                                transform="rotate(-90 50 50)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="gradient"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor="#EF4444"
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor="#F97316"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-bold text-[#F9FAFB]">
                                                1,487
                                            </span>
                                            <span className="text-xs text-[#D1D5DB]">
                                                calories left
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid w-full grid-cols-3 gap-2 text-center">
                                        <div>
                                            <p className="text-xs text-[#D1D5DB]">
                                                Consumed
                                            </p>
                                            <p className="font-bold text-[#F9FAFB]">
                                                1,213
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#D1D5DB]">
                                                Burned
                                            </p>
                                            <p className="font-bold text-[#F9FAFB]">
                                                487
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#D1D5DB]">
                                                Goal
                                            </p>
                                            <p className="font-bold text-[#F9FAFB]">
                                                2,200
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Macros */}
                                <div className="mb-5">
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Macros Breakdown
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                name: "Protein",
                                                current: 87,
                                                goal: 120,
                                                color: "#22C55E",
                                            },
                                            {
                                                name: "Carbs",
                                                current: 145,
                                                goal: 180,
                                                color: "#F97316",
                                            },
                                            {
                                                name: "Fats",
                                                current: 32,
                                                goal: 60,
                                                color: "#F59E0B",
                                            },
                                        ].map((macro, i) => (
                                            <div key={i}>
                                                <div className="mb-1 flex items-center justify-between">
                                                    <span className="text-sm font-medium text-[#F9FAFB]">
                                                        {macro.name}
                                                    </span>
                                                    <span className="text-xs text-[#D1D5DB]">
                                                        {macro.current}g /{" "}
                                                        {macro.goal}g
                                                    </span>
                                                </div>
                                                <div className="h-2 w-full overflow-hidden rounded-full bg-[#374151]">
                                                    <div
                                                        className="h-full rounded-full"
                                                        style={{
                                                            width: `${
                                                                (macro.current /
                                                                    macro.goal) *
                                                                100
                                                            }%`,
                                                            backgroundColor:
                                                                macro.color,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Meals */}
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            Recent Meals
                                        </h3>
                                        <button className="text-xs font-medium text-[#F97316]">
                                            View All
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                time: "Breakfast",
                                                name: "Oatmeal with Berries",
                                                calories: 320,
                                            },
                                            {
                                                time: "Lunch",
                                                name: "Grilled Chicken Salad",
                                                calories: 450,
                                            },
                                            {
                                                time: "Snack",
                                                name: "Protein Shake",
                                                calories: 180,
                                            },
                                        ].map((meal, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between rounded-lg bg-[#111827] p-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#374151]">
                                                        <Utensils className="h-5 w-5 text-[#F9FAFB]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-[#D1D5DB]">
                                                            {meal.time}
                                                        </p>
                                                        <p className="font-medium text-[#F9FAFB]">
                                                            {meal.name}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-[#F9FAFB]">
                                                        {meal.calories}
                                                    </p>
                                                    <p className="text-xs text-[#D1D5DB]">
                                                        calories
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Tracker & Progress Analytics */}
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            {/* Activity Tracker */}
                            <div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">⏱️</span>Activity
                                        Tracker
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button className="rounded-md bg-[#111827] px-3 py-1 text-xs font-medium text-[#F9FAFB]">
                                            Day
                                        </button>
                                        <button className="rounded-md px-3 py-1 text-xs font-medium text-[#D1D5DB]">
                                            Week
                                        </button>
                                        <button className="rounded-md px-3 py-1 text-xs font-medium text-[#D1D5DB]">
                                            Month
                                        </button>
                                    </div>
                                </div>

                                {/* Activity Chart */}
                                <div className="mb-5 h-64 w-full rounded-lg bg-[#111827] p-4">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex h-full items-end gap-2">
                                            {[
                                                35, 60, 45, 80, 55, 75, 40, 65,
                                                50, 70, 45, 85,
                                            ].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="relative flex h-full flex-1 flex-col justify-end"
                                                >
                                                    <div
                                                        className="w-full rounded-t-sm bg-gradient-to-t from-[#EF4444] to-[#F97316]"
                                                        style={{
                                                            height: `${height}%`,
                                                        }}
                                                    ></div>
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#D1D5DB]">
                                                        {height}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-2 flex justify-between text-xs text-[#D1D5DB]">
                                            <span>6AM</span>
                                            <span>9AM</span>
                                            <span>12PM</span>
                                            <span>3PM</span>
                                            <span>6PM</span>
                                            <span>9PM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {
                                            title: "Heart Rate",
                                            value: "72",
                                            unit: "bpm",
                                            icon: (
                                                <Heart className="h-5 w-5 text-[#EF4444]" />
                                            ),
                                        },
                                        {
                                            title: "Distance",
                                            value: "3.2",
                                            unit: "km",
                                            icon: (
                                                <Activity className="h-5 w-5 text-[#F97316]" />
                                            ),
                                        },
                                        {
                                            title: "Sleep",
                                            value: "7.5",
                                            unit: "hrs",
                                            icon: (
                                                <Moon className="h-5 w-5 text-[#F59E0B]" />
                                            ),
                                        },
                                        {
                                            title: "Active Time",
                                            value: "2.5",
                                            unit: "hrs",
                                            icon: (
                                                <Clock className="h-5 w-5 text-[#22C55E]" />
                                            ),
                                        },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            className="rounded-lg bg-[#111827] p-3"
                                        >
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="text-xs text-[#D1D5DB]">
                                                    {stat.title}
                                                </span>
                                                <div className="rounded-full bg-[#1F2937] p-1">
                                                    {stat.icon}
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-1">
                                                <span className="text-xl font-bold text-[#F9FAFB]">
                                                    {stat.value}
                                                </span>
                                                <span className="text-xs text-[#D1D5DB]">
                                                    {stat.unit}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Progress & Analytics */}
                            <div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">📈</span>Progress
                                        & Analytics
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button className="rounded-md bg-[#111827] px-3 py-1 text-xs font-medium text-[#F9FAFB]">
                                            Weight
                                        </button>
                                        <button className="rounded-md px-3 py-1 text-xs font-medium text-[#D1D5DB]">
                                            BMI
                                        </button>
                                        <button className="rounded-md px-3 py-1 text-xs font-medium text-[#D1D5DB]">
                                            Body Fat
                                        </button>
                                    </div>
                                </div>

                                {/* Weight Progress Chart */}
                                <div className="mb-5 h-64 w-full rounded-lg bg-[#111827] p-4">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex h-full items-end gap-2">
                                            {[
                                                82, 81.5, 80.8, 80.2, 79.5,
                                                78.7, 78, 77.5, 77, 76.8, 76.5,
                                                76,
                                            ].map((weight, i) => (
                                                <div
                                                    key={i}
                                                    className="relative flex h-full flex-1 flex-col justify-end"
                                                >
                                                    <div
                                                        className="w-full rounded-t-sm bg-gradient-to-t from-[#22C55E] to-[#F97316]"
                                                        style={{
                                                            height: `${
                                                                ((weight - 75) /
                                                                    10) *
                                                                100
                                                            }%`,
                                                        }}
                                                    ></div>
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#D1D5DB]">
                                                        {weight}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-2 flex justify-between text-xs text-[#D1D5DB]">
                                            <span>Jan</span>
                                            <span>Feb</span>
                                            <span>Mar</span>
                                            <span>Apr</span>
                                            <span>May</span>
                                            <span>Jun</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Body Measurements */}
                                <div>
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Body Measurements
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            {
                                                name: "Waist",
                                                current: "32 in",
                                                change: "-2.5 in",
                                            },
                                            {
                                                name: "Chest",
                                                current: "42 in",
                                                change: "+1 in",
                                            },
                                            {
                                                name: "Hips",
                                                current: "38 in",
                                                change: "-1.5 in",
                                            },
                                            {
                                                name: "Arms",
                                                current: "14 in",
                                                change: "+0.5 in",
                                            },
                                        ].map((measurement, i) => (
                                            <div
                                                key={i}
                                                className="rounded-lg bg-[#111827] p-3"
                                            >
                                                <p className="text-xs text-[#D1D5DB]">
                                                    {measurement.name}
                                                </p>
                                                <p className="text-lg font-bold text-[#F9FAFB]">
                                                    {measurement.current}
                                                </p>
                                                <p
                                                    className={`text-xs ${
                                                        measurement.change.startsWith(
                                                            "+"
                                                        )
                                                            ? "text-[#22C55E]"
                                                            : measurement.change.startsWith(
                                                                  "-"
                                                              )
                                                            ? "text-[#EF4444]"
                                                            : "text-[#D1D5DB]"
                                                    }`}
                                                >
                                                    {measurement.change} since
                                                    start
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Motivation & Schedule */}
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            {/* Motivation & Community */}
                            <div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">🧠</span>
                                        Motivation & Community
                                    </h2>
                                    <button className="rounded-md p-1 text-[#D1D5DB] hover:text-[#F9FAFB]">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Daily Quote */}
                                <div className="mb-5 rounded-lg bg-[#111827] p-4">
                                    <div className="mb-3 flex items-center gap-2">
                                        <Smile className="h-5 w-5 text-[#F97316]" />
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            Daily Motivation
                                        </h3>
                                    </div>
                                    <p className="mb-2 text-lg italic text-[#F9FAFB]">
                                        "The only bad workout is the one that
                                        didn't happen."
                                    </p>
                                    <p className="text-right text-sm text-[#D1D5DB]">
                                        - Fitness Proverb
                                    </p>
                                </div>

                                {/* Achievements */}
                                <div className="mb-5">
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Recent Achievements
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            {
                                                name: "7-Day Streak",
                                                icon: (
                                                    <Flame className="h-4 w-4" />
                                                ),
                                            },
                                            {
                                                name: "5K Run",
                                                icon: (
                                                    <Activity className="h-4 w-4" />
                                                ),
                                            },
                                            {
                                                name: "Weight Goal",
                                                icon: (
                                                    <Target className="h-4 w-4" />
                                                ),
                                            },
                                            {
                                                name: "100 Workouts",
                                                icon: (
                                                    <Award className="h-4 w-4" />
                                                ),
                                            },
                                        ].map((badge, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EF4444]/20 to-[#F97316]/20 px-3 py-1.5"
                                            >
                                                <div className="rounded-full bg-gradient-to-r from-[#EF4444] to-[#F97316] p-1 text-white">
                                                    {badge.icon}
                                                </div>
                                                <span className="text-xs font-medium text-[#F9FAFB]">
                                                    {badge.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Community Leaderboard */}
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            Community Leaderboard
                                        </h3>
                                        <button className="text-xs font-medium text-[#F97316]">
                                            View All
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                name: "Sarah M.",
                                                points: 1250,
                                                position: 1,
                                            },
                                            {
                                                name: "Alex J. (You)",
                                                points: 1120,
                                                position: 2,
                                                isUser: true,
                                            },
                                            {
                                                name: "Mike T.",
                                                points: 980,
                                                position: 3,
                                            },
                                        ].map((user, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center justify-between rounded-lg ${
                                                    user.isUser
                                                        ? "bg-gradient-to-r from-[#EF4444]/20 to-[#F97316]/20"
                                                        : "bg-[#111827]"
                                                } p-3`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                                            user.position === 1
                                                                ? "bg-[#F59E0B] text-white"
                                                                : user.position ===
                                                                  2
                                                                ? "bg-[#D1D5DB] text-[#111827]"
                                                                : user.position ===
                                                                  3
                                                                ? "bg-[#78350F] text-white"
                                                                : "bg-[#374151] text-[#F9FAFB]"
                                                        }`}
                                                    >
                                                        {user.position}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-[#374151]">
                                                            <img
                                                                src={
                                                                    user.isUser
                                                                        ? "/placeholder-user.svg"
                                                                        : `/placeholder-user-${
                                                                              i +
                                                                              1
                                                                          }.svg`
                                                                }
                                                                alt={user.name}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <span
                                                            className={`font-medium ${
                                                                user.isUser
                                                                    ? "text-[#F97316]"
                                                                    : "text-[#F9FAFB]"
                                                            }`}
                                                        >
                                                            {user.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-[#F9FAFB]">
                                                        {user.points}
                                                    </p>
                                                    <p className="text-xs text-[#D1D5DB]">
                                                        points
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Schedule & Reminders */}
                            <div className="rounded-xl border border-[#374151] bg-[#1F2937]/50 p-5">
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-[#F9FAFB]">
                                        <span className="mr-2">📆</span>Schedule
                                        & Reminders
                                    </h2>
                                    <button className="rounded-md p-1 text-[#D1D5DB] hover:text-[#F9FAFB]">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Mini Calendar */}
                                <div className="mb-5 rounded-lg bg-[#111827] p-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            June 2023
                                        </h3>
                                        <div className="flex gap-2">
                                            <button className="rounded-md bg-[#1F2937] p-1 text-[#D1D5DB]">
                                                <ChevronLeft className="h-4 w-4" />
                                            </button>
                                            <button className="rounded-md bg-[#1F2937] p-1 text-[#D1D5DB]">
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center">
                                        {[
                                            "S",
                                            "M",
                                            "T",
                                            "W",
                                            "T",
                                            "F",
                                            "S",
                                        ].map((day, i) => (
                                            <div
                                                key={i}
                                                className="text-xs font-medium text-[#D1D5DB]"
                                            >
                                                {day}
                                            </div>
                                        ))}
                                        {Array.from(
                                            { length: 30 },
                                            (_, i) => i + 1
                                        ).map((date) => (
                                            <div
                                                key={date}
                                                className={`flex h-8 w-full items-center justify-center rounded-md text-xs ${
                                                    date === 15
                                                        ? "bg-gradient-to-r from-[#EF4444] to-[#F97316] font-bold text-white"
                                                        : [
                                                              3, 7, 10, 14, 17,
                                                              21, 24, 28,
                                                          ].includes(date)
                                                        ? "bg-[#374151]/50 font-medium text-[#F9FAFB]"
                                                        : "text-[#D1D5DB]"
                                                }`}
                                            >
                                                {date}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Upcoming Workouts */}
                                <div className="mb-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-medium text-[#F9FAFB]">
                                            Upcoming Workouts
                                        </h3>
                                        <button className="text-xs font-medium text-[#F97316]">
                                            View All
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                name: "Upper Body Strength",
                                                time: "Tomorrow, 7:00 AM",
                                                duration: "50 min",
                                                intensity: "Medium",
                                            },
                                            {
                                                name: "Cardio & Core",
                                                time: "Wed, 6:30 PM",
                                                duration: "45 min",
                                                intensity: "High",
                                            },
                                            {
                                                name: "Leg Day",
                                                time: "Fri, 7:00 AM",
                                                duration: "60 min",
                                                intensity: "High",
                                            },
                                        ].map((workout, i) => (
                                            <div
                                                key={i}
                                                className="rounded-lg bg-[#111827] p-3"
                                            >
                                                <div className="mb-1 flex items-center justify-between">
                                                    <h4 className="font-medium text-[#F9FAFB]">
                                                        {workout.name}
                                                    </h4>
                                                    <div
                                                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                                            workout.intensity ===
                                                            "High"
                                                                ? "bg-[#EF4444]/20 text-[#EF4444]"
                                                                : "bg-[#F97316]/20 text-[#F97316]"
                                                        }`}
                                                    >
                                                        {workout.intensity}
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <div className="flex items-center gap-1 text-[#D1D5DB]">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>
                                                            {workout.time}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-[#D1D5DB]">
                                                        <Clock className="h-3 w-3" />
                                                        <span>
                                                            {workout.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Reminders */}
                                <div>
                                    <h3 className="mb-3 font-medium text-[#F9FAFB]">
                                        Reminders
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                type: "Rest Day",
                                                message:
                                                    "Tomorrow is a scheduled rest day",
                                                time: "Tomorrow",
                                            },
                                            {
                                                type: "Hydration",
                                                message:
                                                    "Drink at least 3 liters of water today",
                                                time: "Today",
                                            },
                                            {
                                                type: "Nutrition",
                                                message:
                                                    "Log your meals for accurate tracking",
                                                time: "Daily",
                                            },
                                        ].map((reminder, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 rounded-lg bg-[#111827] p-3"
                                            >
                                                <div
                                                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                                        reminder.type ===
                                                        "Rest Day"
                                                            ? "bg-[#F59E0B]/20 text-[#F59E0B]"
                                                            : reminder.type ===
                                                              "Hydration"
                                                            ? "bg-[#22C55E]/20 text-[#22C55E]"
                                                            : "bg-[#F97316]/20 text-[#F97316]"
                                                    }`}
                                                >
                                                    {reminder.type ===
                                                    "Rest Day" ? (
                                                        <Moon className="h-5 w-5" />
                                                    ) : reminder.type ===
                                                      "Hydration" ? (
                                                        <Droplet className="h-5 w-5" />
                                                    ) : (
                                                        <Utensils className="h-5 w-5" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-medium text-[#F9FAFB]">
                                                            {reminder.type}
                                                        </p>
                                                        <p className="text-xs text-[#D1D5DB]">
                                                            {reminder.time}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm text-[#D1D5DB]">
                                                        {reminder.message}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

// Missing component definition
const Check = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// Missing component definition
const ChevronLeft = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

// Missing component definition
const Droplet = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
);

export default Dash2;
