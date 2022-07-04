window.addEventListener("load", function () {
  let formulario = document.querySelector(".form-login");
  //   let buttom = document.querySelector(".btn-enviar-formulario");

  formulario.addEventListener("submit", function (e) {
    let errores = [];
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("input.password");

    if (campoEmail.value == "") {
      errores.push("El campo de nombre debe estar completo");
    } else if (
      campoEmail.value != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test
    ) {
      errores.push("Debe ser un email valido ");
    }

    if (campoPassword == "") {
      errores.push("La contraseña es obligatoria");
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
