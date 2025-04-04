// src/utils/auth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/');
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return { user, login, logout, isAuthenticated };
};