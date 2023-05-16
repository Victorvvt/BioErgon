package com.example.demo;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.Model.RegistroUsers;

public interface UserRepository extends MongoRepository<RegistroUsers, String> {


}
