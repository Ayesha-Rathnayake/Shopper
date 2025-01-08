import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSign = async (event) => {
    event.preventDefault();
    if (password !== password_confirmation) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    const data = { name, email, password, password_confirmation };

    try {
      const response = await axiosInstance.post('/register', data);
      console.log('Registration Successful:', response.data);
      setLoading(false);
      alert('Registration Successful. Redirecting to login...');
      setIsSignup(false); // Switch to login view
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const handleLog = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = { email, password };

    try {
      const response = await axiosInstance.post('/login', formData);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setLoading(false);

      const userRole = response.data.user.user_type;
      navigate(userRole === 'admin' ? '/admin' : '/');
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Invalid credentials.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        {isSignup ? (
          <form onSubmit={handleSign}>
            <h1>Sign Up</h1>
            {error && <p className="error">{error}</p>}
            <div className="loginsignup-fields">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Continue'}
            </button>
            <p className="loginsignup-login">
              Already have an account?{' '}
              <span onClick={() => setIsSignup(false)} style={{ color: 'blue', cursor: 'pointer' }}>
                Login here
              </span>
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLog}>
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <div className="loginsignup-fields">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </button>
            <p className="loginsignup-login">
              Don't have an account?{' '}
              <span onClick={() => setIsSignup(true)} style={{ color: 'blue', cursor: 'pointer' }}>
                Sign up here
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
