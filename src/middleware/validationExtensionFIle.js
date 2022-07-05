const validationExtensionFile = (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  next();
};

module.exports = validationExtensionFile;
