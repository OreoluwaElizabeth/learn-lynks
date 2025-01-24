import React, { useState } from 'react'
import './LessonPlan.css'

const LessonPlan = () => {

    const[formData, setFormData] = useState({
        lessonPlanName: "",
        lessonPlanDescription: "",
        lessonPlanStartDate: "",
        lessonPlanEndDate: "",
        lessonPlanDuration: "",
        lessonPlanStatus: "",
        CurriculumAdopted: "",
        material: "",
    })

    const [lessonPlans, setLessonPlans] = useState([]);
    const [material, setMaterial] = useState(null);
    const [editingLessonPlan, setEditingLessonPlan] = useState(null);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value
        }));
    }

    const handleFileChange = (event) => {
        setMaterial(event.target.files[0]); // Save the selected file
        
      };

    const handleSubmit = async(event) => {
        event.preventDefault()

        if(editingLessonPlan){
          handleUpdate(); 
          return;
        }
       
        const data = new FormData();
        data.append('lessonPlanName', formData.lessonPlanName);
        data.append('lessonPlanDescription', formData.lessonPlanDescription);
        data.append('lessonPlanStartDate', formData.lessonPlanStartDate);
        data.append('lessonPlanEndDate', formData.lessonPlanEndDate);
        data.append('lessonPlanStatus', formData.lessonPlanStatus);
        data.append('lessonPlanDuration', formData.lessonPlanDuration);
        data.append('CurriculumAdopted', formData.CurriculumAdopted);
        data.append('material', material); // Append the file
        
        
          try {
            const response = await fetch('http://localhost:8080/lesson-plan', {
              method: 'POST',
              body: data,
            });
        
            if (response.ok) {
              const result = await response.json();
              alert(result);

              setLessonPlans((prevLessonPlans) => [
                ...prevLessonPlans,
                { ...formData, material: material.name},
              ]);

              setFormData({
                lessonPlanName: '',
                lessonPlanDescription: '',
                lessonPlanStartDate: '',
                lessonPlanEndDate: '',
                lessonPlanStatus: '',
                CurriculumAdopted: '',
              });
              setMaterial(null);

              console.log('Form Data before navigating:', formData)
           
            } else {
              alert('Failed to create Lesson plan');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the lesson plan');
          }
        };

        const handleDelete = async(lesson) => {
          const confirmDelete = window.confirm('Are you sure you want to delete this lesson?');
          if (!confirmDelete) return;
          console.log("Attempting to delete" )

          const payload = { name: lesson.lessonPlanName}

          try{
            const response = await fetch("http://localhost:8080/delete-plan", {
              method: "DELETE",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            })

            let result;
            const text= await response.text();
            if (text) {
              result = JSON.parse(text);
            }
            console.log(result);

            if (response.ok) {
              alert('Lesson Plan deleted successfully');
              setLessonPlans(lessonPlans.filter(item => item.lessonPlanName !== lesson.lessonPlanName)); // Remove from UI
          } else {
              alert('Failed to delete lesson plan: ${result.message}');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while deleting the lesson plan');
      }
        }

        const handleEdit = (lesson) => {
          setFormData({
            lessonPlanName: lesson.lessonPlanName,
            lessonPlanDescription: lesson.lessonPlanDescription,
            lessonPlanStartDate: lesson.lessonPlanStartDate,
            lessonPlanEndDate: lesson.lessonPlanEndDate,
            lessonPlanStatus: lesson.lessonPlanStatus,
            CurriculumAdopted: lesson.CurriculumAdopted,
            material: lesson.material,
          })
          setEditingLessonPlan(lesson)
          setMaterial(null)
        }
      
        const handleUpdate = async() => {

        const data = new FormData();
        data.append('lessonPlanName', formData.lessonPlanName)
        data.append('lessonPlanDescription', formData.lessonPlanDescription)
        data.append('lessonPlanStartDate', formData.lessonPlanStartDate)
        data.append('lessonPlanEndDate', formData.lessonPlanEndDate)
        data.append('lessonPlanStatus', formData.lessonPlanStatus)
        data.append('CurriculumAdopted', formData.CurriculumAdopted)
        data.append('lessonPlanDuration', formData.lessonPlanDuration); // Not required in update request
        if (material) {
          data.append('material', material);
      } else if (editingLessonPlan && editingLessonPlan.material) {
          // If no new file is selected, keep existing file
          data.append('existingMaterial', editingLessonPlan.material);
      }else {
        console.warn("No material file provided, which may cause an error.");
    }

    console.log("FormData before sending:");
    for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value);
    }


        try {
          const response = await fetch('http://localhost:8080/update-plan', {
              method: 'PUT',
              // headers: {
              //     'Content-Type': 'application/json',
              // },
              body: data
          });
  
          if (response.ok) {
              alert('Lesson plan updated successfully');
              setLessonPlans(lessonPlans.map(item =>
                item.lessonPlanName === editingLessonPlan.lessonPlanName
                    ? { ...formData, material: material ? material.name : item.material }
                    : item));
              setEditingLessonPlan(null); // Reset the editing curriculum reference
              setFormData({ lessonPlanName: "",
                lessonPlanDescription: "",
                lessonPlanStartDate: "",
                lessonPlanEndDate: "",
                lessonPlanDuration: "",
                lessonPlanStatus: "",
                CurriculumAdopted: "",
                material: "" });
            
            
          } else {
            console.error("Failed to update lesson plan:", await response.text());
              alert('Failed to update lesson plan:');
              
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while updating the lesson plan');
          
      }
      }
    
  return (
    <div>
        <h1>Lesson Plan</h1>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label for ="name">
                    Lesson Name
                    <br /> 
                    <input 
                    type="text"
                    name='lessonPlanName'
                    value={formData.lessonPlanName}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    Description 
                    <br />
                    <input 
                    type="text"
                    name='lessonPlanDescription'
                    value={formData.lessonPlanDescription}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    Start Date
                    <br /> 
                    <input 
                    type="date"
                    name='lessonPlanStartDate'
                    value={formData.lessonPlanStartDate}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    End Date 
                    <br />
                    <input 
                    type="date"
                    name='lessonPlanEndDate'
                    value={formData.lessonPlanEndDate}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    Duration 
                    <br />
                    <input 
                    type="number"
                    name='lessonPlanDuration'
                    value={formData.lessonPlanDuration}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    Status 
                    <br />
                    <input 
                    type="text"
                    name='lessonPlanStatus'
                    value={formData.lessonPlanStatus}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    curriculum used 
                    <br />
                    <input 
                    type="text"
                    name='CurriculumAdopted'
                    value={formData.CurriculumAdopted}
                    onChange={handleChange} />
                </label>
                <br />
                <label>
                    Learning Materials 
                    <br />
                    <input 
                    type="file"
                    name='material'
                    // value={formData.material}
                    onChange={handleFileChange} />
                </label>
                <br />
                <button type='submit'> 
                {editingLessonPlan ? "Update" : "Submit"}
                </button>
            </form>
        </div>
        <div>
        <table>  
            <thead> 
                <tr> 
                <th>lessonPlanName</th>
                <th>lessonPlanDescription</th>
                <th>lessonPlanStartDate</th>
                <th>lessonPlanEndDate</th>
                <th>lessonPlanDuration</th>
                <th>lessonPlanStatus</th>
                <th>CurriculumAdopted</th>
                <th>material</th>
                </tr> 
                </thead> 
                <tbody> {lessonPlans.map((lesson, index) =>(
                  <tr key={index}>
                    <td>{lesson.lessonPlanName}</td>
                    <td>{lesson.lessonPlanDescription}</td>
                    <td>{lesson.lessonPlanStartDate}</td>
                    <td>{lesson.lessonPlanEndDate}</td>
                    <td>{lesson.lessonPlanDuration}</td>
                    <td>{lesson.lessonPlanStatus}</td>
                    <td>{lesson.CurriculumAdopted}</td>
                    <td>{lesson.material}</td>
                    <td>
                      <button onClick={() => handleEdit(lesson)}>Update</button>
                      <button onClick={() => handleDelete(lesson)}>Delete</button>  
                    </td>
                  </tr>
                  
                ))}
                    </tbody>
        </table>
    </div>
    </div>
  )
}

export default LessonPlan