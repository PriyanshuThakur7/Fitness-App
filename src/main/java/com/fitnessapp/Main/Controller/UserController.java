package com.fitnessapp.Main.Controller;

import com.fitnessapp.Main.DTO.LoginRequest;
import com.fitnessapp.Main.Entity.Exercise;
import com.fitnessapp.Main.Entity.User;
import com.fitnessapp.Main.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(userService.loginUser(loginRequest));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserProfile(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<User> updateUserProfile(@PathVariable Long userId, @RequestBody User updatedUser) {
        return ResponseEntity.ok(userService.updateUser(userId, updatedUser));
    }

    @PostMapping("workout/generate/{userId}")
    public ResponseEntity<String> generateWorkout(@PathVariable Long userId) {
        userService.generateWorkoutPlan(userId);
        return ResponseEntity.ok("Plan Generated Successfully");
    }

    @GetMapping("workout/{userId}")
    public ResponseEntity<List<Exercise>> getWorkoutPlan(@PathVariable Long userId) {
        User user=userService.findByUserId(userId);
        return ResponseEntity.ok(user.getWorkoutPlan());
    }

}
