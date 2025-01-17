import React, { useState } from 'react'
import './SecondaryEducationCurriculum.css'

const SecondaryEducationCurriculum = () => {

  const[formData, setFormData] = useState({
    "file": ""
  })

  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({...prevState, [name]: value
    }));
}

const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Save the selected file
  };

  const handleSubmit = async(event) => {
    event.preventDefault()
   
    const data = new FormData();
    data.append('file', file); // Append the file
        
        
    try {
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: data,
      });
  
      if (response.ok) {
        const result = await response.text();
        alert(result);

        console.log('Form Data before navigating:', formData)
     
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading file');
    }
  };

  return (
    <div>
      <h1>Secondary Education Curriculum</h1>
      <form onSubmit={handleSubmit}>
        <label >
          <input 
          type="file" 
          placeholder='upload curriculum' 
          name='upload'
          onChange={handleFileChange} />
          <button type="submit">Upload Curriculum</button>
        </label>
        <label>
          <input type="file" placeholder="downloaded file" name='download' />
          <button type="submit">Download Curriculum</button>
        </label>
      
      </form>
    </div>
  )
}

export default SecondaryEducationCurriculum