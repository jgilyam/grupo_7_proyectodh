window.addEventListener("load", function () {
  let formulario = document.querySelector(".form-login");
  //   let buttom = document.querySelector(".btn-enviar-formulario");

  formulario.addEventListener("submit", function (e) {
    let errores = [];
    let campoEmail = document.querySelector("#email");
    let campoPassword = document.querySelector("input.password");

    if (campoEmail.value == "") {
      errores.push("El campo de email debe estar completo");
    } else if (campoEmail.value.validity.typeMismatch) {
      errores.push("Debe ser un email valido ");
    }

    if (campoPassword == "") {
      errores.push("La contraseña es obligatoria");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      alert("La validación fué exitosa");
      form.submit();
    }
  });
});
