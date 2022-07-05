window.addEventListener("load", function () {
  let button = document.querySelector("#btnSubmit");
  let formulario = document.querySelector(".form");

  let campoName = document.querySelector("#name");
  let dangerName = document.querySelector("#danger-name");
  let campoDescripcion = document.querySelector("#description-ta");
  let dangerDescription = document.querySelector("#danger-description");
  let campoImagen = document.querySelector("#image");
  let dangerImage = document.querySelector("#danger-image");
  let campoPrecio = document.querySelector("#price");
  let dangerPrice = document.querySelector("#danger-price");
  let campoDescuento = document.querySelector("#descuento");
  let dangerDiscount = document.querySelector("#danger-discount");
  let campoStock = document.querySelector("#stock");
  let dangerStock = document.querySelector("#danger-stock");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    let pathImage = campoImagen.value;
    let validacionImage = /(.jpg|.jpeg|.png|.gif)$/i;

    let errores = {};

    if (campoName.value.trim() == "") {
      errores.nombre = "El campo de nombre debe estar completo";
    } else if (campoName.value.length <= 5) {
      errores.nombre = "Debe tener almenos 5 caracteres";
    }

    if (campoDescripcion.value.trim() <= 20) {
      errores.descripcion = "Debe tener almenos 20 caracteres";
    }

    if (pathImage == "") {
      dangerImage.innerHTML = "";
    } else if (!validacionImage.exec(pathImage)) {
      errores.image = "Formatos permitidos: JPG, JPEG, PNG, GIF";
    }
    if (campoPrecio.value < 100) {
      errores.precio = "Debe tener precio";
    }
    console.log(campoPrecio);
    if ((campoStock.value = "")) {
      errores.stock = "Debe indicar el stock";
    }
    if (Object.keys(errores).length) {
      dangerName.innerHTML = errores.nombre ? errores.nombre : "";
      dangerDescription.innerHTML = errores.descripcion
        ? errores.descripcion
        : "";
      dangerImage.innerHTML = errores.image ? errores.image : "";
      dangerPrice.innerHTML = errores.precio ? errores.precio : "";
      dangerStock.innerHTML = errores.stock ? errores.stock : "";
    } else {
      formulario.submit();
    }
  });
});
