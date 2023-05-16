package com.example.demo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class RegistroUsers {
	 	@Id
	    private String id;
	    private String firstName;
	    private String lastName;
	    private String email;
	    private String passw;
	    private String confPassw;
	    
	    
	    //GETTERS Y SETTERS
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassw() {
			return passw;
		}
		public void setPassw(String passw) {
			this.passw = passw;
		}
		public String getConfPassw() {
			return confPassw;
		}
		public void setConfPassw(String confPassw) {
			this.confPassw = confPassw;
		}
		
	    
	    
}
