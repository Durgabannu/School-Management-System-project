import React, { useState, useEffect } from 'react';

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editedMarks, setEditedMarks] = useState({});

  useEffect(() => {
    // Fetch all student details from the backend when the component mounts
    const fetchStudents = async () => {
      const backendURL = 'http://localhost:8080/getallstudents';

      try {
        const response = await fetch(backendURL);

        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch student details');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchStudents();
  }, []); 

  const handleEdit = (id) => {
    setEditingStudentId(id);
    // Initialize editedMarks with the current marks
    setEditedMarks(students.find((student) => student.id === id));
  };

  const handleDelete = async (id) => {
    const backendURL = `http://localhost:8080/delete/student/${id}`;

    try {
      const response = await fetch(backendURL, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted student from the state
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
        console.log(`Student with ID ${id} deleted successfully`);
      } else {
        console.error(`Failed to delete student with ID ${id}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSaveEdit = async (id, updatedStudent) => {
    const backendURL = `http://localhost:8080/update/student/${id}`;

    try {
      const response = await fetch(backendURL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });

      if (response.ok) {
        // Update the state with the edited student
        setStudents((prevStudents) =>
          prevStudents.map((student) => (student.id === id ? updatedStudent : student))
        );

        // Disable editing mode
        setEditingStudentId(null);

        console.log(`Student with ID ${id} updated successfully`);
      } else {
        console.error(`Failed to update student with ID ${id}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleCancelEdit = () => {
    // Disable editing mode
    setEditingStudentId(null);
  };

  const handleMarksChange = (subject, value) => {
    // Update the editedMarks state with the new marks
    setEditedMarks((prevMarks) => ({ ...prevMarks, [subject]: value }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h2>All Students Details :</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Reg No</th>
              <th>Student Name</th>
              <th>Student Class</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.regNo}</td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      value={student.studentName}
                      onChange={(e) =>
                        handleSaveEdit(student.id, { ...student, studentName: e.target.value })
                      }
                    />
                  ) : (
                    student.studentName
                  )}
                </td>
                <td>{student.studentClass}</td>
                <td>
                  <table border="1">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(student).map(
                        (subject) =>
                          subject !== 'id' &&
                          subject !== 'regNo' &&
                          subject !== 'studentName' &&
                          subject !== 'studentClass' && (
                            <tr key={subject}>
                              <td>{subject}</td>
                              <td>
                                {editingStudentId === student.id ? (
                                  <input
                                    type="text"
                                    value={editedMarks[subject] || ''}
                                    onChange={(e) =>
                                      handleMarksChange(subject, e.target.value)
                                    }
                                  />
                                ) : (
                                  student[subject]
                                )}
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(student.id, editedMarks)}>
                        Save
                      </button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(student.id)}>Edit</button>
                      <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
