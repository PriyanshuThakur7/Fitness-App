package com.fitness.app.userService.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class User {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Integer age;
    private Double weight;
    private FitnessLevel fitnessLevel;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
