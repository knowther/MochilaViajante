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
import java.time.format.DateTimeFormatter;

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
}
