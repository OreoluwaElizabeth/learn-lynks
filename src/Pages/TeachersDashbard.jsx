
import { Link } from "react-router-dom"
import "./TeachersDashboard.css"
import { useState } from "react"

const TeachersDashbard = () => {

    [menu, setMenu] = useState("")

   
  return (
    <div>
        <div className="menu">
            <div className="teach">Welcome to the Teachers Dashbard</div>
            <ul className='menu-items'>
                <li>
                    <label>
                        Curriculum
                        <select >
                            <option value='create' onClick={() => {setMenu("teacher")}}><Link style={{textDecoration: 'none'}} to={"/CreateCurriculum"}>Create Curriculum</Link></option>
                            <option value='edit'>Edit Curriculum</option>
                            <option value='delete'>Delete Curriculum</option>
                            <option value='view'>View Curriculum</option>
                            <option value='Download'>Download Curriculum</option>
                        </select>
                    </label>
                    
                    </li>
                <li>
                    <label>
                        Lesson Plan
                        <select>
                            <option value='create'>Create Lesson Plan</option>
                            <option value='edit'>Edit Lesson Plan</option>
                            <option value='delete'>Delete Lesson Plan</option>
                            <option value='view'>View Lesson Plan</option>
                            <option value='Download'>Download Lesson Plan</option>
                        </select>
                        </label></li>
                <li>
                    <label>Report
                        <select>
                            <option value='report'>Assessment report</option>
                            <option value='report'>Student progress report</option>
                        </select>
                        </label></li>
                <li>About</li>
            </ul>
            < hr />
        </div>
        
    </div>
  )
}

export default TeachersDashbard