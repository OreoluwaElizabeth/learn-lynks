import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCurriculum.css'

const CreateCurriculum = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        creator: "",
        materials: null,
       
    })

    const [materials, setMaterials] = useState(null);

    const navigate = useNavigate();
    const [curriculumData, setCurriculumData] = useState([])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value
        }));

    };

    const handleFileChange = (event) => {
        setMaterials(event.target.files[0]); // Save the selected file
      };
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('creator', formData.creator);
        data.append('materials', materials); // Append the file
        // data.append('data',
        //   JSON.stringify({
        //     name: formData.name,
        //     description: formData.description,
        //     creator: formData.creator,
        //   })
        // )
        
          try {
            const response = await fetch('http://localhost:8080/api/curriculum/create', {
              method: 'POST',
              // headers: {
              //   'Content-Type': 'application/json',
              // },
              // headers: {
              //   'Content-Type': 'multipart/form-data',
              // },
              body: data,
            });
        
            if (response.ok) {
              const result = await response.json();
              alert(result);

              console.log('Form Data before navigating:', formData)
              console.log('Current curriculumData:', curriculumData);
              
              setCurriculumData((prev) => {
                const updatedData = [...prev, {...formData, fileName: materials.name}];
                navigate('/curriculumPage', { state: { curriculumData: updatedData } });
                return updatedData;
              });
              

              // navigate('/curriculumPage', { state: { curriculumData: [...curriculumData, formData] } });
              console.log('Navigating with curriculumData:', [...curriculumData, formData]);

            } else {
              alert('Failed to create curriculum');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the curriculum');
          }
        };
        
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
    <label>
      
      <input
        type="text"
        name="name"
        placeholder='Enter name'
        value={formData.name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
     
      <input
        type="text"
        name="description"
        placeholder='Enter description'
        value={formData.description}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
   
      <input
        type="text"
        name="creator"
        placeholder='Enter creator'
        value={formData.creator}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      <input
        type='file'
        name="materials"
        placeholder='upload materials'
        value={formData.materials}
        onChange={handleFileChange}
      />
    </label>
    <br />
    <button type="submit" >Submit</button>
  </form>
  <div className="curriculum-tems">
            <h2>Prepared Curriculum</h2>
            <p>Curriculum Name: {formData.name}</p>
            <p>Curriculum description: {formData.description}</p>
            <p>Curriculum creator: {formData.creator}</p>
            <p>Curriculum material: {formData.materials}</p>
            <div className="selection-icons">
                <button>Add</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
     </div>
);
 
}

export default CreateCurriculum