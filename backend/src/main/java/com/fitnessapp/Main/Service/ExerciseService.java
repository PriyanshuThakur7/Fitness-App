package com.fitnessapp.Main.Service;

import com.fitnessapp.Main.Entity.Exercise;
import com.fitnessapp.Main.Entity.User;
import com.fitnessapp.Main.Repository.ExerciseRepository;
import com.fitnessapp.Main.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private UserRepository userRepository;

    public void generateWorkoutPlan(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Fetch exercises based on user preference (home or gym)
        List<Exercise> allExercises = exerciseRepository.findByLocation(
                user.isPrefersHomeWorkout() ? "Home" : "Gym"
        );

        // Categorize exercises
        Map<String, List<Exercise>> categorizedExercises = categorizeExercises(allExercises);

        // Generate workout plan based on fitness goal
        Set<Exercise> selectedExercises = new HashSet<>();

        if (user.getFitnessGoal().equalsIgnoreCase("BULK")) {
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Upper Body"), 3));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Lower Body"), 3));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Core"), 2));
        } else if (user.getFitnessGoal().equalsIgnoreCase("CUT")) {
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Cardio"), 3));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Upper Body"), 2));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Lower Body"), 2));
        } else { // MAINTAIN
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Upper Body"), 2));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Lower Body"), 2));
            selectedExercises.addAll(selectRandomExercises(categorizedExercises.get("Core"), 2));
        }

        // Assign workout plan and save user
        user.setWorkoutPlan(selectedExercises);
        userRepository.save(user);
    }

    private Map<String, List<Exercise>> categorizeExercises(List<Exercise> exercises) {
        Map<String, List<Exercise>> categorizedExercises = new HashMap<>();
        categorizedExercises.put("Upper Body", new ArrayList<>());
        categorizedExercises.put("Lower Body", new ArrayList<>());
        categorizedExercises.put("Core", new ArrayList<>());
        categorizedExercises.put("Cardio", new ArrayList<>());

        for (Exercise e : exercises) {
            if (e.getMuscleGroup().equalsIgnoreCase("Chest") ||
                    e.getMuscleGroup().equalsIgnoreCase("Back") ||
                    e.getMuscleGroup().equalsIgnoreCase("Shoulders") ||
                    e.getMuscleGroup().equalsIgnoreCase("Arms")) {
                categorizedExercises.get("Upper Body").add(e);
            } else if (e.getMuscleGroup().equalsIgnoreCase("Legs")) {
                categorizedExercises.get("Lower Body").add(e);
            } else if (e.getCategory().equalsIgnoreCase("Cardio")) {
                categorizedExercises.get("Cardio").add(e);
            } else {
                categorizedExercises.get("Core").add(e);
            }
        }

        return categorizedExercises;
    }

    private Set<Exercise> selectRandomExercises(List<Exercise> exercises, int count) {
        Collections.shuffle(exercises);
        return new HashSet<>(exercises.subList(0, Math.min(count, exercises.size())));
    }
}
