public class Caixa extends Produto{

    private double comprimento;
    private double altura;
    private double largura;

    public Caixa(double lados){
        this.comprimento = lados;
        this.altura = lados;
        this.largura = lados;
    }

    @Override
    public double calcularEspaco() {
        double area = comprimento * largura;
        return area;
    }
}
