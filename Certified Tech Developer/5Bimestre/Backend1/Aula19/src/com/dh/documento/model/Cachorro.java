package com.dh.documento.model;

import java.io.Serializable;

public class Cachorro  implements Serializable {



    @Override
    public String toString() {
        return "Cachorro{" +
                "nome='" + nome + '\'' +
                ", idade=" + idade +
                '}';
    }

    private String nome;
    private int idade;

    public Cachorro(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public Cachorro (){

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
