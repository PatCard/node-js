const fs = require('fs');
// METODOS ASINCRONOS
// Leer un archivo

console.log("Antes de leer el archivo...- 1 sync");
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        //console.log(err);
        throw err; // Finaliza la ejecucion
    } else {
        console.log(contenido);
    }
    console.log("Mensaje.... - 1 aSync")
});
console.log("Despues de leer el archivo... - 2 Sync");



// Cambiar el nombre de un archivo
fs.rename('index.html', 'main.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Nombre cambiado exitosamente. - 2 aSync');
});

console.log("Despues de cambiar el nombre del archivo - 3 sync");


// Agregar contenido al final de un archivo
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo actualizado. - 3 aSync');
}); 


console.log("Despues de agregar contenido al archivo - 4 sync");

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err) {
      throw err;
  }
  console.log('Contenido reemplazado - 4 aSync');
});

console.log("Despues de reemplazar el contenido del archivo - 5 sync")

// Eliminar archivos
fs.unlink('main.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo eliminado. - 5s aSync');
});

console.log("Despues de eliminar el archivo - 6 sync");
