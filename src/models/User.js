const fs = require("fs");

const User = {
  fileName: "./data/users.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },
  findAll: function () {
    return this.getData;
  },
};
