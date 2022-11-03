package com.dh.clinica.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionJDBC {

    private String jdbcDriver;
    private String dbUrl;
    private String usuario;
    private String senha;

    public ConnectionJDBC(String jdbcDriver, String dbUrl, String usuario, String senha) {
        this.jdbcDriver = jdbcDriver;
        this.dbUrl = dbUrl;
        this.usuario = usuario;
        this.senha = senha;
    }

    public Connection getConnection(){
       try{
           Class.forName(jdbcDriver);
           return DriverManager.getConnection(dbUrl, usuario, senha);
       }catch (Exception e) {
           e.printStackTrace();
       }
       return null;
    }
}
