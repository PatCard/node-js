const fs = require('fs');
// METODOS SINCRONOS
// Leer un archivo

console.log("Antes de leer el archivo...- 1 sync");
const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);
console.log("Despues de leer el archivo... - 2 Sync");



// Cambiar el nombre de un archivo
try {
  fs.renameSync('index.html', 'main.html');
  console.log('Nombre cambiado exitosamente. - Sync');

  // Validar si main.html existe después del cambio
  if (fs.existsSync('main.html')) {
      console.log('Validación exitosa: main.html existe.');
  } else {
      console.log('Error: main.html no fue encontrado.');
  }
} catch (err) {
  console.error('Error al cambiar el nombre del archivo:', err);
}

console.log("Despues de cambiar el nombre del archivo - 3 sync");


// Agregar contenido al final de un archivo
fs.appendFileSync('index.html', '<p>Hola</p>', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo actualizado. - 3 aSync');
}); 


console.log("Despues de agregar contenido al archivo - 4 sync");

fs.writeFileSync('index.html', 'Contenido nuevo', (err) => {
  if (err) {
      throw err;
  }
  console.log('Contenido reemplazado - 4 aSync');
});

console.log("Despues de reemplazar el contenido del archivo - 5 sync")

// Eliminar archivos
fs.unlinkSync('main.html', (err) => {
  if (err) {
      throw err;
  }
  console.log('Archivo eliminado. - 5s aSync');
});

console.log("Despues de eliminar el archivo - 6 sync");
