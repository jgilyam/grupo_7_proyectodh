const { body } = require("express-validator");

//* VALIDACIONES
const validations = [
  body("first_name").notEmpty().withMessage("Debe escribir el nombre").isLength({ min: 2 }),
  body("last_name").notEmpty().withMessage("Debe escribir el apellido").isLength({ min: 2 }),
 
  body("email")
    .notEmpty()
    .withMessage("Debe escribir su email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo electronico valido"),
  body("password").notEmpty().withMessage("Debe escirbir su contraseña").isLength({ min: 8 }),
  body("passwordRepit").notEmpty().withMessage("Debe escirbir su contraseña").isLength({ min: 8 }),
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
