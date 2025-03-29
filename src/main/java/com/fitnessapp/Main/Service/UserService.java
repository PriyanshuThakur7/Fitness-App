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
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ExerciseRepository exerciseRepository;

    public void generateWorkoutPlan(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Filter exercises based on user preferences
        List<Exercise> availableExercises = exerciseRepository.findByLocation(
                user.isPrefersHomeWorkout() ? "Home" : "Gym"
        );

        // Further filter based on fitness goal
        List<Exercise> selectedExercises = availableExercises.stream()
                .filter(ex -> (user.getFitnessGoal().equalsIgnoreCase("BULK") && ex.getType().equals("Strength")) ||
                        (user.getFitnessGoal().equalsIgnoreCase("CUT") && ex.getType().equals("Endurance")))
                .collect(Collectors.toList());

        user.setWorkoutPlan(selectedExercises);

    }

    public User findByUserId(Long userId) {
        Optional<User> user= userRepository.findById(userId);
        return user.orElse(null);
    }

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already registered!");
        }
        return userRepository.save(user);
    }

    public String loginUser(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return "Login Successful";
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User updateUser(Long userId, User updatedUser) {
        User user = getUserById(userId);
        user.setUsername(updatedUser.getUsername());
        user.setFitnessGoal(updatedUser.getFitnessGoal());
        user.setPrefersHomeWorkout(updatedUser.isPrefersHomeWorkout());
        return userRepository.save(user);
    }
}
