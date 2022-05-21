const recordameMiddleware = (req, res, next) => {
  if (
    req.cookies.recordame != undefined &&
    req.session.usuarioLogueado == undefined
  ) {
    req.session.usuarioLogueado = usuarioaLoguearse;
  }
  next();
};

module.exports = recordameMiddleware;
