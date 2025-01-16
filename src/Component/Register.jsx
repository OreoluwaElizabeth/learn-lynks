import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      // console.log('Form submitted:', { firstName, lastName, email, password, role });
      try {

        const response = await axios.post('http://localhost:8080/user/register', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          role: role
        });
        
      
        if (role === 'STUDENT') {
          navigate('/student/dashboard');
        } else if (role === 'TEACHER') {
          navigate('/teacher/dashboard');
        } else {
          navigate('/parent/dashboard');
        }
        
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error('Error response:', error.response.data);
        } else if (error.request) {
          // Request was made but no response received
          console.error('Error request:', error.request);
        } else {
          // Something happened in setting up the request
          console.error('Error message:', error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    return (
        <div className='register-page'>
            <div className='register-form'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                <div className='form-group'>
                        <label>First Name *</label>
                        <input 
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Last Name *</label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Username *</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Password *</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>ConfirmPassword *</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label>Role *</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="">Select Role</option>
                        <option value="TEACHER">TEACHER</option>
                        <option value="STUDENT">STUDENT</option>
                        <option value="PARENT">PARENT</option>
                    </select>
                    <p>Selected Role: {role}</p>
                    </div>

                    <button type='submit' disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
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

export default Register;