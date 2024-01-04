package com.app.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.app.Entity.Students;
import com.app.Entity.Teacher;
import com.app.Repository.StudentRepo;
import com.app.Repository.TeacherRepo;

@Service                 //act as an intermediary between controllers and repositories.

public class TeacherService {
	@Autowired               // Injects dependencies, allowing Spring to automatically wire the required beans (instances) into these fields.

	private StudentRepo studentRepo;
	@Autowired
	private TeacherRepo teacherRepo;
	
	public Teacher registerTeacher(Teacher Teacher) {      //registerTeacher method is responsible for saving a Teacher entity to the database
//		Teacher object as a parameter, and the saved  Teacher entity then returned
		return teacherRepo.save(Teacher);
    }
	
	
	public Teacher verifyTeacher(String userName, String password) {
//  verifyTeacher method that takes two parameters of type String (userName and password) and returns an object Teacher
        return teacherRepo.findByUserNameAndPassword(userName,password);
//   findByUserNameAndPassword is used to find a Teacher entity based on the provided userName and password parameters.or nul
    }
	
	
	public Students addStudents(Students Students) {    //addStudents that takes a parameter  Students  and returns an object of type Students.
//		The result of the save operation is returned from the addStudents method 
		return studentRepo.save(Students);
    }
	
	
	public Students updateStudentsById(Long id, Students updatedStudents) {
        Students existingStudents = studentRepo.findById(id)     //Calls the findById method on the studentRepo and Stores the existing student in the variable existingStudents.
                .orElseThrow(() -> new IllegalArgumentException("Students not found with ID: " + id));
          // updateStudentsById method retrieves an existing student by ID, throws an exception if not found
        
        existingStudents.setRegNo(updatedStudents.getRegNo());
        existingStudents.setStudentName(updatedStudents.getStudentName());
        existingStudents.setStudentClass(updatedStudents.getStudentClass());
        existingStudents.setTelugu(updatedStudents.getTelugu());
        existingStudents.setHindi(updatedStudents.getHindi());
        existingStudents.setEnglish(updatedStudents.getEnglish());
        existingStudents.setMaths(updatedStudents.getMaths());
        existingStudents.setScience(updatedStudents.getScience());
        existingStudents.setSocial(updatedStudents.getSocial());
//        Updates the details of the existing student with the value from the updatedStudents entity.
        
        return studentRepo.save(existingStudents);
//        Saves the updated existingStudents entity back to the database using the save method
    }

	public void deleteStudents(Long id) {
//		Optional is a container object that may or may not contain a non-null value.
	    Optional<Students> studentOptional = studentRepo.findById(id);  //used here to handle cases where the entity with the given ID may not exist.

	    if (studentOptional.isPresent()) {  //It returns true if the Optional contains a non-null value
	        studentRepo.deleteById(id);
//	        deletes the student with the specified ID from the database using the deleteById method 
	    } else {
	        throw new NoSuchElementException("Student with ID " + id + " not found");
	    }//NoSuchElementException is thrown with an informative message indicating that the student with the specified ID was not found.
	}

	

}
