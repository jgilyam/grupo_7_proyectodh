window.addEventListener("load", function () {
  buttom = document.querySelector(".btn-enviar-formulario");

  let formulario = document.querySelector(".form-login");

  let campoEmail = document.querySelector("#email");
  let dangerEmail = document.querySelector("#danger-email");
  let campoPassword = document.querySelector("input.password");
  let dangerPassword = document.querySelector("#danger-password");

  buttom.addEventListener("click", function (e) {
    e.preventDefault();

    let errores = {};

    if (email.value == "") {
      errores.mail = "El campo del email esta vacio";
    } else if (!email.checkValidity()) {
      errores.mail = "Tiene que ser un e-mail valido";
    }

    if (password.value.length < 8) {
      errores.contrasena = "Deberá tener al menos 8 caracteres";
    }

    if (Object.keys(errores).length) {
      dangerPassword.innerHTML = errores.contrasena ? errores.contrasena : "";
      dangerEmail.innerHTML = errores.mail ? errores.mail : "";
    } else {
      formulario.submit();
    }
  });
});
