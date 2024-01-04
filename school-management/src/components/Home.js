
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'300px' }}>
      <table style={{ border: '1px solid black', padding: '40px' }}>

      <h2>School Management System</h2>
      <div style={{ margin: '20px' }}>
        <Link to="/teacher-login">
          <button style={{ marginRight: '10px' }}>Teacher Login</button>
        </Link>
        <Link to="/student-login">
          <button>Student Login</button>
        </Link>
      </div>
      <table style={{ border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        
        </table>
  </table>
  </div>
  
  );
};

export default Home;
