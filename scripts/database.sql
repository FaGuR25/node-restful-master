CREATE DATABASE IF NOT EXISTS enfermedades;
USE enfermedades;


CREATE TABLE Medicina(
    id_numMedicina   INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre          VARCHAR(150)     NOT NULL,
    gramos          INTEGER(150)     NOT NULL,
    precio          INTEGER(150)     NOT NULL,
    marca           VARCHAR(150)     NOT NULL,
    PRIMARY KEY(id_numMedicina)
);

CREATE TABLE Guardar(
    id_usuario      INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre          VARCHAR(150)     NOT NULL,
    correo          VARCHAR(150)     NOT NULL,
    contrasena      VARCHAR(150)     NOT NULL,
    PRIMARY KEY(id_usuario)
);
/*
CREATE TABLE gramos(
    id_gramos         INTEGER         NOT NULL     AUTO_INCREMENT,
    cantidad          INTEGER(150)    NOT NULL,
    PRIMARY KEY(id_gramos)
);

CREATE TABLE precio(
    id_precio          INTEGER         NOT NULL     AUTO_INCREMENT,
    cantidadPrecio     INTEGER(255)    NOT NULL,
    PRIMARY KEY(id_precio)
);

CREATE TABLE marca(
    id_marca        INTEGER         NOT NULL     AUTO_INCREMENT,
    nombreMarca     VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_marca)

);*/