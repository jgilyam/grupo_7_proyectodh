
use patodb;


INSERT INTO Users (`id_user`, `firs_name`, `last_name`, `date`, `email`, `password`, `user_image`, `box_info`) VALUES
(1, 'julieta', 'rosales', '12-4-1994', 'nadia@nadia.com', '12345678', NULL, 'off'),
(2, 'carla', 'carlota', '12-12-1212', 'carla@carla.com', '12345678', NULL, 'on'),
(3, 'iñaki', 'gonzalez', '20-10-2000', 'iñaki@gmail.com', '12345678', NULL, 'on'),
(4, 'magali', 'barrios', '25-03-1995', 'magali@gmail.com', '12345678', NULL, 'off'),
(5, 'jose', 'perez', '05-05-2003', 'jose@gmail.com', '12345678', NULL, 'off'),
(6, 'juan pablo', 'gomez', '15-05-1990', 'juampi@gmail.com', '12345678', NULL, 'on'),
(7, 'nicolas', 'mansilla', '25-02-2008', 'nicolas@gmail.com', '12345678', NULL, 'on'),
(8, 'agostina', 'paez', '08-08-2007', 'agostina@gmail.com', '12345678', NULL, 'on'),
(9, 'amelia', 'gasti', '04-08-2004', 'amelia@gmail.com', '12345678', NULL, 'off'),
(10, 'aldana', 'ardina', '18-06-1988', 'aldana@outlook.com', '12345678', NULL, 'off'),
(11, 'leonardo', 'ouanana', '20-06-1998', 'leonardo@outlook.com', '12345678', NULL, 'off'),
(12, 'carolina', 'rosello', '08-01-1985', 'carolina@outlook.com', '12345678', NULL, 'off'),
(13, 'gaston', 'zonzani', '28-03-1989', 'gaston@outlook.com', '12345678', NULL, 'off');



INSERT INTO Category (`id_category`, `name`) VALUES
(1, 'nuevo'),
(2, 'masVendido'),
(3, 'ofertas');

-- --------------------------------------------------------
INSERT INTO Typess (`id_type`, `name`) VALUES
(1, 'pizzera'),
(2, 'tabla'),
(3, 'Posa vasos'),
(4, 'Platos'),
(5, 'cuencos'),
(6, 'Bowls'),
(7, 'Tabla corta'),
(8, 'Tabla larga'),
(9, 'asado');



INSERT INTO Adress (`id_adress`, `name`, `number`, `locality`, `province`, `id_user`) VALUES
(1, 'lascano', 2222, 'ramos mejia', 'buenos aires', 1),
(2, 'carrera', 3455, 'devoto', 'buenos aires', 1),
(3, 'cardenas', 2323, 'vila luro', 'buenos aires', 2),
(4, 'pompella', 4545, 'lomas del mirador', 'buenos aires', 1),
(5, 'portural', 3900, 'luzuriaga', 'buenos aires', 6),
(6, 'callao', 300, 'monserrat', 'buenos aires', 3),
(7, 'emilio mitre', 3000, 'ramos mejia', 'buenos aires', 9),
(8, 'avenida mosconi', 1600, 'lomas del mirador', 'buenos aires', 4);

-- --------------------------------------------------------


INSERT INTO Bill (`id_bill`, `id_user`, `id_adress`, `total`, `date`) VALUES
(1, 1, 1, 1080, '12-02-2022'),
(2, 1, 2, 400, '18-02-2022'),
(3, 6, 5, 6000, '12-06-2022'),
(4, 3, 6, 2000, '15-05-2022'),
(5, 9, 7, 6000, '01-02-2022'),
(6, 4, 8, 1700, '20-05-2022');

-- --------------------------------------------------------


INSERT INTO Products (`id_product`, `name`, `product_image`, `price`, `description`, `id_category`, `id_type`, `stock`, `discount`) VALUES
(1, 'pizzera', NULL, '1700', '35cm x 35cm', 1, 1, 3, 30),
(2, 'posa vasos', NULL, '340', 'los mejores posa vasos', 1, 3, 8, 5),
(3, 'tabla', NULL, '6000', '40cm x 29cm x 2,4 cm\r\ntabla perfecta para regalar', 3, 2, 10, 15),
(4, 'plato', NULL, '2000', '22cm x 22cm\r\nplato ideal para asado', 1, 4, 10, 0),
(5, 'cuenco', NULL, '2500', '25cmx20cm.\r\nideales para sopas.', 2, 5, 100, 0),
(6, 'bowls', NULL, '1000', '15cmx12cm', 2, 6, 100, 5),
(7, 'tabla corta', NULL, '3500', '30cm x 35cm', 2, 7, 200, 0),
(8, 'tabla larga', NULL, '5000', '45cm x 40cm', 3, 8, 50, 5),
(9, 'asado', NULL, '4000', '30cm x 35cm', 1, 9, 150, 5);

-- --------------------------------------------------------


INSERT INTO Products_bill (`id_product_bill`, `id_product`, `id_bill`, `quantity`, `price_unit`) VALUES
(1, 2, 1, 2, '340'),
(2, 1, 1, 1, '200'),
(4, 3, 3, 1, '6000'),
(5, 6, 4, 2, '1000'),
(6, 9, 5, 1, '4000'),
(7, 4, 5, 1, '2000'),
(8, 1, 6, 1, '1700');

-- --------------------------------------------------------



-- --------------------------------------------------------


