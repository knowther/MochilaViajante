--DROP TABLE IF EXISTS Paciente;
CREATE TABLE IF NOT EXISTS Paciente (
id INT auto_increment PRIMARY KEY,
nome VARCHAR(120) NOT NULL,
sobrenome VARCHAR(120) NOT NULL,
rg VARCHAR(30),
dataCadastro DATE,
endereco VARCHAR(150)
)