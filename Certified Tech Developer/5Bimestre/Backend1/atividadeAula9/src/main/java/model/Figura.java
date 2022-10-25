package model;

public class Figura {

    String cor;
    Integer tamanho;

   public static int contador;
    public Figura(String cor, Integer tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
        contador++;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public Integer getTamanho() {
        return tamanho;
    }

    public void setTamanho(Integer tamanho) {
        this.tamanho = tamanho;
    }

    public static Integer getContador() {
        return contador;
    }

    @Override
    public String toString() {
        return "Figura{" +
                "cor='" + cor + '\'' +
                ", tamanho=" + tamanho +
                '}';
    }
}
