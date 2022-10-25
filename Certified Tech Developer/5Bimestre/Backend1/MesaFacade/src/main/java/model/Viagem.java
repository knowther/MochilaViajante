package model;

import java.util.ArrayList;
import java.util.List;

public class Viagem {

    private List<Voo> voos = new ArrayList<>();

    private List<Hotel> hoteis = new ArrayList<>();

    public Viagem(){}

    public Viagem(List<Voo> voos, List<Hotel> hoteis) {
        this.voos = voos;
        this.hoteis = hoteis;
    }

    public void getVoos(){
        voos.forEach(voo -> {
            System.out.println("------------------");
            System.out.println(voo.getDestino());
            System.out.println(voo.getDataPartida());
            System.out.println(voo.getDataRetorno());
            System.out.println(voo.getOrigem());
        } );
    }

    public void setVoos(List<Voo> voos) {
        this.voos = voos;
    }

    public void getHoteis(){
        hoteis.forEach(hotel -> {
            System.out.println("---------------------");
            System.out.println(hotel.getCidade());
            System.out.println(hotel.getDataEntrada());
            System.out.println(hotel.getDataSaida());
        });
    }

    public void setHoteis(List<Hotel> hoteis) {
        this.hoteis = hoteis;
    }
}
