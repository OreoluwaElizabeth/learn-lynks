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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       
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
                    type="boolean"
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
                    value={formData.material}
                    onChange={handleChange} />
                </label>
                <br />
                <button type='submit'> 
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default LessonPlan