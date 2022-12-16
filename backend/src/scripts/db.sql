CREATE DATABASE IF NOT EXISTS ebookthemedb;

USE ebookthemedb;

CREATE TABLE IF NOT EXISTS clases(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO clases (title, description) VALUES 
    ('clase 1', 'Alguna descripcion'),
    ('clase 1', 'Alguna descripcion 2');
