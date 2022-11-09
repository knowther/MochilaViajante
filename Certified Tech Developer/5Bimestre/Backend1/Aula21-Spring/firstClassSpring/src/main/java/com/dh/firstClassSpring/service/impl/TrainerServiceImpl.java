package com.dh.firstClassSpring.service.impl;

import com.dh.firstClassSpring.model.Trainer;
import com.dh.firstClassSpring.service.TrainerService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Override
    public List<Trainer> trainerList() {
        return Arrays.asList(new Trainer("Johnny"), new Trainer("Ana"));
    }
}
