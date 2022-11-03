package com.dh.clinica.service;

import com.dh.clinica.Paciente;
import com.dh.clinica.dao.IDao;
import com.dh.clinica.dao.impl.PacienteDaoH2;

public class PacienteService {

    public Paciente salvar(Paciente paciente){
        IDao<Paciente> pacienteIDao = new PacienteDaoH2();
        return pacienteIDao.salvar(paciente);
    }
}
