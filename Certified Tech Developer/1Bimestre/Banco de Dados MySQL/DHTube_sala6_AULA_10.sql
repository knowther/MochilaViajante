CREATE DATABASE IF NOT EXISTS DHTube;
USE DHTube;

CREATE TABLE IF NOT EXISTS avatar (
 idAvatar INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(45) NOT NULL,
 urlImagem VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS pais (
	idPais INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS usuario (
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    avatarID INT,
    PaisID INT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45),
    senha VARCHAR(45),
	dataNascimento DATE,
    cep VARCHAR(45),
    FOREIGN KEY (PaisID) REFERENCES pais(idPais),
    FOREIGN KEY (avatarID) REFERENCES avatar(idAvatar)
);

CREATE TABLE IF NOT EXISTS canal (
	idCanal INT AUTO_INCREMENT PRIMARY KEY,
    usuarioID INT,
    nome VARCHAR(45),
    descricao TEXT,
    dataCricacao DATETIME,
    FOREIGN KEY (usuarioID) REFERENCES usuario(idUsuario)
);

CREATE TABLE IF NOT EXISTS video (
	idVideo INT AUTO_INCREMENT PRIMARY KEY,
    usuarioID INT REFERENCES usuario(idUsuario),
    titulo VARCHAR(100),
    descricao TEXT,
    tamanho DOUBLE,
    nomeArquivo VARCHAR(100),
    duracao DOUBLE,
    imagem VARCHAR(100),
    qtdReproducoes INT(11),
    qtdLikes INT(11),
    qtdDeslikes INT(11),
    privado TINYINT(1),
    dataPublicacao DATETIME,
    FOREIGN KEY (usuarioID) REFERENCES usuario(idUsuario)
);

CREATE TABLE IF NOT EXISTS playlist(
	idPlaylist INT AUTO_INCREMENT PRIMARY KEY,
    usuarioID INT,
    nome VARCHAR(100),
    dataCricacao DATETIME,
    privado TINYINT(1),
    FOREIGN KEY (usuarioID) REFERENCES usuario(idUsuario)
);

CREATE TABLE IF NOT EXISTS playlist_video(
 idPlaylist_video INT AUTO_INCREMENT PRIMARY KEY,
 videoID INT,
 paylistID INT,
 FOREIGN KEY (videoID) REFERENCES video(idVideo),
 FOREIGN KEY (paylistID) REFERENCES paylist(idPlaylist)
); 