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
    const [editingCurriculum, setEditingCurriculum] = useState(null);

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

        if(editingCurriculum) {
          handleUpdate();
          return;
        }

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
                // navigate('/curriculumPage', { state: { curriculumData: updatedData } });
                return updatedData;
              });

              setFormData({ name: "", description: "", creator: "", materials: null });
              
              console.log('Navigating with curriculumData:', [...curriculumData, formData]);

            } else {
              alert('Failed to create curriculum');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the curriculum');
          }
        };

        const handleDelete = async (curriculum) => {
          const confirmDelete = window.confirm(`Are you sure you want to delete ${curriculum.name}?`);
          if (!confirmDelete) return;

          console.log("Attempting to delete curriculum:", curriculum.name);

          const payload = { name: curriculum.name }; 
          console.log("Delete request payload:", payload);
      
          try {
              const response = await fetch('http://localhost:8080/api/curriculum/deleteCurricula', {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name: curriculum.name }) // Adjust according to your backend request model
              });

              const result = await response.json();

              // let result 
              // const text = await response.json();
              // if(text){
              //   result = JSON.parse(text);
              // }
              console.log(result)
      
              if (response.ok) {
                  alert('Curriculum deleted successfully');
                  setCurriculumData(curriculumData.filter(item => item.name !== curriculum.name)); // Remove from UI
              } else {
                  alert('Failed to delete curriculum: ${result.message}');
              }
          } catch (error) {
              console.error('Error:', error);
              alert('An error occurred while deleting the curriculum');
          }
      };
      
      const handleEdit = (curriculum) => {
          setFormData({
              name: curriculum.name,
              description: curriculum.description,
              creator: curriculum.creator,
              materials: curriculum.materials,
          });
      
          setEditingCurriculum(curriculum); // Track the curriculum being edited
          setMaterials(null)
      };
      
      const handleUpdate = async () => {
        
        if (!editingCurriculum) {
          console.error("No curriculum selected for editing");
          alert("No curriculum selected for editing");
          return;
      }

      const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('creator', formData.creator);
        data.append('materials', materials.name || editingCurriculum.materials);
      console.log("Updating curriculum:", editingCurriculum.name);

          try {
              const response = await fetch('http://localhost:8080/api/curriculum/update', {
                  method: 'PUT',
                  // headers: {
                  //     'Content-Type': 'application/json',
                  // },
                  body: data
              });
      
              if (response.ok) {
                  alert('Curriculum updated successfully');
                  setCurriculumData(curriculumData.map(item => item.name === editingCurriculum.name ? {...formData, fileName:formData.materials } : item));
                  setEditingCurriculum(null); // Reset the editing curriculum reference
                  setFormData({ name: "", description: "", creator: "", materials: "" });
                  // setMaterials(null); // Reset the selected file reference
                  // navigate('/curriculumPage'); // Navigate to the curriculum page with updated data
                  // console.log('Navigating with updated curriculumData:', curriculumData);
                  // Reset the form fields
                  // navigate('/curriculumPage', { state: { curriculumData: curriculumData } });
                
              } else {
                console.error("Failed to update curriculum:", await response.text());
                  alert('Failed to update curriculum');
              }
          } catch (error) {
              console.error('Error:', error);
              alert('An error occurred while updating the curriculum');
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
        // onChange={handleChange}
        onChange={handleFileChange}
      />
    </label>
    <br />
    <button type="submit">
    {editingCurriculum ? "Update" : "Submit"}
</button>

  </form>
  
        <div className="curriculum-items"> 
          <h2>Prepared Curriculum</h2> 
          <table> 
            <thead> 
              <tr> 
                <th>Name</th> 
                <th>Description</th> 
                <th>Creator</th> 
                <th>Materials</th> 
                </tr> 
                </thead> 
                <tbody> {curriculumData.map((curriculum, index) => ( 
                  <tr key={index}> 
                  <td>{curriculum.name}</td> 
                  <td>{curriculum.description}</td> 
                  <td>{curriculum.creator}</td> 
                  <td>{curriculum.fileName}</td> 
                   <td>
                <button onClick={() => handleEdit(curriculum)}>Edit</button>
                <button onClick={() => handleDelete(curriculum)}>Delete</button>
            </td>
                  </tr> ))} 
                  </tbody> 
                  </table>
                 
                  </div>
     </div>
);
 
}

export default CreateCurriculum