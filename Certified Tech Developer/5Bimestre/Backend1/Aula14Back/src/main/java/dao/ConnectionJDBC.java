package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionJDBC {
    private static String jdbcDriver;
    private static String dbURL;
    private static String usuario;
    private static String senha;

    public ConnectionJDBC(String jdbcDriver, String dbURL, String usuario, String senha) {
        this.jdbcDriver = jdbcDriver;
        this.dbURL = dbURL;
        this.usuario = usuario;
        this.senha = senha;
    }

    public static Connection getConnection(){
        try{
            Class.forName(jdbcDriver);
            return DriverManager.getConnection(dbURL, usuario, senha);
        }catch (ClassNotFoundException e){
            System.out.println(e);
        }catch (SQLException ex){
            System.out.println(ex);
        }
       return null;
    }

}
