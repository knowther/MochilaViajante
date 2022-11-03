package com.dh.clinica.dao.impl;

import com.dh.clinica.Paciente;
import com.dh.clinica.dao.ConnectionJDBC;
import com.dh.clinica.dao.IDao;
import org.apache.log4j.Logger;
import org.xml.sax.SAXException;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PacienteDaoH2 implements IDao<Paciente> {

    final static Logger logger = Logger.getLogger(PacienteDaoH2.class);
    private ConnectionJDBC connectionJDBC;

    private Connection getConnection(){
        connectionJDBC = new ConnectionJDBC("org.h2.Driver", "jdbc:h2:~/clinica;AUTO_SERVER=TRUE;INIT=RUNSCRIPT FROM 'create.sql'", "sa", "");
        return connectionJDBC.getConnection();
    }

    @Override
    public Paciente salvar(Paciente paciente) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        final String sqlInsert = String.format("INSERT INTO Paciente(nome, sobrenome, rg, dataCadastro, endereco) VALUES ('%s', '%s', '%s', '%s', '%s')", paciente.getNome(), paciente.getSobrenome(), paciente.getRg(), paciente.getDataCadastro().format(formatter), paciente.getEndereco());
        Connection connection = null;
        try{
            logger.info("Abrindo conexão.");
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlInsert, Statement.RETURN_GENERATED_KEYS);
            ResultSet resultSet = statement.getGeneratedKeys();
            if(resultSet.next()){

                paciente.setId(resultSet.getInt(1));
            }
        }catch (SQLException ex){
            logger.error("Erro ao cadastrar Paciente.");
            ex.printStackTrace();
        }finally {
            logger.info("Fechando conexão.");
            try{
                connection.close();
            }catch (SQLException e) {
                logger.error("Erro ao fechar conexão.");
                e.printStackTrace();
            }
        }
        return paciente;
    }

    @Override
    public Optional<Paciente> buscar(Integer id) {
        logger.debug("Buscando paciente com id: " + id);
        final String sqlGet = String.format("SELECT * FROM Paciente WHERE Paciente.id = '%s'", id);
        Paciente paciente = null;
        try{
            Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlGet);
            while (resultSet.next()){
                paciente = createPacienteObject(resultSet);
            }
            statement.close();
        }catch (SQLException ex){
            ex.printStackTrace();
        }
        return paciente != null ? Optional.of(paciente) : Optional.empty();
    }
    private Paciente createPacienteObject(ResultSet resultSet) throws SQLException{
        Integer idPaciente = resultSet.getInt("id");
        String nome = resultSet.getString("nome");
        String sobrenome = resultSet.getString("sobrenome");
        String rg = resultSet.getString("rg");
        LocalDate dataCadastro = resultSet.getDate("dataCadastro").toLocalDate();
        String endereco = resultSet.getString("endereco");
        return new Paciente(idPaciente, nome, sobrenome, rg, dataCadastro, endereco);
    }

    @Override
    public void excluir(Integer id) {
        logger.debug("Excluindo paciente com id: " + id);
        final String sqlDelete = String.format("DELETE FROM Paciente WHERE Paciente.id = %s", id);

        try{
            Connection connection = getConnection();
            Statement statement = connection.createStatement();
            statement.executeUpdate(sqlDelete);
            statement.close();
        }catch (SQLException ex){
            ex.printStackTrace();
        }
    }

    @Override
    public List<Paciente> buscarTodos() {
        logger.debug("Buscando todos paciente");
        String query = "SELECT * FROM Paciente";
        List<Paciente> pacientes = new ArrayList<>();
        try{
            Connection connection = getConnection();
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()){
                pacientes.add(createPacienteObject(resultSet));
            }
        }catch (SQLException ex){
            ex.printStackTrace();
        }
        return pacientes;
    }
}


