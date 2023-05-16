package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.Model.ClientsInfo;

public interface ClientRepository extends MongoRepository<ClientsInfo, String> {

}
