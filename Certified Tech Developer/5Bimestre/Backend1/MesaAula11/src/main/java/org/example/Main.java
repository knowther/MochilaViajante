package org.example;

import org.apache.log4j.Logger;

import javax.swing.plaf.nimbus.State;
import java.sql.*;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class);

    public static final String sqlCreateTable = "DROP TABLE IF EXISTS Figuras; CREATE TABLE Figuras(Id INT PRIMARY KEY, TipoFigura VARCHAR(20), Cor VARCHAR(50))";
    public static final String sqlInsertValues = "INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (1, 'Círculo', 'Vermelho'), (2, 'Cículo', 'Amarelo'), (3, 'Quadrado', 'Rosa'), (4, 'Quadrado', 'Verde'), (5, 'Quadrado', 'Vermelho')";

    public static final String sqlGetValues = "SELECT * FROM Figuras where Figuras.TipoFigura = 'Círculo' and Figuras.Cor = 'Vermelho'";

    public static void main(String[] args) throws Exception {
        Connection connection;
        connection = getConnection();
        Statement statement = connection.createStatement();


        logger.info("Iniciando Conexão com o banco de dados.");
        statement.execute(sqlCreateTable);
        logger.info("Criando tabela Figuras");
        statement.execute(sqlInsertValues);
        logger.info("Inserindo valores na tabela.");
        ResultSet resultSet = statement.executeQuery(sqlGetValues);
        logger.info("Retornando os resultados da query.");

        while (resultSet.next()){
            System.out.println(resultSet.getInt(1) + " - " + resultSet.getString(2) + " com a cor: " + resultSet.getString(3));
        }

    }

    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver");
        return DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
    }
}