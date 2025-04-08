import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Workout from './pages/Workout';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
		
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/workout" element={<Workout />} />
	  <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
