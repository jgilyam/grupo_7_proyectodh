window.addEventListener("load", function () {
  let formulario = document.querySelector(".form");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoName = document.querySelector("#name");
    let campoDescripcion = document.querySelector("#description-ta");
    let campoImagen = document.querySelector("#image");

    if (campoName.value.trim() == "") {
      errores.push("El campo de nombre debe estar completo");
    } else if (campoName.value.length <= 5) {
      errores.push("Debe tener almenos 5 caracteres");
    }

    if (campoDescripcion.value.trim() <= 20) {
      errores.push("Debe tener almenos 20 caracteres");
    }

    if (!campoImagen.value == /.(jpg)|(gif)|(png)|(jpeg)$/) {
      errores.push("Debe formato valido(JPG, JPEG, PNG, GIF)");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
    console.log(errores);
  });
});
