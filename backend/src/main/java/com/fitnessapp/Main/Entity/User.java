package com.fitnessapp.Main.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(nullable = false, unique = true)
    private String email;
    private String password;
    private int age;
    private double weight;
    private String gender;
    private String fitnessLevel;
    private String fitnessGoal; // BULK / CUT / MAINTAIN
    private boolean prefersHomeWorkout;

    @ManyToMany
    @JoinTable(
            name = "user_workout_plan",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    private Set<Exercise> workoutPlan;  // List of exercises in the workout plan

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFitnessGoal() {
        return fitnessGoal;
    }

    public void setFitnessGoal(String fitnessGoal) {
        this.fitnessGoal = fitnessGoal;
    }

    public boolean isPrefersHomeWorkout() {
        return prefersHomeWorkout;
    }

    public void setPrefersHomeWorkout(boolean prefersHomeWorkout) {
        this.prefersHomeWorkout = prefersHomeWorkout;
    }

    public Set<Exercise> getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(Set<Exercise> workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFitnessLevel() {
        return fitnessLevel;
    }

    public void setFitnessLevel(String fitnessLevel) {
        this.fitnessLevel = fitnessLevel;
    }
}
