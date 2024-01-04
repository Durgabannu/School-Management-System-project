package com.app.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity              //Indicates that the class is a JPA entity(accessing data b/w java obj and database).
@Table(name="Student Table")
public class Students {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String regNo;
	private String studentName;
    private String studentClass;
    private Integer telugu;
    private Integer hindi;
    private Integer english;
    private Integer maths;
    private Integer science;
    private Integer social;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
//	this.id is used to assign the value of the method parameter id to the instance variable id

	public String getRegNo() {
		return regNo;
	}

	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getStudentClass() {
		return studentClass;
	}

	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}

	public Integer getTelugu() {
		return telugu;
	}

	public void setTelugu(Integer telugu) {
		this.telugu = telugu;
	}

	public Integer getHindi() {
		return hindi;
	}

	public void setHindi(Integer hindi) {
		this.hindi = hindi;
	}

	public Integer getEnglish() {
		return english;
	}

	public void setEnglish(Integer english) {
		this.english = english;
	}

	public Integer getMaths() {
		return maths;
	}

	public void setMaths(Integer maths) {
		this.maths = maths;
	}

	public Integer getScience() {
		return science;
	}

	public void setScience(Integer science) {
		this.science = science;
	}

	public Integer getSocial() {
		return social;
	}

	public void setSocial(Integer social) {
		this.social = social;
	} 

}
