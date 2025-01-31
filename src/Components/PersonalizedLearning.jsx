import React, { useState } from 'react'

const PersonalizedLearning = () => {

    const[formData, setFormData] = useState({
        username: "",
    })

    const handleChange = (event) => {
        const{name, value} = event.target
        setFormData((prevState) => ({...prevState, [name]: value}))
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            const response = await fetch("http://localhost:8080/request-with-username", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),  // Assuming formData is your state variable
        })
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        alert('Personalized Learning Plan created successfully');
        setFormData({
            username: "",
        })
        
        } catch (err) {
            console.error('Error:', err);
            alert('An error occurred while creating personalized learning plan');
        }

    }

    return (
        <div>
            <h1>Personalized Learning</h1>
            <p>Personalized learning for students</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Username 
                    <input type="text"
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                     />
                </label>
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Lesson Plan Name</th>
                        <th>Lesso</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add rows here */}
                </tbody>
            </table>
        </div>
    )
}


export default PersonalizedLearning