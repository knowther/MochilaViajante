package com.dh.digitalhouse.model;

import java.io.Serializable;

public class Empresa implements Serializable {

    private String CNPJ;
    private String razaoSocial;

    public Empresa(String CNPJ, String razaoSocial) {
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
    }


    public Empresa(){}

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    @Override
    public String toString() {
        return "Empresa{" +
                "CNPJ='" + CNPJ + '\'' +
                ", razaoSocial='" + razaoSocial + '\'' +
                '}';
    }
}
