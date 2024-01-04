package com.app.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity        //Indicates that the class is a JPA entity(accessing data b/w java obj and database).
@Table(name="teachers table")//Specifies the name of the database table to which this entity is mapped

public class Teacher {
	@Id         //	 marks id as the primary key 
	@GeneratedValue(strategy=GenerationType.IDENTITY)  //generating the values of the id field
	
	
	private long id;          //primary key , will have a unique identifier assigned to it
	private String userName;  
	private String password;
	
//	they cannot be directly accessed from outside the class
	
//	Getters and setters help encapsulate the internal state of an object.
	public long getId() {
		return id;
	}                                   //public method can be accessed from outside the class , return the current value in id
	public void setId(long id) {
		this.id = id;
	}                                  //set the value and doesnot return any value 
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}	

}
