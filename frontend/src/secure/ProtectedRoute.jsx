import React from 'react';
import { Navigate } from 'react-router-dom';

// Utility function to check authentication
const isAuthenticated = () => {
  return !!localStorage.getItem("authToken"); // Adjust based on your auth storage
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
