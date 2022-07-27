window.addEventListener("load", () => {
  let carrito = document.querySelector(".container-cards-carrito");

  let item = document.querySelector(".conteiner-caja");
  let HTMLitem = item.innerHTML;
  item.remove();
  const productosEnCarrito = JSON.parse(
    localStorage.getItem("Productos Guardados")
  );
  console.log(productosEnCarrito);

  productosEnCarrito.forEach((producto, i) => {
    let newItem = document.createElement("div");
    newItem.className = "conteiner-caja";
    newItem.id = `card-n${i}`;
    newItem.innerHTML = HTMLitem;
    carrito.appendChild(newItem);
    let itemToEdit = document.querySelector(`#card-n${i}`);
    let title = itemToEdit.querySelector(".parrafo1");
    let img = itemToEdit.querySelector(`#card-n${i} img`);
    img.setAttribute("src", producto.img);
    title.innerText = producto.title;
  });
});
