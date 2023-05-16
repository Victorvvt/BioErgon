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

import com.example.demo.Model.RegistroUsers;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "http://localhost:8080")
public class UserController {
	@Autowired
    private UserRepository userRepository;
	
    @PostMapping("/registroUsu")
    public RegistroUsers registerUsu(@RequestBody RegistroUsers userModel) {
        return userRepository.save(userModel);
    }
    
    
    @GetMapping("/indexUsuario")
    public List<RegistroUsers> getAllUsers() {
        return userRepository.findAll();
    }
    
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") String id) {
        RegistroUsers user = userRepository.findById(id).orElse(null);
        if (user != null) {
            userRepository.delete(user);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<RegistroUsers> updateUser(@PathVariable("id") String id, @RequestBody RegistroUsers updatedUser) {
        RegistroUsers user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            user.setEmail(updatedUser.getEmail());
            user.setPassw(updatedUser.getPassw());
            user.setConfPassw(updatedUser.getConfPassw());
            userRepository.save(user);
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/obtener/{id}")
    public ResponseEntity<RegistroUsers> getUserById(@PathVariable("id") String id) {
        RegistroUsers user = userRepository.findById(id).orElse(null);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
    
    
    
