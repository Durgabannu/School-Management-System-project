import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const TeacherLogin = () => {
  const [teacherName, setTeacherName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any necessary actions upon login
    if (isLoggedIn) {
      // You can fetch additional data or perform other actions here
      console.log('Teacher logged in');
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      // Perform registration logic here
      // Assuming registration is successful for demonstration purposes
      setRegistrationSuccessful(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleShowStudentDetails = () => {
    navigate('/student-details');
  };

  const handleShowAllStudents = () => {
    navigate('/all-students');
  };

  const toggleMode = () => {
    // Toggle between login and register modes
    setIsRegistering((prev) => !prev);
    // Reset registration status when switching modes
    setRegistrationSuccessful(false);
  };

  return (
    <table
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        margin: 'auto',
        height: '300px', 
      }}
    >
      <tbody>
        <tr>
          <td colSpan="2" style={{ textAlign: 'center' }}>
            <h2>{isRegistering ? 'Teacher Registration' : 'Teacher Login'}</h2>
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: 'right', padding: '10px' }}>
            <label htmlFor="teacherName">Teacher Name:</label>
          </td>
          <td style={{ padding: '10px' }}>
            <input
              type="text"
              id="teacherName"
              placeholder="Teacher Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: 'right', padding: '10px' }}>
            <label htmlFor="password">Password:</label>
          </td>
          <td style={{ padding: '10px' }}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
            {isRegistering ? (
              <button onClick={handleRegister}>Register</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
            <button onClick={toggleMode}>
              {isRegistering ? 'Switch to Login' : 'Switch to Register'}
            </button>
          </td>
        </tr>
        {isLoggedIn && (
          <>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                <p>Welcome, {teacherName}!</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
                <button onClick={handleShowStudentDetails}>Add Student Details</button>
                <button onClick={handleShowAllStudents}>Show All Students</button>
              </td>
            </tr>
          </>
        )}
        {registrationSuccessful && (
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', padding: '10px' }}>
              <p>Registration successful! Please login.</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TeacherLogin;
