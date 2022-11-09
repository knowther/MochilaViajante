package com.dh.firstClassSpring.controller;

import com.dh.firstClassSpring.model.Trainer;
import com.dh.firstClassSpring.service.impl.TrainerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trainer")
public class TrainerController {
    @Autowired
    private TrainerServiceImpl trainerService;

    @GetMapping(value = "/listar")
    public List<Trainer> getTrainer(){
        return trainerService.trainerList();
    }
}
