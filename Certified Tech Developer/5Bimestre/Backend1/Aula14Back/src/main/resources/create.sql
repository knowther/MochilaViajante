CREATE TABLE IF NOT EXISTS medicamento;
CREATE TABLE medicamento(
id int AUTO_INCREMENT  PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
laboratoria VARCHAR(200) NOT NULL,
quantidade INT,
preco numeric(12,2)
);