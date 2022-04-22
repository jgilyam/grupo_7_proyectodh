const paginar = (unArray, cant, page, filtro) => {
  let result = [];
  let arrayFilter = unArray.filter((product) => product.category == filtro);
  result = arrayFilter.slice(page, cant + page);
  return result;
};
module.exports = paginar;
