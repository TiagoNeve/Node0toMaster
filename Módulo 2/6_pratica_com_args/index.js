const minimist = require("minimist");

// Ele pega os argumentas que são listas e transforma em objetos, para poder pegar os valores com dot manipulation
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args.nome;

console.log(nome);

// Externo 


// Interno
const soma = require('./soma').soma;

const valor1 = parseInt( args.valor1 );
const valor2 = parseInt( args.valor2 );

soma(valor1, valor2);