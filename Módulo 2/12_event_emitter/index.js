const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('Durante');
})

console.log("Antes");

eventEmitter.emit('start');

console.log('Depois');

// É possível criar eventos de Log's para gerar log quando ocorrer algum erro, por exemplo. Adicionar em um arquivo de logs e 
// mandar por email para o desenvolvedor do programa e tudo mais.
