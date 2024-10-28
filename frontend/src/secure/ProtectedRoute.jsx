// src/secure/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    const tokenExpiry = parseInt(localStorage.getItem("tokenExpiry"), 10);

    if (token && tokenExpiry && tokenExpiry > Date.now()) {
      return true;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    return false;
  };

  useEffect(() => {
    let timer, redirectTimer;

    if (isAuthenticated()) {
      timer = setTimeout(() => {
        // Display alert with custom message
        window.alert("Session expired. You will be redirected shortly.");

        // Wait for 2 seconds before redirecting
        redirectTimer = setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiry");
          localStorage.setItem("sessionExpired", "true");
          setRedirect(true);
        }, 1000); // 1 seconds
      }, 10 * 6 * 10000); // 10 min for session expiration
    } else {
      navigate("/admin");
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  if (redirect) {
    return <Navigate to="/admin" />;
  }

  if (!isAuthenticated()) {
    return <Navigate to="/admin" />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;
