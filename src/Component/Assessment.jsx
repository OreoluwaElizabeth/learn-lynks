import React, { useState, useEffect } from 'react';
import './assessment.css';

const Assessment = () => {
  const [assessments, setAssessments] = useState([]);
  const [newAssessment, setNewAssessment] = useState({
    lessonPlan: '',
    completionDate: '',
    averageScore: 0,
    timeSpent: 0,
    totalScore: 0,
    grade: '',
    score: 0,
    numberOfQuizzesTaken: 0,
  });
  const [editingAssessment, setEditingAssessment] = useState(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await fetch('/api/assessments');
        const data = await response.json();
        setAssessments(data);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      }
    };
    fetchAssessments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssessment({ ...newAssessment, [name]: value });
  };

  const handleCreateAssessment = async () => {
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAssessment),
      });
      const data = await response.json();
      setAssessments([...assessments, data]);
      setNewAssessment({
        lessonPlan: '',
        completionDate: '',
        averageScore: 0,
        timeSpent: 0,
        totalScore: 0,
        grade: '',
        score: 0,
        numberOfQuizzesTaken: 0,
      });
    } catch (error) {
      console.error('Error creating assessment:', error);
    }
  };

  const handleUpdateAssessment = async (id) => {
    try {
      const response = await fetch(`/api/assessments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingAssessment),
      });
      const data = await response.json();
      setAssessments(assessments.map((a) => (a.id === id ? data : a)));
      setEditingAssessment(null);
    } catch (error) {
      console.error('Error updating assessment:', error);
    }
  };

  const handleDeleteAssessment = async (id) => {
    try {
      await fetch(`/api/assessments/${id}`, { method: 'DELETE' });
      setAssessments(assessments.filter((a) => a.id !== id));
    } catch (error) {
      console.error('Error deleting assessment:', error);
    }
  };

  return (
    <div className='assessment-container'>
      <h2>Assessments</h2>


      <div className="form-container">
        <h3>Create New Assessment</h3>
        <input
          type="text"
          name="lessonPlan"
          placeholder="Lesson Plan"
          value={newAssessment.lessonPlan}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="completionDate"
          value={newAssessment.completionDate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="averageScore"
          placeholder="Average Score"
          value={newAssessment.averageScore}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="timeSpent"
          placeholder="Time Spent (minutes)"
          value={newAssessment.timeSpent}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="totalScore"
          placeholder="Total Score"
          value={newAssessment.totalScore}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={newAssessment.grade}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="score"
          placeholder="Score"
          value={newAssessment.score}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="numberOfQuizzesTaken"
          placeholder="Number of Quizzes Taken"
          value={newAssessment.numberOfQuizzesTaken}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateAssessment}>Create Assessment</button>
      </div>

      
      <div className='assessment-list'>
        {assessments.map((assessment) => (
          <div key={assessment.id} className="assessment-card">
            <h3>{assessment.lessonPlan}</h3>
            <p><strong>Completion Date:</strong> {assessment.completionDate}</p>
            <p><strong>Average Score:</strong> {assessment.averageScore}</p>
            <p><strong>Time Spent:</strong> {assessment.timeSpent} mins</p>
            <p><strong>Total Score:</strong> {assessment.totalScore}</p>
            <p><strong>Grade:</strong> {assessment.grade}</p>
            <p><strong>Score:</strong> {assessment.score}</p>
            <p><strong>Quizzes Taken:</strong> {assessment.numberOfQuizzesTaken}</p>
            <button onClick={() => setEditingAssessment(assessment)}>Edit</button>
            <button onClick={() => handleDeleteAssessment(assessment.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editingAssessment && (
        <div className="form-container">
          <h3>Edit Assessment</h3>
          <input
            type="text"
            name="lessonPlan"
            placeholder="Lesson Plan"
            value={editingAssessment.lessonPlan}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, lessonPlan: e.target.value })}
          />
          <input
            type="date"
            name="completionDate"
            value={editingAssessment.completionDate}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, completionDate: e.target.value })}
          />
          <input
            type="number"
            name="averageScore"
            placeholder="Average Score"
            value={editingAssessment.averageScore}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, averageScore: e.target.value })}
          />
          <input
            type="number"
            name="timeSpent"
            placeholder="Time Spent (minutes)"
            value={editingAssessment.timeSpent}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, timeSpent: e.target.value })}
          />
          <input
            type="number"
            name="totalScore"
            placeholder="Total Score"
            value={editingAssessment.totalScore}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, totalScore: e.target.value })}
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={editingAssessment.grade}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, grade: e.target.value })}
          />
          <input
            type="number"
            name="score"
            placeholder="Score"
            value={editingAssessment.score}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, score: e.target.value })}
          />
          <input
            type="number"
            name="numberOfQuizzesTaken"
            placeholder="Number of Quizzes Taken"
            value={editingAssessment.numberOfQuizzesTaken}
            onChange={(e) => setEditingAssessment({ ...editingAssessment, numberOfQuizzesTaken: e.target.value })}
          />
          <button onClick={() => handleUpdateAssessment(editingAssessment.id)}>Update Assessment</button>
          <button onClick={() => setEditingAssessment(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Assessment;