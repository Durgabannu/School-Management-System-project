package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.Entity.Teacher;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher, Long> {
	Teacher findByUserNameAndPassword(String userName, String password);
	
	//this method is declaring that it will find a teacher by matching both the username and password.

}
