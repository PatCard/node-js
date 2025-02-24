const fs = require('fs');

// Leer un archivo

console.log("Antes de leer el archivo...");
fs.readFile('indexw.html', 'utf-8', (err, contenido) => {
    if (err) {
        //console.log(err);
        throw err; // Finaliza la ejecucion
    } else {
        console.log(contenido);
    }
    console.log("Mensaje....")
});
console.log("Despues de leer el archivo...");



// Cambiar el nombre de un archivo
fs.rename('index.html', 'main.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});

console.log("Despues de cambiar el nombre del archivo");


// Agregar contenido al final de un archivo
fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo actualizado.');
}); 


console.log("Despues de agregar contenido al archivo");

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
  if (err) {
      throw err;
  }
  console.log('Contenido reemplazado');
});

console.log("Despues de reemplazar el contenido del archivo")

// Eliminar archivos
fs.unlink('main.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo eliminado.');
});

console.log("Despues de eliminar el archivo ");