// setTimeout
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

//setTimeout(funcion, retraso, argumentos, ...);
setTimeout(mostrarTema, 3000, 'Node.js');


function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 5000, 5, 6);



// setImmediate
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Python');
console.log('Después de setImmediate()');

/*function mostrarTema(tema) {
    console.log(`Estoy aprendiendo setInterval en ${tema}`);
  }
  
setInterval(mostrarTema, 1500, 'Node.js');*/


function sumar(a, b) {
    console.log(a + b);
  }

setInterval(sumar, 1500, 3, 4);

