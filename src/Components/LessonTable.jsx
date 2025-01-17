import React, { useState } from 'react'

const LessonTable = () => {

    const[formData, setFormData] = useState({
        lessonPlanName: "",
        lessonPlanDescription: "",
        lessonPlanStartDate: "",
        lessonPlanEndDate: "",
        lessonPlanDuration: "",
        lessonPlanStatus: "",
        CurriculumAdopted: "",
        material: ""
    })

    // TODO: Implement form submission and state update for the new lesson plan.
    const handleSubmit = (event) => {
        event.preventDefault()
    
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Lesson Plan Name
                    <br />
                    <input
                        type="text"
                        name="lessonPlanName"
                        value={formData.lessonPlanName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                {/* Add more form fields as needed */}
            </form>
        </div>
    );
    // TODO: Implement state updates for the form fields.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
    }
    
    
    // TODO: Implement data fetching and table rendering from the formData state.
    // Example:
    // const data = [
    //     { lessonPlanName: 'Lesson 1', lessonPlanDescription: 'Description for Lesson 1',... },
    //     { lessonPlanName: 'Lesson 2', lessonPlanDescription: 'Description for Lesson 2',... },
    //     // Add more data as needed
    // ];
    // return (
    //     <div>
    //         <table>
    //             <tr>
    //                 <th>lessonPlanName</th>
    //                 <th>lessonPlanDescription</th>
    //                 {/* Add more table headers as needed */}
    //             </tr>
    //             {data.map((lesson, index) => (
    //                 <tr key={index}>
    //                     <td>{lesson.lessonPlanName}</td>
    //                     <td>{lesson.lessonPlanDescription}</td
    //                     {/* Add more table data as needed */}
    //                 </tr>
    //             ))}
    //         </table>
    //     </div>
    // );
  return (
    <div>
        <table>
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
                ))}
        </table>
    </div>
  )
}

export default LessonTable