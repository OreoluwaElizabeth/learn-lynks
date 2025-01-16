import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (response.ok) {
              const result = await response.text();
              alert(result);
            } 
            else {
              alert('Failed to Register');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the curriculum');   
          }
    };

    return (
        <div className='login-page'>
            <div className='login-form'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Email *</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password *</label>
                        <input 
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type='submit' disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                    {loading && (
                        <div className='loading-animation'>
                            <div className='spinner'/>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;