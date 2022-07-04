window.addEventListener("load", function () {
  let button = document.querySelector("#btnSubmit");

  let formulario = document.querySelector("#form");

  let first_name = document.querySelector("#first_name");
  let dangerFirstName = document.querySelector("#danger-firstName");
  let last_name = document.querySelector("#last_name");
  let dangerLastName = document.querySelector("#danger-lastName");
  let image = document.querySelector("#image");
  let dangerImage = document.querySelector("#danger-image");
  let email = document.querySelector("#email");
  let dangerEmail = document.querySelector("#danger-email");
  let password = document.querySelector("#password");
  let password2 = document.querySelector("#passwordRepit");
  let dangerPassword = document.querySelector("#danger-password");
  let dangerPassword2 = document.querySelector("#danger-password2");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    let pathImage = image.value;
    let validacionImage = /(.jpg|.jpeg|.png|.gif)$/i;
    let errores = {};

    if (first_name.value.length < 2) {
      errores.nombre = "Deberá tener al menos 2 caracteres";
    }

    if (last_name.value.length < 2) {
      errores.apellido = "Deberá tener al menos 2 caracteres";
    }

    if (pathImage == "") {
      dangerImage.innerHTML = "";
    } else if (!validacionImage.exec(pathImage)) {
      errores.image = "Formatos permitidos: JPG, JPEG, PNG, GIF";
    }

    if (email.value == "") {
      errores.mail = "El campo del email esta vacio";
    } else if (!email.checkValidity()) {
      errores.mail = "Tiene que ser un e-mail valido";
    }

    if (password.value.length < 8) {
      errores.contrasena = "Deberá tener al menos 8 caracteres";
    }

    if (password2.value.length < 8) {
      errores.contrasena2 = "Deberá tener al menos 8 caracteres";
    }

    if (Object.keys(errores).length) {
      dangerFirstName.innerHTML = errores.nombre ? errores.nombre : "";
      dangerLastName.innerHTML = errores.apellido ? errores.apellido : "";
      dangerPassword.innerHTML = errores.contrasena ? errores.contrasena : "";
      dangerPassword2.innerHTML = errores.contrasena2
        ? errores.contrasena2
        : "";
      dangerEmail.innerHTML = errores.mail ? errores.mail : "";
      dangerImage.innerHTML = errores.image ? errores.image : "";
    } else {
      formulario.submit();
    }
  });
});
