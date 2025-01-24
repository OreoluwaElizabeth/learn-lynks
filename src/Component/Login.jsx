import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


const ROLES = {
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    PARENT: 'PARENT',
};
  
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { username, password };
  
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        const role = result.role;
        console.log('Server Response:', result);
        console.log('Role:', role); 
        if (role === ROLES.STUDENT) {
          navigate('/student/dashboard');
        } else if (role === ROLES.TEACHER) {
          navigate('/teacher/dashboard');
        } else if (role === ROLES.PARENT) {
          navigate('/parent/dashboard');
        }
      } else {
        alert('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in');
    }
  };  
  
  return (
    <div className='login-page'>
      <div className='login-form'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Username *</label>
            <input
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Password *</label>
            <input
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          {loading && (
            <div className='loading-animation'>
              <div className='spinner' />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
