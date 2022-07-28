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

    updateNewItemTotal();

    function updateNewItemTotal() {
      /*  let subTotalCaja = 0; */
      const newItemTotal = document.querySelector(".total-monto");

      /* const cartItems = document.querySelectorAll(".conteiner-caja"); */

      /* cartItems.forEach((cartItems) => {
        const cartItemsPriceElement = cartItems.querySelector(".caja1-precio");

        const cartItemsPrice = Number(
          cartItemsPriceElement.textContent.replace("$", "")
        );

        const cartItemsCant = document.querySelector("#cantidad");

        cartItemsCantValor = Number(cartItemsCant.value);
        total = total + cartItemsPrice * cartItemsCant;
      });
 */
      /* newItemTotal.innerHTML = `$${total}`; */

      const subTotalCaja = productosEnCarrito.reduce(
        (acc, producto) =>
          acc + producto.cantidad * producto.price.split("$")[1],
        0
      );
      newItemTotal.textContent = `$ ${subTotalCaja}`;
    }

    newItem.querySelector(".deleted").addEventListener("click", removeNewItem);
    const finalizarCompra = document.querySelector(".finalizarCompra");
  finalizarCompra.addEventListener("click", finalizarCompraClicked);
  
    function removeNewItem(event) {
      const buttonClicked = event.target;
      const caja=buttonClicked.closest(".conteiner-caja");
      const parrafo= caja.querySelector(".parrafo1").textContent

      //agregar funcion que te da el total del carrito para que cuando borras se borre el total

       let storageProductos = JSON.parse(localStorage.getItem("Productos Guardados"));
       const arrayNuevo= storageProductos.filter(product => product.title !== parrafo );
      console.log("que trae?:" ,arrayNuevo)
      const nuevoStorage = [...arrayNuevo];
      localStorage.setItem("Productos Guardados", JSON.stringify(nuevoStorage));
      caja.remove()
       
    }
    function finalizarCompraClicked(req, res) {
      carrito.innerHTML = "";
      swal("Compra Realizada", "Gracias!", "success");
    } 
    
  });
});
