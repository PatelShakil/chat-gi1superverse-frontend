import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../features/auth/authSlice';
import AuthLayout from '../layouts/AuthLayout';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="relative">
          <FiUser className="absolute w-6 h-6 text-gray-400 top-3 left-3" />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <FiMail className="absolute w-6 h-6 text-gray-400 top-3 left-3" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="relative">
          <FiLock className="absolute w-6 h-6 text-gray-400 top-3 left-3" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-indigo-500 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Register;
