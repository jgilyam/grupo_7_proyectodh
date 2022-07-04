window.addEventListener("load", function () {
  let formulario = document.querySelector("#form-create");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoName = document.querySelector("#name");
    let campoDescripcion = document.querySelector("#description");
    let campoImagen = document.querySelector("#image");

    if (campoName.value == "") {
      alert("El campo de nombre debe estar completo");
    } else if (campoName >= 5) {
      alert("Debe tener almenos 5 caracteres");
    }

    if (campoDescripcion >= 20) {
      alert("Debe tener almenos 20 caracteres");
    }

    if (!campoImagen.value(/.(jpg)|(gif)|(png)|(jpeg)$/)) {
      alert("Debe formato valido(JPG, JPEG, PNG, GIF)");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      for (let index = 0; index < errores.length; index++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
