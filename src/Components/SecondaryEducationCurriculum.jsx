import React, { useState } from 'react'
import './SecondaryEducationCurriculum.css'

const SecondaryEducationCurriculum = () => {

  const[formData, setFormData] = useState({
    "file": ""
  })

  const [file, setFile] = useState(null);
  const[uploadaData, setUploadaData] = useState(null)

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({...prevState, [name]: value
    }));
}

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);  
  console.log("Selected file:", selectedFile);
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

        setUploadaData((prev) => [...(prev || []), { fileName: file.name }]);
     
      } else {
        const errorText = await response.text();
            alert(`Failed to upload file: ${errorText}`);
            console.error("Upload failed:", errorText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading file');
    }
  };

  const handleDownload = async(fileName) => {
    const data = new FormData();
    data.append('file', file);

    try{
      const response = await fetch(`http://localhost:8080/download/${fileName}`, {
        method: 'GET',
     
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert('Failed to download file');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while downloading file');
    }
  }

  return (
    <div>
      <h1>Secondary Education Curriculum</h1>
      <form onSubmit={handleSubmit}>
        <label >
          Upload Curriculum
          <input 
          type="file" 
          placeholder='upload curriculum' 
          name='file'
          onChange={handleFileChange} />
          <button type="submit">Upload Curriculum</button>
        </label>
       
      </form>
      <div>
      <h2>Uploaded Curriculum</h2>
      <br />
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadaData?.map((curriculum, index) => (
              <tr key={index}>
                <td>{curriculum.fileName}</td>
                <td>
                <button key={index} onClick={() => handleDownload(curriculum.fileName)}>
    Download {curriculum.fileName}
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>    
    </div>
  )
}

export default SecondaryEducationCurriculum