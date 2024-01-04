import React, { useState } from 'react';

const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = useState({
    regNo: '',
    studentName: '',
    studentClass: '',
    telugu: '',
    hindi: '',
    english: '',
    maths: '',
    science: '',
    social: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleSubmit = async () => {
    alert('Student details added successfully!');
    const backendURL = 'http://localhost:8080/addstudents';

    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentDetails),
      });

      if (response.ok) {
        console.log('Student details added to the database');
        // You can perform additional actions here if needed
      } else {
        console.error('Failed to add student details to the database');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '500px' }}>
      <table border="2" style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: 'center' }}>Add Student Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reg No:</td>
            <td>
              <input type="text" name="regNo" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Student Name:</td>
            <td>
              <input type="text" name="studentName" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Student Class:</td>
            <td>
              <input type="text" name="studentClass" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Telugu:</td>
            <td>
              <input type="text" name="telugu" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Hindi:</td>
            <td>
              <input type="text" name="hindi" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>English:</td>
            <td>
              <input type="text" name="english" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Maths:</td>
            <td>
              <input type="text" name="maths" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Science:</td>
            <td>
              <input type="text" name="science" onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>Social:</td>
            <td>
              <input type="text" name="social" onChange={handleInputChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSubmit} style={{ alignSelf: 'center', marginTop: '20px' }}>Submit</button>

    </div>
  );
};

export default StudentDetails;
