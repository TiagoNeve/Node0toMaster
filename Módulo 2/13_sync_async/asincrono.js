const fs = require('fs')

console.log('Início');

fs.writeFile('arquivo.txt', 'Alo', (err) => {
  setTimeout(() => {
    console.log('Arquivo criado!');
  }, 1000)
})

console.log('Fim');

// É possível ficar gerando log's de forma assíncrona e isso não irá impactar o usuário no final