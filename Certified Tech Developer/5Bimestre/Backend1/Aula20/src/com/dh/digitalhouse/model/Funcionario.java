package com.dh.digitalhouse.model;

import java.io.Serializable;

public class Funcionario implements Serializable {
    private String nome;
    private String sobrenome;
    private String docIdentificacao;
    private double salario;

    public Funcionario(String nome, String sobrenome, String docIdentificacao, double salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.docIdentificacao = docIdentificacao;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getDocIdentificacao() {
        return docIdentificacao;
    }

    public void setDocIdentificacao(String docIdentificacao) {
        this.docIdentificacao = docIdentificacao;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", docIdentificacao='" + docIdentificacao + '\'' +
                ", salario=" + salario +
                '}';
    }
}
