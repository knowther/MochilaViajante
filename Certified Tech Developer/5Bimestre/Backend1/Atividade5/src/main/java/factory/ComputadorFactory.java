package factory;

import model.Computador;

import java.util.HashMap;

public class ComputadorFactory {

    private static final HashMap<String, Computador> TIPO_COMPUTADOR = new HashMap<>();


    public static Computador getComputador(String tipoComputador, int hd, int ram) {
        String id = tipoComputador + hd + ram;;
        Computador computador = TIPO_COMPUTADOR.get(id);

        if (computador == null) {
            computador = new Computador(tipoComputador, hd, ram);
            TIPO_COMPUTADOR.put(id, computador);
            System.out.println("Criando objeto do tipo: " + tipoComputador);
        }
        System.out.println("Recuperando objeto computador tipo: " + tipoComputador);
        return computador;
    }
}
