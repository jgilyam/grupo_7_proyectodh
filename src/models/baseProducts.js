let productRecomen = [
  {
    id: 1,
    img: "tabla1",
    title: "Producto 1",
    price: 3000,
    cuotas: 6,
    descuento: 0,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },

  {
    id: 2,
    img: "tabla2",
    title: "Producto 2",
    price: 1200,
    cuotas: 12,
    descuento: 0,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
  {
    id: 3,
    img: "tabla3",
    title: "Producto 3",
    price: 2400,
    cuotas: 12,
    descuento: 0,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
  {
    id: 4,
    img: "tabla4",
    title: "Producto 4",
    price: 4800,
    cuotas: 12,
    descuento: 0,
    valorCuota() {
      return this.price / this.cuotas;
    },
  },
];

module.exports = productRecomen;
