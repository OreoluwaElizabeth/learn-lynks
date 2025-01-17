import React from 'react'
import { Link } from 'react-router-dom'
import './AvailableCurriculum.css'

const AvailableCurriculum = () => {
  return (
    <div className='curriculum'>
      <h1>Select an Option</h1>
        <div className="links">
          <ul>
            <li>
              <Link to="/secondaryCurriculum">Secondary Education/High School Curriculums</Link>
              </li>
            <li>
              <Link to="/universityCurriculum" >University Curriculums</Link>
              </li>
        </ul>
        </div>
        
    </div>
  )
}

export default AvailableCurriculum