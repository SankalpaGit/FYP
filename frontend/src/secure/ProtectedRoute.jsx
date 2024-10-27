import React, { useEffect, useState, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const IDLE_TIMEOUT = 60 * 60 * 1000; // 1 hour

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const refreshToken = async () => {
  try {
    const response = await axios.post("/api/refresh-token", {
      token: localStorage.getItem("token")
    });
    const newToken = response.data.token;
    localStorage.setItem("token", newToken);
    return true;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  const checkAndRefreshToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const expiresSoon = decoded.exp * 1000 - Date.now() < 10 * 60 * 1000; // within 10 min of expiration

      if (expiresSoon) {
        const refreshed = await refreshToken();
        if (!refreshed) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const resetIdleTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    checkAndRefreshToken();

    const events = ["mousemove", "keydown", "click"];
    events.forEach((event) => window.addEventListener(event, resetIdleTimer));

    const idleTimer = setInterval(() => {
      if (!isActive) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setIsActive(false);
      }
    }, IDLE_TIMEOUT);

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetIdleTimer));
      clearInterval(idleTimer);
    };
  }, [checkAndRefreshToken, resetIdleTimer, isActive, navigate]);

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
