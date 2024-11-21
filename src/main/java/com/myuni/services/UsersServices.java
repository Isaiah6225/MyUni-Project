package com.myuni.services;

import com.myuni.Models.Users;
import com.myuni.repos.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;



/**
 *The Service contains the application's business logic
 */

@Service
public class UsersServices {
    private static final Logger logger = LogManager.getLogger(UsersServices.class);



    @Autowired
    private UsersRepo userRepository;

    public Users saveUser(Users user) {
        String pwd = user.getPassword();
        user.setPassword(BCrypt.hashpw(pwd, BCrypt.gensalt()));
        Users savedUser = userRepository.save(user);
        logger.info("User saved: {}", savedUser);
        return userRepository.save(user);
    }

    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<Users> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<Users> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public Optional<Users> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}