package impl;

import dao.ConnectionJDBC;
import dao.IDao;
import model.Medicamento;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class MedDAOH2 implements IDao<Medicamento> {
    private ConnectionJDBC connectionJDBC;

    public Connection getConnection(){
        connectionJDBC = new ConnectionJDBC("org.h2.Driver", "jdbc:h2:~/medicamento;AUTO_SERVER=TRUE;;INIT=RUNSCRIPT FROM 'create.sql'", "sa", "");
        return  connectionJDBC.getConnection();
    }

    @Override
    public Medicamento salvar(Medicamento medicamento) {
        String sqlInserValues = String.format("INSERT INTO medicamento(nome, lab, qnt, preco) VALUES (%s, '%s', '%s', %s, %s)", medicamento.getId(), medicamento.getNome(), medicamento.getLab(), medicamento.getQnt(), medicamento.getPreco());
        Connection connection = null;
        try{
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlInserValues, Statement.RETURN_GENERATED_KEYS);
            connection.commit();
            ResultSet resultSet = statement.getGeneratedKeys();
            if(resultSet.next()){
                medicamento.setId(resultSet.getInt(1));
            }
        }catch (Exception ex){
            System.out.println(ex);
        }
        return medicamento;
    }
}
