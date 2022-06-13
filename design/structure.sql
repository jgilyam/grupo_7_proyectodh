CREATE DATABASE patodb;

USE patodb;

CREATE TABLE Users (`id_user` int  AUTO_INCREMENT,
  `firs_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `email` varchar(100) not null,
  `password` varchar(50) NOT NULL,
  `user_image` varchar(100) DEFAULT NULL,
  `box_info` varchar(20) NOT NULL,
  PRIMARY KEY (id_user)
);

CREATE TABLE Category (
  `id_category` int(11)  AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (id_category)
);

CREATE TABLE Typess (
  `id_type` int(11)  AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (id_type)
) ;

CREATE TABLE Products (
  `id_product` int(11)  AUTO_INCREMENT,
  `name` varchar(100) NULL,
  `product_image` varchar(100) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(200) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
	PRIMARY KEY (id_product),
	FOREIGN KEY (id_category) REFERENCES Category(id_category),
	FOREIGN KEY (id_type) REFERENCES Typess(id_type)
) ;




CREATE TABLE Adress (
  `id_adress` int(11) AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `number` int(11) NOT NULL,
  `locality` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (id_adress),
  FOREIGN KEY(id_user) REFERENCES Users(id_user)
);

CREATE TABLE Bill (
  `id_bill` int(11) AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_adress` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `date` varchar(50) not null,
  PRIMARY KEY (id_bill),
  FOREIGN KEY(id_user) REFERENCES Users(id_user) ,
  FOREIGN KEY(id_adress) REFERENCES Adress(id_adress) 
);

CREATE TABLE Products_bill (
  `id_product_bill` int(11) AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `id_bill` int(11) NOT NULL,
  `quantity` int(11)NOT NULL,
  `price_unit` decimal(10,0) NOT NULL,
  PRIMARY KEY (id_product_bill),
  FOREIGN KEY(id_product) REFERENCES Products(id_product) ,
  FOREIGN KEY(id_bill) REFERENCES Bill(id_bill)
);