package com.example.demo.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Activity")
public class UsersActivities {

		@Id
	    private String id;
	    private String ActivityName;
	    
	    
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getActivityName() {
			return ActivityName;
		}
		public void setActivityName(String activityName) {
			ActivityName = activityName;
		}
	    
	    
	    
}
