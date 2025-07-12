import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Activity, ChevronRight } from "lucide-react";

function Register() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        weight: "",
        age: "",
        gender: "",
        fitnessGoal: "",
        fitnessLevel: "",
        prefersHomeWorkout: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedData = {
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        };
        setFormData(updatedData);
        sessionStorage.setItem("registerFormData", JSON.stringify(updatedData));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable the button
        try {
            await axios.post(
                "http://localhost:8080/api/user/register",
                formData
            );
            alert("Registered successfully!");
            sessionStorage.removeItem("registerFormData");
            navigate("/login");
        } catch (error) {
            alert(
                "Registration failed: " + error.response?.data?.message ||
                    "Something went wrong"
            );
            setIsSubmitting(false); // Re-enable the button if submission fails
        }
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const progress = ((step + 1) / 3) * 100;

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <>
                        <Input
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="autofill:bg-text-dark-sec"
                        />
                        <Input
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <Input
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            type="number"
                        />
                        <Input
                            name="weight"
                            placeholder="Weight (kg)"
                            value={formData.weight}
                            onChange={handleChange}
                            type="number"
                        />
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border-2 text-text-light-sec border-text-light-sec rounded-md focus:outline-none focus:border-accent bg-text-dark-sec"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </>
                );
            case 2:
                return (
                    <>
                        <select
                            name="fitnessGoal"
                            value={formData.fitnessGoal}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border-2 border-text-light-sec rounded-md focus:outline-none focus:border-accent text-text-light-sec bg-text-dark-sec"
                        >
                            <option value="">Select Fitness Goal</option>
                            <option value="BULK">GAINING MUSCLE</option>
                            <option value="CUT">LOSING FAT</option>
                        </select>
                        <select
                            name="fitnessLevel"
                            value={formData.fitnessLevel}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border-2 border-text-light-sec rounded-md focus:outline-none focus:border-accent text-text-light-sec bg-text-dark-sec"
                        >
                            <option value="">Select Fitness Level</option>
                            <option value="BEGINNER">Beginner</option>
                            <option value="INTERMEDIATE">Intermediate</option>
                            <option value="ADVANCED">Advanced</option>
                        </select>
                        <div className="flex items-center ">
                            <input
                                type="checkbox"
                                name="prefersHomeWorkout"
                                checked={formData.prefersHomeWorkout}
                                onChange={handleChange}
                                className="h-4 w-4 text-primary focus:ring-accent border-text-light-sec rounded"
                            />
                            <label className="ml-2 text-md text-text-light-sec">
                                Prefer Home Workout
                            </label>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative bg-dark">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            <div className="min-h-screen flex flex-row justify-center items-center relative z-20">
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
                <div className="flex items-center justify-center px-4 py-12">
                    <div className="max-w-md w-full space-y-8 bg-text-dark-sec p-6 rounded-xl shadow-lg">
                        <div>
                            <h2 className="text-center text-2xl font-bold text-text-light">
                                Create your account
                            </h2>
                            <p className="text-center text-sm text-text-light-sec">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-primary hover:underline "
                                >
                                    Log in
                                </Link>
                            </p>
                        </div>

                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="bg-gradient-to-br from-primary to-accent h-2 rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {renderStep()}

                            <div className="flex justify-between pt-4">
                                {step > 0 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-4 py-2 bg-primary text-text-light rounded hover:bg-accent text-sm cursor-pointer"
                                    >
                                        Back
                                    </button>
                                )}
                                {step < 2 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="ml-auto px-4 py-2 bg-primary text-text-light rounded hover:bg-accent text-sm cursor-pointer"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting} // Disable the button based on submission status
                                        className={`ml-auto px-4 py-2 ${
                                            isSubmitting
                                                ? "bg-success cursor-not-allowed"
                                                : " bg-primary hover:bg-accent"
                                        } text-white rounded text-sm`}
                                    >
                                        {isSubmitting
                                            ? "Processing..."
                                            : "Register"}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Input = ({ name, value, onChange, type = "text", placeholder }) => (
    <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full px-3 py-2  autofill:bg-text-dark-sec border-2 text-text-light rounded-md focus:outline-none focus:border-accent"
    />
);

export default Register;
