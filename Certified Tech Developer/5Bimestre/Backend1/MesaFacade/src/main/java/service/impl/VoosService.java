package service.impl;

import model.Voo;

import java.time.LocalDate;
import java.util.List;

public class VoosService {

    private List<Voo> voos;

    public VoosService(List<Voo> voos) {
        this.voos = voos;
    }

    public Voo buscarVoo(LocalDate dataPartida, LocalDate dataRetorno, String origem, String destino){
        Voo voo = null;
        for(Voo v: this.voos){
            if(v.getDataPartida().equals(dataPartida) && v.getDataRetorno().equals(dataRetorno) && v.getOrigem().equalsIgnoreCase(origem) && v.getDestino().equalsIgnoreCase(destino)){
                voo = v;
            }else{
                System.out.println("model.Voo não encontrado.");
            }
        }
        return voo;
    }
}
