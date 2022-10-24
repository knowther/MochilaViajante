import java.util.HashMap;

public class ComputadorFactory {

    private static final HashMap<String, Computador> computadorHashMap = new HashMap<>();


    public Computador getComputador(String tipoComputador){
        Computador computador = (Computador) computadorHashMap.get(tipoComputador);
        if(computador == null){
            computador = new Computador(tipoComputador);
            computadorHashMap.put(tipoComputador, computador);
            System.out.println("Criando objeto do tipo: " + tipoComputador);
            return computador;
        }
        System.out.println("Recuperando objeto computador tipo: " + tipoComputador);
        return computador;
    }
}
