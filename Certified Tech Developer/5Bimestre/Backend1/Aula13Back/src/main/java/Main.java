import JDBC.ConexaoJDBC;
import model.Conta;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {

    final static Logger logger = Logger.getLogger(Main.class);
    private static final String sqlCreateTable = "DROP TABLE IF EXISTS Conta;" +
            "CREATE TABLE Conta(id INT PRIMARY KEY, nome VARCHAR(100) NOT NULL, numConta VARCHAR(20) NOT NULL, saldo numeric(15,2))";

    private static final String sqlInsertValues = "INSERT INTO Conta(id, nome, numConta, saldo) VALUES (?, ?, ?, ?)";

    private static final String sqlUpdateValues = "UPDATE Conta SET Conta.saldo = ? WHERE Conta.id = ?";

    private static Double saldo = null;

    public static void main(String[] args) {
        Conta conta = new Conta(1, "Daniel", "412587-X", 10.00);
        Connection connection = null;
        try{
            connection = ConexaoJDBC.getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlCreateTable);
            saldo = conta.getSaldo();
            PreparedStatement preparedStatement = connection.prepareStatement(sqlInsertValues);
            preparedStatement.setInt(1, conta.getId() );
            preparedStatement.setString(2, conta.getNome());
            preparedStatement.setString(3, conta.getNumConta());
            preparedStatement.setDouble(4, conta.getSaldo());
            logger.info("Criando conta: " + conta.getNome() + " - " + conta.getNumConta() + " - " + conta.getSaldo());
            preparedStatement.execute();

            connection.setAutoCommit(false);

            preparedStatement = connection.prepareStatement(sqlUpdateValues);
            preparedStatement.setDouble(1, conta.aumentarSaldo(10));
            preparedStatement.setInt(2, conta.getId());
            logger.warn("Mudando saldo da conta.");
            preparedStatement.execute();

            connection.commit();

            logger.info("Saldo da conta de: " + conta.getNome() + " foi de: R$" + saldo + " para: R$" + conta.getSaldo());

            preparedStatement.setDouble(1, conta.aumentarSaldo(25));
            preparedStatement.setInt(2, conta.getId());
            logger.warn("Mudando saldo da conta.");
            preparedStatement.execute();
            connection.commit();


        }catch (Exception e){
            System.out.println(e);
            try{
                connection.rollback();
            }catch (SQLException ex){
                System.out.println(ex);
            }

        }finally {
            try{
                logger.info("Fechando conexão com o banco");
                connection.close();
            }catch (SQLException e){
                System.out.println(e);
            }
        }

    }
}
