public class Main {

    public static void main(String[] args) {
        final ComputadorFactory computador = new ComputadorFactory();

        Computador computador1 = computador.getComputador("Windows");
        computador1.setHd(128);
        computador1.setRam(16);

        Computador computador2 = computador.getComputador("Mac");
        computador2.setHd(500);
        computador2.setRam(8);

        final Computador computador3 = computador.getComputador("Windows");
        System.out.println(computador2);

        final Computador computador4 = computador.getComputador("Mac");
        System.out.println(computador4);
    }
}
