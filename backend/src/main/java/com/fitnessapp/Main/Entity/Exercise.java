package com.fitnessapp.Main.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exercises")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;
    private String muscleGroup; // e.g., Chest, Legs, Back
    private boolean requiresEquipment; // true = needs gym equipment, false = bodyweight
    private String location; // "Home" or "Gym"
    private String type;// "Strength" or "Endurance"
    private String category; // "Compound or Isolation or Cardio"
    private String difficultyLevel; // e.g., "Beginner", "Intermediate", "Advanced"

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMuscleGroup() {
        return muscleGroup;
    }

    public void setMuscleGroup(String muscleGroup) {
        this.muscleGroup = muscleGroup;
    }

    public boolean isRequiresEquipment() {
        return requiresEquipment;
    }

    public void setRequiresEquipment(boolean requiresEquipment) {
        this.requiresEquipment = requiresEquipment;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

