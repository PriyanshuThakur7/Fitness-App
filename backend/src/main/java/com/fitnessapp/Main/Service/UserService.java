package com.fitnessapp.Main.Service;

import com.fitnessapp.Main.DTO.LoginRequest;
import com.fitnessapp.Main.Entity.Exercise;
import com.fitnessapp.Main.Entity.User;
import com.fitnessapp.Main.Repository.ExerciseRepository;
import com.fitnessapp.Main.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ExerciseRepository exerciseRepository;

    public User findByUserId(Long userId) {
        Optional<User> user= userRepository.findById(userId);
        return user.orElse(null);
    }

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email is already registered!");
        }
        return userRepository.save(user);
    }

    public Long loginUser(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        return user.getId();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public User updateUser(Long userId, User updatedUser) {
        User user = getUserById(userId);
        if(user==null || updatedUser==null) throw new IllegalArgumentException("User Not Found");
        user.setUsername(updatedUser.getUsername());
        user.setFitnessGoal(updatedUser.getFitnessGoal());
        user.setPrefersHomeWorkout(updatedUser.isPrefersHomeWorkout());
        return userRepository.save(user);
    }
}
