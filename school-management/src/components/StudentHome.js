

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const StudentHome = () => {
  const location = useLocation();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students/${location.state.regNo}`);
        setStudentDetails(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, [location.state.regNo]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'600px' }}>
      <table style={{ border: '1px solid black', padding: '10px' }}>

    <div>
      <h2>Welcome to Student Login</h2>
      {studentDetails ? (
        <div>
          <p>Student ID: {studentDetails.id}</p>
          <p>Reg No: {studentDetails.regNo}</p>
          <p>Student Name: {studentDetails.studentName}</p>
          <p>Student Class: {studentDetails.studentClass}</p>
          <p>Telugu: {studentDetails.telugu}</p>
          <p>Hindi: {studentDetails.hindi}</p>
          <p>English: {studentDetails.english}</p>
          <p>Maths: {studentDetails.maths}</p>
          <p>Science: {studentDetails.science}</p>
          <p>Social: {studentDetails.social}</p>
        </div>
      ) : (
      
        <p>Loading student details...</p>
      )}
    </div>
    </table>
    </div>
  );
};

export default StudentHome;

