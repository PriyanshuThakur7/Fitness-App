package com.fitnessapp.Main.Controller;

import com.fitnessapp.Main.DTO.LoginRequest;
import com.fitnessapp.Main.Entity.Exercise;
import com.fitnessapp.Main.Entity.User;
import com.fitnessapp.Main.Service.ExerciseService;
import com.fitnessapp.Main.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    ExerciseService exerciseService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @PostMapping("/login")
    public ResponseEntity<Long> loginUser(@RequestBody LoginRequest loginRequest) {
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
        exerciseService.generateWorkoutPlan(userId);
        return ResponseEntity.ok("Plan Generated Successfully");
    }

    @GetMapping("workout/{userId}")
    public ResponseEntity<Set<Exercise>> getWorkoutPlan(@PathVariable Long userId) {
        User user=userService.findByUserId(userId);
        if(user==null) throw new IllegalArgumentException("User Doesn't Exists");
        return ResponseEntity.ok(user.getWorkoutPlan());
    }

}
