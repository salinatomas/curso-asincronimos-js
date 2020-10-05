// The "readyState" property holds the status of the XMLHttpRequest. (200 OK, 403 Forbidden, 404 Page not found)
// The onreadystatechange property defines a function to be executed when the readyState changes.
// The status property and the statusText property holds the status of the XMLHttpRequest object.

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest()
  xhttp.open('GET', url_api, true) // Qué queremos hacer, la url, activar el asincronismo (ya viene por defecto true)
  // ^ Estamos abriendo una conexion por medio de GET 

  xhttp.onreadystatechange = function (event) { // Es como un addEventListener
    if(xhttp.readyState === 4) { // 4 = ha sido completado (4: request finished and response is ready)
      if(xhttp.status === 200) { // 200, 403, 404
        callback(null, JSON.parse(xhttp.responseText)) // Hay que transformarlo a formato JSON
      } else {
        const error = new Error(`Error ${url_api}`)
        return callback(error, null)
      }
    }
  }
  xhttp.send() // Enviar la solicitud al servidor
}

fetchData(API, (error1, data1) => { // callback(null, JSON.parse(xhttp.responseText))
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
}) 
// Callback hell

console.log('¿¿¿Que está pasando???');

fetchData(API, (error1, data1) => {
  if (error1) return console.error(error1);
  console.log(data1.info);
})