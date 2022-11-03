package service;

import model.Medicamento;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MedicamentoServiceTest {

    MedicamentoService medicamentoService;

    @BeforeEach
    void doBefore(){
        medicamentoService = new MedicamentoService();
    }

    @Test
    void guardarMedicamento(){
        Medicamento medicamento = new Medicamento("Minoxidil", "Aché", 2, 102.40);
        medicamentoService.salvar(medicamento);
        Assertions.assertTrue(medicamento.getId() > 0);
    }

}