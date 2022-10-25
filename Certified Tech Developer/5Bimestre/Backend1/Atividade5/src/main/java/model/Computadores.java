package model;

import factory.ComputadorFactory;

import java.util.ArrayList;
import java.util.List;

public class Computadores {

    private static List<Computador> computadores = new ArrayList<>();

    public void montarComputador(String tipo, int hd, int ram){
        Computador computador = ComputadorFactory.getComputador(tipo, hd, ram);
        this.computadores.add(computador);
    }

    public static List<Computador> getComputadores() {
        return computadores;
    }

    public static void setComputadores(List<Computador> computadores) {
        Computadores.computadores = computadores;
    }
}
