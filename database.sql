CREATE DATABASE LEARN_SQL;
USE LEARN_SQL;

CREATE TABLE Users(
id_user int primary key not null,
name varchar(250),
username varchar(250),
email varchar(300),
password varchar(200),
created_at datetime
);

CREATE TABLE Products(
id_user int,
id_product int primary key not null,
title varchar(300),
description varchar(300),
price varchar(200),
cover varchar(350),
FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

-- Registros para la tabla Users
INSERT INTO Users (id_user, name, username, email, password, created_at) VALUES
(1, 'Juan Perez', 'juanperez', 'juanperez@example.com', 'password123', GETDATE()),
(2, 'María López', 'marialopez', 'marialopez@example.com', 'securepass', GETDATE()),
(3, 'Carlos García', 'carlosgarcia', 'carlosgarcia@example.com', 'strongpassword', GETDATE()),
(4, 'Ana Martínez', 'anamartinez', 'anamartinez@example.com', 'p@ssw0rd', GETDATE()),
(5, 'Pedro Sánchez', 'pedrosanchez', 'pedrosanchez@example.com', 'safepassword', GETDATE()),
(6, 'Laura Rodríguez', 'laurarodriguez', 'laurarodriguez@example.com', 'letmein', GETDATE()),
(7, 'Sofía Hernandez', 'sofiahernandez', 'sofiahernandez@example.com', 'password1234', GETDATE()),
(8, 'Miguel González', 'miguelgonzalez', 'miguelgonzalez@example.com', 'mypassword', GETDATE()),
(9, 'Isabella Gómez', 'isabellagomez', 'isabellagomez@example.com', 'password12345', GETDATE()),
(10, 'David Torres', 'davidtorres', 'davidtorres@example.com', 'securepassword', GETDATE());

-- Registros para la tabla Products
INSERT INTO Products (id_user, id_product, title, description, price, cover) VALUES
(1, 1, 'Camiseta blanca', 'Camiseta de algodón blanca con cuello redondo', '20.00', 'camiseta_blanca.jpg'),
(2, 2, 'Pantalones vaqueros', 'Pantalones vaqueros azules de corte recto', '35.00', 'pantalones_vaqueros.jpg'),
(3, 3, 'Zapatos de cuero', 'Zapatos de cuero marrón con suela de goma', '50.00', 'zapatos_cuero.jpg'),
(4, 4, 'Reloj de pulsera', 'Reloj de pulsera plateado con correa de cuero', '75.00', 'reloj_pulsera.jpg'),
(5, 5, 'Bolso de mano', 'Bolso de mano negro con detalles en dorado', '40.00', 'bolso_mano.jpg'),
(6, 6, 'Gafas de sol', 'Gafas de sol estilo aviador con montura dorada', '30.00', 'gafas_sol.jpg'),
(7, 7, 'Bufanda de lana', 'Bufanda de lana gris con patrón de cuadros', '25.00', 'bufanda_lana.jpg'),
(8, 8, 'Chaqueta de cuero', 'Chaqueta de cuero negro con cierre de cremallera', '80.00', 'chaqueta_cuero.jpg'),
(9, 9, 'Gorra deportiva', 'Gorra deportiva negra con logo bordado', '15.00', 'gorra_deportiva.jpg'),
(10, 10, 'Pulsera de plata', 'Pulsera de plata con diseño entrelazado', '60.00', 'pulsera_plata.jpg');


SELECT * FROM Users;
SELECT * FROM Products;

SELECT U.username,P.title,P.description,P.price FROM Products P
INNER JOIN Users U ON P.id_user = U.id_user
ORDER BY P.price;

SELECT U.username,P.title,P.description,P.price FROM Products P
INNER JOIN Users U ON P.id_user = U.id_user
WHERE U.username = 'isabellagomez'
;
