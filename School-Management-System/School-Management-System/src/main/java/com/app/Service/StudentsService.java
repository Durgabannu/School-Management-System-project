package com.app.Service;

import java.util.List;
//import java.util.ArrayList;
//import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.Entity.Students;
import com.app.Repository.StudentRepo;
@Service
public class StudentsService {
	@Autowired
	private StudentRepo studentRepo;
	

	public Students getStudentsByRegNo(String regNo) {        
//public method named getStudentsByRegNo that takes a String parameter regNo representing the registration number of a student
        Optional<Students> optionalStudents = studentRepo.findByRegNo(regNo);
//        It calls the findByRegNo method from studentRepo with the provided  (regNo)
        return optionalStudents.orElse(null);
        //if object contains a nonNull value it returns tye student
    }


	public List<Students> getAllStudents() {
        // Fetch all students from the repository and returns them as a list of Students
        return studentRepo.findAll();
    }
	
	
	public Students verifyStudents(String regNo, String studentName) {
        
        return studentRepo.findByRegNoAndStudentName(regNo, studentName);
    }
	
	

}
