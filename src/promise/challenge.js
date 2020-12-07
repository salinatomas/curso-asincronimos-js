const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then(data => {
    console.log(data.info.count); 
    return fetchData(`${API}${data.results[0].id}`) // Esto es un return de una nueva petición
    // 671
  })
  .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url)
    // Rick Sanchez
  })
  .then(data => {
    console.log(data.dimension);
    // Dimension C-137
  }) 
  .catch(err => {
    console.error(err);
  })