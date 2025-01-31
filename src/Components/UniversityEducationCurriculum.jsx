import React from 'react'
import { Link } from 'react-router-dom'
import './UniversityEducationCurriculum.css'

const UniversityEducationCurriculum = () => {
  return (
    <div>
      <h1>University Curriculum</h1>
      <div className="container">
        <div>
        <form>
        <label >
          <input type="file" placeholder='upload curriculum' name='upload' />
          <button type="submit">Upload Curriculum</button>
        </label>
        <label>
          <input type="file" placeholder="downloaded file" name='download' />
          <button type="submit">Download Curriculum</button>
        </label>
      
        
        <label>
          Connect to the website directly through link
          <input type="url" placeholder="website link" name='website' />

          <button type="submit">Connect</button>
        </label>
      </form>
      </div>
      
      <div>
        <h1>Link to World Curriculums</h1>
        <h3>According to current rankings and expert opinions, 
          some of the most highly regarded curriculums for university 
          education globally include those offered in the 
          United States (with its emphasis on diverse subjects and hands-on learning), 
          the United Kingdom (known for its rigorous academic standards), 
          Australia (with a strong focus on practical skills), 
          and the Netherlands (recognized for its innovative and student-centered approach)</h3>
        <div>
        <Link to="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/">Cambridge curriculum</Link>
        <br />
        <Link to="https://www.britannica.com/education/World-Curriculums">Britannica curriculum</Link>
        <br />
        <Link to="https://www.nationalgeographic.com/education/world-curriculums/">National Geographic curriculum</Link>
      
          </div>
        
      </div>
      <Link to="http://www.google.com">Go to Google</Link>
      


        <ul>
        <Link to="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/">Cambridge curriculum</Link>
        </ul>

      </div>
      </div>
    // </div>
  )
};

export default UniversityEducationCurriculum;