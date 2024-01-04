import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/verify/student', {
        regNo: studentId,
        studentName: studentName,
      });

      if (response.data === 'Student verification successful') {
        // If verification successful, navigate to studentHome with regNo as state
        navigate('/studentHome', { state: { regNo: studentId } });
      } else {
        // Handle unsuccessful verification (show error message, etc.)
        console.log('Student verification failed');
      }
    } catch (error) {
      // Handle errors (show error message)
      console.error('Error during student verification:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>Student Login</h2>
        <div>
          <label htmlFor="studentId">Student RegNo:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} style={{ marginTop: '10px' }}>Login</button>
      </div>
    </div>
  );
};

export default StudentLogin;
