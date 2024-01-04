package com.app.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.Entity.Students;
import com.app.Service.StudentsService;

@Controller
@RequestMapping()
@CrossOrigin(origins= "http://localhost:3000")
public class StudentController {
	@Autowired
	private StudentsService studentService;
	

	@PostMapping("/verify/student")
    public ResponseEntity<String> verifyStudent(@RequestBody Map<String, String> studentDetails) {
        String regNo = studentDetails.get("regNo");
        String studentName = studentDetails.get("studentName");

        Students verifiedStudent = studentService.verifyStudents(regNo, studentName);

        if (verifiedStudent != null) {
            return ResponseEntity.ok("Student verification successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Student verification failed");
        }
    }
	@GetMapping("/students/{regNo}")
    public ResponseEntity<Students> getStudentById(@PathVariable String regNo) {
        Students student = studentService.getStudentsByRegNo(regNo);
        
        if (student != null) {
            return new ResponseEntity<>(student, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
