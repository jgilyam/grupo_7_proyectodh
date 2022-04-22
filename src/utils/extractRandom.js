const extractRandom = (unArray, cant, filtro) => {
  let result = [];
  let arrayFilter = unArray.filter((product) => product.category == filtro);
  let aleatorio = Math.floor(Math.random() * arrayFilter.length);

  for (let index = 0; index < cant; index++) {
    result.push(arrayFilter[aleatorio]);
    aleatorio = Math.floor(Math.random() * arrayFilter.length);
  }
  return result;
};

module.exports = extractRandom;
