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
    id_usuario      INTEGER          NOT NULL     AUTO_INCREMENT,
    nombre          VARCHAR(150)     NOT NULL,
    correo          VARCHAR(150)     NOT NULL,
    contrasena      VARCHAR(150)     NOT NULL,
    PRIMARY KEY(id_usuario)
);
CREATE TABLE Notas(
    id_notas        INTEGER         NOT NULL      AUTO_INCREMENT,
    titulo          VARCHAR(150)    NOT NULL,
    notas           VARCHAR(150)    NOT NULL,
    PRIMARY KEY(id_notas)
);

CREATE TABLE Medicamentos(
    id_medicamento      INTEGER         NOT NULL  AUTO_INCREMENT,
    nombreMedicamento   VARCHAR(150)    NOT NULL,
    gramos              INTEGER         NOT NULL,
    PRIMARY KEY(id_medicamento)

);

CREATE TABLE Citas(
    id_citas            INTEGER         NOT NULL AUTO_INCREMENT,
    fecha               DATE            NOT NULL,
    tiempo              TIME            NOT NULL,
    documentos          VARCHAR(150)    NOT NULL,
    PRIMARY KEY(id_citas)
);




/*

CREATE TABLE Citas(
    id_cita         INTEGER        NOT NULL       AUTO_INCREMENT,
    fecha           DATE           NOT NULL,
    tiempo          TIME           NOT NULL,
    
    PRIMARY KEY(id_cita)
);

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