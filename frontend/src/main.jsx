import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile1 from "./pages/Profile1";
import Workout from "./pages/Workout";
import Dashboard from "./pages/Dashboard";
import Hero from "./pages/Hero";
import Pricing from "./pages/pricing";
import ContactUs from "./pages/ContactUs";
import Dash2 from "./pages/Dash2";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/dash2" element={<Dash2 />} />
            <Route path="/profile1" element={<Profile1 />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
