window.addEventListener("load", function () {
  let formulario = document.querySelector("#form-product-edit");

  formulario.addEventListener("submit", function (e) {
    let errores = [];
    let campoName = document.querySelector("#name");
    let campoDescripcion = document.querySelector("#descripcion-ta");
    let campoImagen = document.querySelector("#imagen");

    if (campoName.value.trim() == "") {
      console.log(campoName);
      errores.push("El campo de nombre debe estar completo");
    } else if (campoName.value.length <= 4) {
      errores.push("Debe tener almenos 5 caracteres");
    }

    if (campoDescripcion.value.trim() <= 20) {
      console.log("error2");
      errores.push("Debe tener almenos 20 caracteres");
    }

    if (!campoImagen.value == /.(jpg)|(gif)|(png)|(jpeg)$/) {
      errores.push("Debe ser formato valido(JPG, JPEG, PNG, GIF)");
    }
    console.log(errores);

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
