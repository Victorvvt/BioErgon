package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.Model.UsersActivities;

public interface ActivityRepository extends MongoRepository<UsersActivities, String> {

}
