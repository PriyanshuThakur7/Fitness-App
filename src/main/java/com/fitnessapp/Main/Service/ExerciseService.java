package com.fitnessapp.Main.Service;

import com.fitnessapp.Main.Entity.Exercise;
import com.fitnessapp.Main.Entity.User;
import com.fitnessapp.Main.Repository.ExerciseRepository;
import com.fitnessapp.Main.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private UserRepository userRepository;


}
