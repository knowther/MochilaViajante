import factory.ComputadorFactory;
import model.Computador;
import model.Computadores;

public class Main {

    public static void main(String[] args) {
        final ComputadorFactory computador = new ComputadorFactory();

        for(int i = 1; i < 1000000; i++){
            computador.getComputador("Windows", 128, 16);

            computador.getComputador("Mac", 500, 8);
        }
        Runtime runtime = Runtime.getRuntime();
        System.out.println(Computador.contador);
        System.out.println(Computadores.getComputadores().size());
        System.out.println("Memória utilizada: " + (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024));

    }
}
