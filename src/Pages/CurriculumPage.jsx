import React from 'react'
import { useLocation } from 'react-router-dom';
import './CurriculumPage.css'

const CurriculumPage = () => {
  const location = useLocation();
  // const curriculumData = location.state?.curriculumData;
  // const description = location.state?.name || 'No curriculum provided';
  // const creator = location.state?.name || 'No curriculum provided';
  // const materials = location.state?.name || 'No curriculum provided';

  const curriculumData = Array.isArray(location.state?.curriculumData) ? location.state.curriculumData : [];

if (curriculumData.length === 0) {
  return <p>No data available. Please go back and create a curriculum.</p>;
}

  if (!curriculumData) {
    return <p>No data available. Please go back and create a curriculum.</p>;
  }

  console.log('Received data in CurriculumPage:', curriculumData);

  return (
    <div className='container'>
        <h1>Our Curriculum</h1>
        <div className="search-curriculum">
            <input type="text" placeholder='Search Curriculum' />
            <button>Search</button>
        </div>
        <h2>Prepared Curriculum</h2>
        <table className='tables'>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Creator</th>
            <th>Material</th>
          </tr>
        </table>
        {curriculumData.map((curriculum, index) => (
          <div key={index} className="curriculum">
            <p>Curriculum Name: {curriculum.name}</p>
            <p>Curriculum description: {curriculum.description}</p>
            <p>Curriculum creator: {curriculum.creator}</p>
            <p>Curriculum material: {curriculum.materials}</p>
            <div className="selection-icons">
                <button>Add</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default CurriculumPage