const cajaCarrito = document.querySelector(".container-caja");


function addProduct() {
  let products = [];
  if (localStorage.getItem("Productos Guardados")) {
    products = JSON.parse(localStorage.getItem("Productos Guardados"));
  }
  products.push({ productId: productId + 1, image: "<imageLink>" });
  localStorage.setItem("Productos Guardados", JSON.stringify(products));
}
