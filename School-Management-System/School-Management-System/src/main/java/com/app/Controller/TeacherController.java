package com.app.Controller;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.Entity.Students;
import com.app.Entity.Teacher;
import com.app.Service.StudentsService;
import com.app.Service.TeacherService;

@Controller          //Spring will not recognize that class as a controller, and it won't be able to handle HTTP requests.
@RequestMapping()     //map a controller method to a specific HTTP request
@CrossOrigin(origins= "http://localhost:3000")       // allows requests from the specified origin  to access resources served by this controller.
public class TeacherController {
	@Autowired
	public TeacherService teacherService;
	@Autowired          // Spring take care of creating an instance of TeacherService and injecting it into the class where this field is declared. 
	public StudentsService studentsService;
	
	@PostMapping("/register/teacher")
//	to map HTTP POST requests to specific method ( registerTeacher )
    public ResponseEntity<Teacher> registerTeacher(@RequestBody Teacher teacher) {
        Teacher registeredTeacher = teacherService.registerTeacher(teacher);
        //teacherService object passes the teacher object as a parameter, registers a new teacher and returns the registered teacher.
        return ResponseEntity.ok(registeredTeacher);
    //ResponseEntity is a generic class that represents the entire HTTP response, including status code, headers, and body.
    }
	
	
	 @PostMapping("/verify/teacher")
//	 The ResponseEntity  class that represents the entire HTTP response
	    public ResponseEntity<String> verifyTeacher(@RequestBody Map<String, String> credentials) {
	        String userName = credentials.get("userName");
	        String password = credentials.get("password");

	        Teacher verifiedTeacher = teacherService.verifyTeacher(userName, password);
//	  verifyTeacher method instances teacherService class. It passes the extracted username and password as parameters to check and verify the teacher's credentials. 
	        if (verifiedTeacher != null) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
	        }
	    }

	//adding students
	 
	 @GetMapping("/getallstudents")
	    public ResponseEntity<List<Students>> getAllStudents() {
//	method getAllStudents on an instance of the studentsService class. It  retrieves a list of all students from some data source or service.
	        List<Students> allStudents = studentsService.getAllStudents();
	        return ResponseEntity.ok(allStudents);
	  //return a response with a 200 OK status and the list of students (allStudents) as the response body. 
	    }
	 
	@PostMapping("/addstudents")
    public ResponseEntity<Students> addStudents(@RequestBody Students students) {
    	 Students student = teacherService.addStudents(students);
         return ResponseEntity.ok(student);
    }
	
	
	@PutMapping("/update/student/{id}")                  //indicates that the id parameter is extracted from the URI path variable.
    public ResponseEntity<Students> updateStudentsById(@PathVariable Long id, @RequestBody Students updatedStudent) {
        Students updated = teacherService.updateStudentsById(id, updatedStudent);
   //updateStudentsById method instance of the teacherService class, passing the id (extracted from the URI) and the updatedStudent object as parameters.
        return ResponseEntity.ok(updated);
    }
	
	
	@DeleteMapping("/delete/student/{id}")
	public ResponseEntity<String> deleteStudentById(@PathVariable Long id) { 
	    try {
	        teacherService.deleteStudents(id);
	        return ResponseEntity.ok("Student with ID " + id + " deleted successfully");
	    } catch (NoSuchElementException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student with ID " + id + " not found");
	    }
//	 throws a NoSuchElementException, it catches the exception and returns a response with a 404 Not Found status and a message  
	}
	 
}
	


