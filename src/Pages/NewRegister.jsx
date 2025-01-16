import React, { useState } from 'react'

const NewRegister = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        username:'',
        password:'',
        role:'',
    })

    const handleChange = (event) => {
        const{name, value} = event.target
        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (response.ok) {
              const result = await response.text();
              alert(result);
            } else {
              alert('Failed to Register');
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
                First Name
                <input 
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}/>
            </label>
            <label>
                Last Name
                <input 
                type="text"
                value={formData.lastName}
                name='lastName'
                onChange={handleChange} />
            </label>
            <label>
                Email
                <input 
                type="email"
                value={formData.email}
                name='email'
                onChange={handleChange} />
            </label>
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
            <label>
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="STUDENT">Student</option>
            <option value="TEACHER">Teacher</option>
            <option value="PARENT">Parent</option>
          </select>
        </label>
            
            <button type="Register">Submit</button>
        </form>
    </div>
  )
}

export default NewRegister