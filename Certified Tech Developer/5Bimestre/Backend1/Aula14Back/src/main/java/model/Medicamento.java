package model;

public class Medicamento {
    private int id;
    private String nome;
    private String lab;
    private int qnt;
    private double preco;

    public Medicamento(String nome, String lab, int qnt, double preco) {
        this.nome = nome;
        this.lab = lab;
        this.qnt = qnt;
        this.preco = preco;
    }

    public Medicamento(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLab() {
        return lab;
    }

    public void setLab(String lab) {
        this.lab = lab;
    }

    public int getQnt() {
        return qnt;
    }

    public void setQnt(int qnt) {
        this.qnt = qnt;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
