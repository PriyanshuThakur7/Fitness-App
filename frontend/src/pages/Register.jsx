import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
                            <option value="BULK">Bulk</option>
                            <option value="CUT">Cut</option>
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
        <div className="min-h-screen flex items-center justify-center bg-dark px-4 py-12">
            <div className="max-w-md w-full space-y-8 bg-text-dark-sec p-6 rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

                <div>
                    <h2 className="text-center text-2xl font-bold text-text-light">
                        Create your account
                    </h2>
                    <p className="text-center text-sm text-text-light-sec">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-primary hover:underline"
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
                                className="px-4 py-2 bg-primary text-text-light rounded hover:bg-accent text-sm"
                            >
                                Back
                            </button>
                        )}
                        {step < 2 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-4 py-2 bg-primary text-text-light rounded hover:bg-accent text-sm"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting} // Disable the button based on submission status
                                className={`ml-auto px-4 py-2 ${
                                    isSubmitting
                                        ? "bg-primary hover:bg-accent"
                                        : "bg-success "
                                } text-white rounded hover:bg-green-700 text-sm`}
                            >
                                {isSubmitting ? "Processing..." : "Register"}
                            </button>
                        )}
                    </div>
                </form>
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
