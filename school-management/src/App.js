// App.js

import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import StudentDetails from './components/StudentDetails';
import StudentHome from './components/StudentHome';
import AllStudents from './components/AllStudents';
function App() {
  return (
    <Router>
      <div>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-details" element={<StudentDetails />} />
          <Route path='/studentHome' element={<StudentHome/>}/>
          <Route path='/all-students' element={<AllStudents/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
