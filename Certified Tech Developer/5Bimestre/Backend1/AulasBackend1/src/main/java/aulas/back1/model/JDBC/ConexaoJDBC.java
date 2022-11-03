package aulas.back1.model.JDBC;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoJDBC {


    public static Connection getConnection(){
        try{
            Class.forName("org.h2.Driver");
            return DriverManager.getConnection("jdbc:h2:~/banco", "sa", "");
        }catch (SQLException e){
            System.out.println(e);
        }catch (ClassNotFoundException ex){
            System.out.println(ex);
        }
       return null;
    }
}
