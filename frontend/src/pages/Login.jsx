// Login.jsx
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Activity } from "lucide-react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            const text = await response.text(); // Read response as text
            console.log("Raw response:", text);

            try {
                const data = JSON.parse(text); // Try parsing as JSON
                console.log("Parsed response:", data);
                localStorage.setItem("userId", data);
                navigate("/dashboard");
            } catch (jsonError) {
                console.error(
                    "Response is not JSON, might be an error message:",
                    text
                );
                alert("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    };

    return (
        <div className="relative bg-dark">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 z-20">
                <div className="flex flex-col mr-6">
                    <div className="flex items-center ml-6 gap-2 mb-4">
                        <div className="relative h-14 w-14">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-full">
                                <Activity
                                    strokeWidth={2.5}
                                    className="h-10 w-10 text-white"
                                />
                            </div>
                        </div>
                        <span className="text-text-light text-3xl font-bold">
                            TrackByte
                        </span>
                    </div>

                    <div className="flex items-center">
                        <h1 className="text-2xl text-text-light-sec py-3 px-6 rounded-4xl">
                            Register Now! To get an{" "}
                            <span className="text-primary">head start</span>{" "}
                            <br></br>on your fitness journey!
                        </h1>
                    </div>
                </div>
                <div className="max-w-md w-full space-y-8 p-8 rounded-3xl bg-text-dark-sec">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
                            Log in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-light">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="font-medium text-primary hover:text-accent"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    >
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-light focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-light focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
