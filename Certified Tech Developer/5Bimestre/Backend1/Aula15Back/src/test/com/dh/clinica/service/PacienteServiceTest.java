package test.com.dh.clinica.service;

import com.dh.clinica.Paciente;
import com.dh.clinica.dao.impl.PacienteDaoH2;
import com.dh.clinica.service.PacienteService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PacienteServiceTest {

    PacienteService pacienteService;

    @BeforeEach
    void doBefore(){
        pacienteService = new PacienteService(new PacienteDaoH2());
    }

    @Test
    void cadastrarPaciente(){
        Paciente paciente = new Paciente("Eduardo", "Leite", "125.125.415", LocalDate.of(2022, 11, 03), "R. M. A. P. Dias");
        pacienteService.salvar(paciente);

        Assertions.assertTrue(paciente.getId() > 0);
        System.out.println(paciente.getId());
    }

    @Test
    void buscarPaciente(){
        assertFalse( pacienteService.buscar(1).isEmpty(), "A busca retornou resultados.");

    }

    @Test
    void excluirPaciente(){
        pacienteService.excluir(3);
        assertTrue(pacienteService.buscar(3).isEmpty());
    }


    @Test
    void findAllPac(){
        List<Paciente> pacientes = pacienteService.buscarTodos();
        assertTrue(!pacientes.isEmpty());
        pacientes.stream().forEach(paciente -> System.out.println(paciente.getId() + " - " +paciente.getNome() + " - " + paciente.getSobrenome()));
    }

}