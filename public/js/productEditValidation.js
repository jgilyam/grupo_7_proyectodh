window.addEventListener("load", function () {
  let button = document.querySelector("#btnSubmit");
  let formulario = document.querySelector("#form-product-edit");

  let campoName = document.querySelector("#name");
  let dangerName = document.querySelector("#danger-name");
  let campoDescripcion = document.querySelector("#descripcion-ta");
  let dangerDescription = document.querySelector("#danger-description");
  let campoImagen = document.querySelector("#imagen");
  let dangerImage = document.querySelector("#danger-image");
  let campoPrecio = document.querySelector("#price");
  let dangerPrice = document.querySelector("#danger-image");
  let campoStock = document.querySelector("#stock");
  let dangerStock = document.querySelector("#danger-stock");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    let pathImage = campoImagen.value;
    let validacionImage = /(.jpg|.jpeg|.png|.gif)$/i;
    let errores = {};

    if (campoName.value.trim() == "") {
      console.log(campoName);
      errores.nombre = "El campo de nombre debe estar completo";
    } else if (campoName.value.length <= 4) {
      errores.nombre = "Debe tener almenos 5 caracteres";
    }

    if (campoDescripcion.value.trim() <= 20) {
      errores.descrpicion = "Debe tener almenos 20 caracteres";
    }

    if (!campoImagen.value == /.(jpg)|(gif)|(png)|(jpeg)$/) {
      errores.image = "Debe ser formato valido(JPG, JPEG, PNG, GIF)";
    }

    if (campoPrecio.value < 100) {
      errores.precio = "Debe tener precio";
    }
    if (campoStock.value < 1) {
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
