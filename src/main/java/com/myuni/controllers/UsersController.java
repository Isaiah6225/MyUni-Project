package com.myuni.controllers;

import com.myuni.Models.Users;
import com.myuni.services.UsersServices;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import org.springframework.security.crypto.bcrypt.BCrypt;



/**
 * The controller contains the applications endpoints/ urls.
 * UserController handles HTTP requests concerning users.
 */

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersServices userService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        Users savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/all")
    public ResponseEntity<List<Users>> getUsers() {
        List<Users> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id) {
        Optional<Users> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/username/{username}")
    public ResponseEntity<Users> getUserByUsername(@PathVariable String username) {
        Optional<Users> user = userService.getUserByUsername(username);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/email/{email}")
    public ResponseEntity<Users> getUserByEmail(@PathVariable String email) {
        Optional<Users> user = userService.getUserByEmail(email);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Users user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.status(200).body("Signup successful");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error Signing Up");
        }
    }

    //https://127.0.0.1:9000/api/users/login
    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users user) {
        Optional<Users> userFound = userService.getUserByUsername(user.getUsername());

        if (!userFound.isPresent()) {
            return ResponseEntity.status(401).body("Error Login");  // User not found
        }
        String storedHashedPassword = userFound.get().getPassword();
        if (BCrypt.checkpw(user.getPassword(), storedHashedPassword)) {
            return ResponseEntity.ok("Login successful");
        }

        return ResponseEntity.status(401).body("Error Login");
    }


}