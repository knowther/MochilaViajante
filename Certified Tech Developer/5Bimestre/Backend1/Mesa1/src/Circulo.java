public class Circulo extends Figura{
    private int raio;


    public Circulo(int raio) {
        this.raio = raio;
    }

    @Override
    protected double calcularPerimetro() {
        return (double) (2 * 3.14 * raio);
    }
}
