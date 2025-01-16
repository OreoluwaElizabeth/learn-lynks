import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
        } else {
            setLoading(true);
            setTimeout(() => {
                console.log('Login successful:', { email, password });
                setLoading(false);
            }, 2000)
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