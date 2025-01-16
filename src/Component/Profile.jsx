import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile header'>
                <div className='profile-picture'>
                    <img src='../Images/download(1).jpg' alt='Profile Picture'/>
                </div>
                <div className='profile-info'>
                    <h2>John Doe</h2>
                    <p>Software Engineer</p>
                </div>
            </div>
            <div className='profile-details'>
                <h3>Personal Details</h3>
                <ul>
                    <li><strong>Name:</strong> John Doe</li>
                    <li><strong>Email:</strong> johndoe@gmail.com</li>
                    <li><strong>Username:</strong> johnny</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;