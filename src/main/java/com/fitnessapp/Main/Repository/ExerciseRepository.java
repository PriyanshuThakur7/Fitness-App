package com.fitnessapp.Main.Repository;

import com.fitnessapp.Main.Entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface ExerciseRepository extends JpaRepository<Exercise,Long> {
    List<Exercise> findByLocation(String s);
}
