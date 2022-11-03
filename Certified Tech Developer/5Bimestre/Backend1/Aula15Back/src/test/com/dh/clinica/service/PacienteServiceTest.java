package test.com.dh.clinica.service;

import com.dh.clinica.Paciente;
import com.dh.clinica.service.PacienteService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class PacienteServiceTest {

    PacienteService pacienteService;

    @BeforeEach
    void doBefore(){
        pacienteService = new PacienteService();
    }

    @Test
    void cadastrarPaciente(){
        Paciente paciente = new Paciente("Johnny", "Wesley", "125.125.415", LocalDate.of(2022, 11, 03), "R. M. A. P. Dias");
        pacienteService.salvar(paciente);

        Assertions.assertTrue(paciente.getId() > 0);
        System.out.println(paciente.getId());
    }

}