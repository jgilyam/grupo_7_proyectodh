
use patodb;


INSERT INTO Users (`id_user`, `firs_name`, `last_name`, `date`, `email`, `password`, `user_image`, `box_info`) VALUES
(1, 'julieta', 'rosales', '1998-03-12', 'julieta@gmail.com', '$2a$10$gmQ06NiNlX8bn6TxlsX0MuvhFXU0meqIlBLeu7Rm/rIVBz/hH8lU.', 'userAvatar2.png', 'off'),
(2, 'gisela', 'gisel', '2022-12-12', 'gisela@gmail.com', '$2a$10$ljhk7RiE6Q1Zw0chep0uDuOY6zhgvYBzwKEuyL1ukpYMSK.1043eC', 'userAvatar2.png', 'off'),
(3, 'ivan', 'rios', '1212-12-12', 'ivan@gmail.com', '$2a$10$uBTPFiwHx6nXgdVplOcmHeMTnk0QmIHNVEThYHgAVPfAeuOyXpEJm', '1655944635777-cerrar (1).png', 'off'),
(4, 'jazmin perez', 'robles', '2020-12-12', 'jazmin@gmail.com', '$2a$10$IQ7tBNT8YhHT.mVZ8xdpPusY.g8jNa8Foc4j306.TqII2fDxE5QpK', 'userAvatar2.png', 'off'),
(5, 'inaki', 'redf', '2014-12-12', 'inaki@outlook.com', '$2a$10$QJBmyXS4JFzrwGVG.E6AR.C5FaUmanaXeti4Akg5Evcr2HnhgEdra', 'userAvatar2.png', 'off'),
(6, 'aldana', 'mossa', '', 'aldana@gmail.com', '$2a$10$ZLApPO0NhtbtfMo5Y3lGte5PgPPBd7/ApjNQLZgm4.zQv5hpc3oEy', 'userAvatar2.png', 'off'),
(7, 'magali', 'karz', '2015-05-12', 'magali@gmail.com', '$2a$10$9qHivdIkji.8a1.lakyFRuInLcaD78Q7jbcjoZE8Cp7qxXnPCJrNC', 'userAvatar2.png', 'off'),
(8, 'jose', 'oiun', '1998-08-08', 'jose@jose.com', '$2a$10$qNdrqRl2wv5arJGyhBVhZeFVxBfed6NB3haVSYViUxIqYLPZUTguG', 'userAvatar2.png', 'off'),
(9, 'juampi', 'juampi', '1989-06-06', 'juampi@gmail.com', '$2a$10$.gB2st1f/tmdgjXG/l232uGrOeYa1r8JPsccVcneQSWFka7O/zPEC', 'userAvatar2.png', 'off');



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
(1, 'PIZZERA TRICOLOR', '1655948603561-tabla2.jpg', '1700.00', '35cm x 35cm', 2, 1, 3, 30),
(2, 'POSA VASO ', '1655948653273-portaVasos.jpg', '340.00', 'los mejores posa vasos', 3, 3, 8, 5),
(3, 'TABLA CON ONDAS   ', '1655948678038-insta3.jpg', '6000.00', '40cm x 29cm x 2,4 cm\r\ntabla perfecta para regalar', 1, 2, 10, 15),
(4, 'PLATOS CON GRABADO               ', '1655948706892-platos.jpg', '2000.00', '22cm x 22cm\r\nplato ideal para asado', 3, 4, 10, 0),
(5, 'CUENCO CON VARIOS GRABADOS', '1655948731654-muchosBouls.jpg', '2500.00', '25cmx20cm.\r\nideales para sopas.', 2, 5, 100, 0),
(6, 'BOWLS IDEALES PARA SOPA ', '1655948756804-IMG_20220208_205143_124.jpg', '1000.00', '15cmx12cm', 1, 6, 100, 5),
(7, 'TABLA CORTA', '1655948785415-IMG_20211123_123631_505.jpg', '3500.00', '30cm x 35cm', 3, 7, 200, 0),
(8, 'TABLA LARGA CON DISEÑO', '1655948805189-IMG_20211124_145610_457.jpg', '5000.00', '45cm x 40cm', 2, 8, 50, 5),
(9, 'ASADO CON MANGO', '1655948836569-IMG_20220222_192543_387.jpg', '4000.00', '30cm x 35cm', 2, 9, 150, 5);

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


