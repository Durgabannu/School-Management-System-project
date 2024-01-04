package com.app.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.Entity.Students;

@Repository                    //Allowing the application to interact with the database using Spring Data JPA.

public interface StudentRepo extends JpaRepository<Students, Long> {            //a class is inheriting from another class (or extending another class)
//	it declares a contract for a repository that can perform CRUD (Create, Read, Update, Delete) operations on Students entities. 
    
	Students findByRegNoAndStudentName(String regNo, String studentName);      //this method is declaring that it will find a student by matching both the registration number and the student name

	Optional<Students> findByRegNo(String regNo);         //Declare a method that finds a Students entity by its registration number (regNo)

	//	Optional container that may or may not hold the found Students entity.
	
	List<Students> findAll();          //returns a list of all Students entities from the underlying database
	
	

}

