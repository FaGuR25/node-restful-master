CREATE DATABASE IF NOT EXISTS enfermedades;
USE enfermedades;

CREATE TABLE usuarios(
    id_usuario    INTEGER         NOT NULL     AUTO_INCREMENT,
    nombres       VARCHAR(150)    NOT NULL,
    apellidos     VARCHAR(255)    NOT NULL,
    fecha_nacimiento DATE         NOT NULL,
    PRIMARY KEY(id_usuario)
);

CREATE TABLE medicos(
    id_medico         INTEGER         NOT NULL     AUTO_INCREMENT,
    nombres           VARCHAR(150)    NOT NULL,
    apellidos         VARCHAR(255)    NOT NULL,
    especialidad      VARCHAR(255)    NOT NULL,
    PRIMARY KEY(id_medico)
);

CREATE TABLE enfermedades(
    id_enfermedades      INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre               VARCHAR(255)    NOT NULL,
    PRIMARY KEY(id_enfermedades)
);

CREATE TABLE medicamentos(
    id_medicamentos   INTEGER         NOT NULL     AUTO_INCREMENT,
    nombres           VARCHAR(255)    NOT NULL,
    dosis             VARCHAR(32)     NOT NULL,
    PRIMARY KEY (id_medicamentos)

);