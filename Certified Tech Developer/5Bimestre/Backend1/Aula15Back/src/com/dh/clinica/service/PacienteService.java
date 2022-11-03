package com.dh.clinica.service;

import com.dh.clinica.Paciente;
import com.dh.clinica.dao.IDao;
import com.dh.clinica.dao.impl.PacienteDaoH2;

import java.util.List;
import java.util.Optional;

public class PacienteService {

    private IDao<Paciente> pacienteIDao;

    public PacienteService(IDao<Paciente> pacienteIDao) {
        this.pacienteIDao = pacienteIDao;
    }

    public Paciente salvar(Paciente paciente){
        IDao<Paciente> pacienteIDao = new PacienteDaoH2();
        return pacienteIDao.salvar(paciente);
    }

    public Optional<Paciente> buscar(Integer id){
        try {
            return pacienteIDao.buscar(id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void excluir(Integer id){pacienteIDao.excluir(id);}

    public List<Paciente> buscarTodos(){
        try{
            return pacienteIDao.buscarTodos();
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

}
