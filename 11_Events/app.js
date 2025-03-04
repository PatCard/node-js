/*const EventEmitter = require('events');

console.log(EventEmitter);*/
// EventHandler
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra: $${total}.`);
    console.log(`Número de productos: ${numProductos}.`);
});

emisorProductos.emit('compra', 500, 5);


