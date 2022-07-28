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
    let precio = itemToEdit.querySelector(`#card-n${i} .caja1-precio p`);
    let cantidad = itemToEdit.querySelector(
      `#card-n${i} .caja1-cantidad input`
    );
    let subtotal = itemToEdit.querySelector(`#card-n${i} .caja1-subtotal p`);

    title.innerText = producto.title;
    img.setAttribute("src", producto.img);
    precio.innerText = producto.price.split(".")[0];
    cantidad.setAttribute("value", producto.cantidad);
    //console.log(producto.price.split("$")[1] * 100);
    subtotal.innerText = "$" + producto.price.split("$")[1] * producto.cantidad;

    newItem.querySelector(".deleted").addEventListener("click", removeNewItem);
  });

  const finalizarCompra = document.querySelector(".finalizarCompra");
  finalizarCompra.addEventListener("click", finalizarCompraClicked);

  function removeNewItem(event) {
    event.preventDefault();
    const buttonClicked = event.target;
    buttonClicked.closest(".conteiner-caja").remove();
    //agregar funcion que te da el total del carrito para que cuando borras se borre el total

    // const productosEnCarrito = JSON.parse(
    //   localStorage.getItem("Productos Guardados")
    // );
    // cartTotales = [...productosEnCarrito];
    // let cardId = document.querySelector("#card-n0");

    // productosEnCarrito.filter((producto) => producto.cardId !== cardId);
    // localStorage.setItem("Productos guardados", JSON.stringify(cartTotales));
  }

  function finalizarCompraClicked(req, res) {
    carrito.innerHTML = "";
    swal("Compra Realizada", "Gracias!", "success");
  }
});
