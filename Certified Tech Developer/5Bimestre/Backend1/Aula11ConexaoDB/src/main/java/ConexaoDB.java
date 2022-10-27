import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ConexaoDB {
    public static void main(String[] args) throws Exception {
        Class.forName("org.h2.Driver").newInstance();
        Connection connection = DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
        Statement statement = connection.createStatement();

        String sqlCreateTable = "DROP TABLE IF EXISTS Figuras; CREATE TABLE Figuras(Id INT PRIMARY KEY, TipoFigura VARCHAR(20), Cor VARCHAR(50))";
        statement.execute(sqlCreateTable);

        String sqlInsertTable1 = "INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (1, 'Círculo', 'Vermelho'); INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (2, 'Círculo', 'Azul'); INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (3, 'Quadrado', 'Rosa'); INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (4, 'Quadrado', 'Verde'); INSERT INTO Figuras(Id, TipoFigura, Cor) VALUES (5, 'Quadrado', 'Vermelho')";
        statement.execute(sqlInsertTable1);

        String sqlRead = "SELECT * FROM Figuras where Figuras.TipoFigura = 'Círculo' and Figuras.Cor = 'Vermelho'";
        ResultSet resultSet = statement.executeQuery(sqlRead);

        while (resultSet.next()){
            System.out.println(resultSet.getInt(1) + " - " + resultSet.getString(2) + " da cor: " + resultSet.getString(3));
        }
    }
}
