CREATE DATABASE om_nom;
USE om_nom;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    description text,
    devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);