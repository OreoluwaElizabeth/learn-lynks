import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
       
        username:'',
        password:'',
        
    })

    const handleChange = (event) => {
        const{name, value} = event.target
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
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
              window.location.href = '/teacher/dashboard' // Redirect to dashboard after successful login
            } else {
              alert('Failed to login');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the curriculum');
          }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
           
            <label>
                UserName
                <input 
                type="text"
                value={formData.username}
                name='username'
                onChange={handleChange} />
            </label>
            <label>
                Password
                <input 
                type="password"
                value={formData.password}
                name='password'
                onChange={handleChange} />
            </label>
            
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login