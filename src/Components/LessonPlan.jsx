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
                { ...formData, material: material ? material.name : 'No file uploaded' },
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
                    type="date"
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
                    Submit
                </button>
            </form>
        </div>
        <div>
        <table>  
            <thead> 
                <tr> <tr>Field</tr> <tr>Value</tr> </tr> 
                </thead> 
                <tbody> {Object.entries(formData).map(([key, value], index) => 
                    ( <th key={index}> <tr>{key}</tr> <tr>{value}</tr> </th> ))} 
                    </tbody>
            {/* <tr>
                <th>lessonPlanName</th>
                <th>lessonPlanDescription</th>
                <th>lessonPlanStartDate</th>
                <th>lessonPlanEndDate</th>
                <th>lessonPlanDuration</th>
                <th>lessonPlanStatus</th>
                <th>CurriculumAdopted</th>
                <th>material</th>
            </tr>
                {formData.map((lesson, index) => (
                <tr key={index}>
                    <td>{lesson.lessonPlanName}</td>
                    <td>{lesson.lessonPlanDescription}</td>
                    <td>{lesson.lessonPlanStartDate}</td>
                    <td>{lesson.lessonPlanEndDate}</td>
                    <td>{lesson.lessonPlanDuration}</td>
                    <td>{lesson.lessonPlanStatus}</td>
                    <td>{lesson.CurriculumAdopted}</td>
                    <td>{lesson.material}</td>
                    </tr>
                ))} */}
        </table>
    </div>
    </div>
  )
}

export default LessonPlan