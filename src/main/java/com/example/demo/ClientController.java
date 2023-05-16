package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.ClientsInfo;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:8080")
public class ClientController {

		@Autowired
		private ClientRepository clientRepository;
		
	    
	    @PostMapping("/infoClientes")
	    public ClientsInfo infoClientes(@RequestBody ClientsInfo info) {
	        return clientRepository.save(info);
	    }
	    
	    
	    @GetMapping("/index")
	    public List<ClientsInfo> getAllClient() {
	        return clientRepository.findAll();
	    }
	    
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteClient(@PathVariable("id") String id) {
	    	ClientsInfo client = clientRepository.findById(id).orElse(null);
	        if (client != null) {
	        	clientRepository.delete(client);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
	    @PutMapping("/{id}")
	    public ResponseEntity<ClientsInfo> updateClient(@PathVariable("id") String id, @RequestBody ClientsInfo updatedClient) {
	    	ClientsInfo client = clientRepository.findById(id).orElse(null);
	        if (client != null) {
	        	client.setName(updatedClient.getName());
	        	client.setlName(updatedClient.getlName());
	        	client.setWeight(updatedClient.getWeight());
	        	client.setHeight(updatedClient.getHeight());
	        	client.setGender(updatedClient.getGender());
	        	client.setActivities(updatedClient.getActivities());
	        	client.setBirthday(updatedClient.getBirthday());
	            clientRepository.save(client);
	            return ResponseEntity.ok(client);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
	    @GetMapping("/{id}")
	    public ResponseEntity<ClientsInfo> getClientById(@PathVariable("id") String id) {
	    	ClientsInfo client = clientRepository.findById(id).orElse(null);
	        if (client != null) {
	            return ResponseEntity.ok(client);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
}
	
