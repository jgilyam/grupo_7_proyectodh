let productRecomen = [
  {
    img: "tabla1",
    title: "Producto 1",
    price: 3000,
    cuotas: 6,
    descuento: 10,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },

  {
    img: "tabla2",
    title: "Producto 2",
    price: 1200,
    cuotas: 12,
    descuento: 5,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
  {
    img: "tabla3",
    title: "Producto 3",
    price: 2400,
    cuotas: 12,
    descuento: 10,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
  {
    img: "tabla4",
    title: "Producto 4",
    price: 4800,
    cuotas: 12,
    descuento: 10,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
];

module.exports = productRecomen;
