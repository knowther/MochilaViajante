public class Quadrado extends Figura{

    private int lados;

    public Quadrado(int lados) {
        this.lados = lados;
    }

    @Override
    protected double calcularPerimetro() {
        return 4 * lados;
    }
}
