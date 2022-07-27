window.addEventListener("load", function () {
  const addbotton = document.querySelectorAll("#button-product");
  /* console.log("🚀 ~ file: carrito.js ~ line 4 ~ addbotton", addbotton); */
  const shoppingCardItemContainer = document.querySelector(
    ".container-cards-carrito"
  );

  addbotton.forEach((addToCardButton) => {
    addToCardButton.addEventListener("click", addToCardClick);
  });
  let cartTotales = [];
  if (JSON.parse(localStorage.getItem("Productos Guardados")) == undefined) {
    localStorage.setItem("Productos Guardados", JSON.stringify(cartTotales));
  }
  const productosEnCarrito = JSON.parse(
    localStorage.getItem("Productos Guardados")
  );

  function addToCardClick(event) {
    event.preventDefault();
    const button = event.target;
    /* console.log(
        "🚀 ~ file: carrito.js ~ line 13 ~ addToCardClick ~ button",
        button.id.slice(15, button.id.length)
        ); */
    const itemCard = button.closest("#main-recomend-product");
    /* console.log("🚀 ~ file: carrito.js ~ line 11 ~ addToCardClick ~ itemCard", itemCard)
     */
    const titleCart = itemCard.querySelector(".titleCard").textContent;
    const priceCart = itemCard.querySelector(".detail-price2").textContent;
    const imgCart = itemCard.querySelector(".img-detail").src;
    const value = itemCard.querySelector("#button-product").value;
    /* addItemToCard(titleCart, priceCart, imgCart); */

    const cartGuardada = {
      title: titleCart,
      price: priceCart,
      img: imgCart,
      cantidad: 1,
      value: value,
    };

    console.log(
      "🚀 ~ file: carrito.js ~ line 31 ~ addToCardClick ~ cartGuardada",
      cartGuardada
    );
    /*   cartTotales.push(cartGuardada); */

    /* console.log(
      "🚀 ~ file: carrito.js ~ line 46 ~ addToCardClick ~ productosEnCarrito",
      productosEnCarrito
      ); */

    if (productosEnCarrito) {
      console.log(
        "🚀 ~ file: carrito.js ~ line 34 ~ addToCardClick ~ productosEnCarrito",
        productosEnCarrito
      );

      let idToupdate = productosEnCarrito.findIndex((producto) => {
        return producto.value == cartGuardada.value;
      });
      if (idToupdate == -1) {
        productosEnCarrito.push(cartGuardada);
      } else {
        productosEnCarrito[idToupdate].cantidad++;
      }
      cartTotales = [...productosEnCarrito];
      localStorage.setItem("Productos Guardados", JSON.stringify(cartTotales));
    }
  }
});
