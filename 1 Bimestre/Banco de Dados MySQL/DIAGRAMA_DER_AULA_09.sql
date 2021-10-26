CREATE SCHEMA `UniversoLeitura`;

CREATE TABLE `UniversoLeitura`.`ASSOCIADOS`(
`COD_ID` INT NOT NULL,
`NOME` VARCHAR(50),
`SOBRENOME` VARCHAR(50),
`ENDEREÇO` VARCHAR(150),
`CIDADE` VARCHAR(50),
`ESTADO` VARCHAR(2),
PRIMARY KEY (`COD_ID`)
);

CREATE TABLE `UniversoLeitura`.`AUTORES`(
`COD_AUTORES` INT NOT NULL,
`SOBRENOME` VARCHAR(100),
`NOME` VARCHAR(100),
PRIMARY KEY (`COD_AUTORES`)
);

CREATE TABLE `UniversoLeitura`.`EDITORAS`(
`COD_EDITORAS` INT NOT NULL,
`RAZAO_SOCIAL` VARCHAR(150),
`TELEFONE` VARCHAR(100),
PRIMARY KEY (`COD_EDITORAS`)
);

CREATE TABLE `UniversoLeitura`.`LIVROS`(
`COD_LIVROS` INT NOT NULL,
`COD_ISBN` VARCHAR(13),
`TITULO` VARCHAR(200),
`ANO_CRIACAO` DATE,
`COD_AUTORES` INT,
`ANO_PUBLICACAO` DATE,
`COD_EDITORAS` INT,
PRIMARY KEY (`COD_LIVROS`),
CONSTRAINT `FKCOD_AUTORES` FOREIGN KEY (`COD_AUTORES`) REFERENCES `UniversoLeitura`.`AUTORES`(`COD_AUTORES`),
CONSTRAINT `FKCOD_EDITORAS` FOREIGN KEY (`COD_EDITORAS`) REFERENCES `UniversoLeitura`.`EDITORAS`(`COD_EDITORAS`)
);

CREATE TABLE `UniversoLeitura`.`EXEMPLARES`(
`COD_EXEMPLARES` INT NOT NULL,
`COD_LIVROS` INT,
`SINISTRO` BOOL,
PRIMARY KEY (`COD_EXEMPLARES`),
CONSTRAINT `FKCOD_LIVROS` FOREIGN KEY (`COD_LIVROS`) REFERENCES `UniversoLeitura`.`LIVROS`(`COD_LIVROS`)
);

CREATE TABLE `UniversoLeitura`.`EMPRESTIMOS`(
`COD_EMPRESTIMOS` INT NOT NULL,
`COD_ID` INT,
`DATA` DATE,
`PRAZO_DEVOLUCAO` DATE,
`DATA_DEVOLUCAO` DATE,
PRIMARY KEY (`COD_EMPRESTIMOS`),
CONSTRAINT `FKCOD_ID` FOREIGN KEY (`COD_ID`) REFERENCES `UniversoLeitura`.`ASSOCIADOS`(`COD_ID`)
);

CREATE TABLE `UniversoLeitura`.`EMPRESTIMOS_EXEMPLARES`(
`COD_EMPRE_EXEMPLA` INT NOT NULL,
`COD_EMPRESTIMOS` INT,
`COD_EXEMPLARES` INT,
PRIMARY KEY (`COD_EMPRE_EXEMPLA`),
CONSTRAINT `FKCOD_EMPRESTIMOS` FOREIGN KEY (`COD_EMPRESTIMOS`) REFERENCES `UniversoLeitura`.`EMPRESTIMOS`(`COD_EMPRESTIMOS`),
CONSTRAINT `FKCOD_EXEMPLARES` FOREIGN KEY (`COD_EXEMPLARES`) REFERENCES `UniversoLeitura`.`EXEMPLARES`(`COD_EXEMPLARES`)
);

CREATE TABLE `UniversoLeitura`.`TELEFONES`(
`COD_TELEFONES` INT NOT NULL,
`TELEFONE_SOCIO` VARCHAR(100),
`COD_ID` INT,
PRIMARY KEY (`COD_TELEFONES`),
CONSTRAINT `FKCOD_ID_ASSO` FOREIGN KEY (`COD_ID`) REFERENCES `UniversoLeitura`.`ASSOCIADOS`(`COD_ID`)
);

CREATE TABLE `UniversoLeitura`.`E`(
`COD_TELEFONES` INT NOT NULL,
`TELEFONE_SOCIO` VARCHAR(100),
`COD_ID` INT,
PRIMARY KEY (`COD_TELEFONES`),
CONSTRAINT `FKCOD_ID_ASSO` FOREIGN KEY (`COD_ID`) REFERENCES `UniversoLeitura`.`ASSOCIADOS`(`COD_ID`)
);