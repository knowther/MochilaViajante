public class Bola extends Produto{

    private double raio;

    public Bola(double raio){
        this.raio = raio;
    }

    @Override
    public double calcularEspaco() {
        double  diametro = raio * 2;
        return diametro;
    }
}
