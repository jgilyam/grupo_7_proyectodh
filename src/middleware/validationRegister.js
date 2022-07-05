const { body, check } = require("express-validator");
const path = require("path");

const MIN_LENGTH = 2;
const MIN_LENGTH_MESSAGE = "Mìnimo 2 caracteres";
const MIN_LENGTH_PASSWORD = 8;
const MIN_LENGTH_MESSAGE_PASSWORD = "Mìnimo 8 caracteres";

let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

//* VALIDACIONES
const validations = [
  body("first_name")
    .notEmpty()
    .withMessage("Debe escribir el nombre")
    .isLength({ min: MIN_LENGTH })
    .withMessage(MIN_LENGTH_MESSAGE),

  body("last_name")
    .notEmpty()
    .withMessage("Debe escribir el apellido")
    .isLength({ min: MIN_LENGTH })
    .withMessage(MIN_LENGTH_MESSAGE),

  body("email")
    .notEmpty()
    .withMessage("Debe escribir su email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo electronico valido"),

  body("password")
    .notEmpty()
    .withMessage("Debe escirbir su contraseña")
    .isLength({ min: MIN_LENGTH_PASSWORD })
    .withMessage(MIN_LENGTH_MESSAGE_PASSWORD),

  body("passwordRepit")
    .notEmpty()
    .withMessage("Debe escirbir su contraseña")
    .isLength({ min: MIN_LENGTH_PASSWORD })
    .withMessage(MIN_LENGTH_MESSAGE_PASSWORD),
  body("image")
    .custom((value) => {
      let extension = path.extname(value);
      console.log(extension);
      if (extension == ".png") {
        return true;
      } else {
        return false;
      }
    })
    .withMessage("extensiones validas jpg, jpeg, png, gif"),

  /*body("image").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif"];
  
      if (!file) {
        throw new Error("Debes subir una imagen");
      } else {
        let fileExtensions = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtensions)) {
          throw new Error(
            `Las extensiones permitidas son ${acceptedExtensions.join(",")}`
          );
        }
      }
      return true;
    }),*/
];

module.exports = validations;
