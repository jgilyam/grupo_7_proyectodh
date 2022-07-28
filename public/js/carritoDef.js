window.addEventListener("load", () => {
  let carrito = document.querySelector(".container-cards-carrito");

  let item = document.querySelector(".conteiner-caja");
  let HTMLitem = item.innerHTML;
  item.remove();
  let productosEnCarrito = JSON.parse(
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
    subtotal.innerText = "$" + producto.price.split("$")[1] * producto.cantidad;

    updateNewItemTotal();

    newItem.querySelector(".deleted").addEventListener("click", removeNewItem);
  });

  const finalizarCompra = document.querySelector(".finalizarCompra");
  finalizarCompra.addEventListener("click", finalizarCompraClicked);

  function updateNewItemTotal() {
    console.log("llegue a update");
    productosEnCarrito = JSON.parse(
      localStorage.getItem("Productos Guardados")
    );
    const newItemTotal = document.querySelector(".total-monto");
    const subTotalCaja = productosEnCarrito.reduce(
      (acc, producto) => acc + producto.cantidad * producto.price.split("$")[1],
      0
    );
    newItemTotal.textContent = `$ ${subTotalCaja}`;
  }
  function finalizarCompraClicked(event) {
    event.preventDefault();
    carrito.innerHTML = "";
    swal("Compra Realizada", "Gracias!", "success");

    let data = {
      arrayProductos: productosEnCarrito,
      user: "",
    };
    console.log(data);
    fetch("http://localhost:4000/producto/confirmar-compra", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    localStorage.removeItem("Productos Guardados");
    const newItemTotal = document.querySelector(".total-monto");
    newItemTotal.innerText = "-";
  }

  function removeNewItem(event) {
    const buttonClicked = event.target;
    const caja = buttonClicked.closest(".conteiner-caja");
    const parrafo = caja.querySelector(".parrafo1").textContent;

    //agregar funcion que te da el total del carrito para que cuando borras se borre el total

    let storageProductos = JSON.parse(
      localStorage.getItem("Productos Guardados")
    );
    const arrayNuevo = storageProductos.filter(
      (product) => product.title !== parrafo
    );
    console.log("que trae?:", arrayNuevo);
    const nuevoStorage = [...arrayNuevo];
    localStorage.setItem("Productos Guardados", JSON.stringify(nuevoStorage));
    caja.remove();
    updateNewItemTotal();
  }
});
