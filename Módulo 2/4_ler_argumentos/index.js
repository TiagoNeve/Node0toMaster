// nome

// Acessa os argumentos
console.log(process.argv);

// Retira os dois primeiros valores do argumentos e retorna o restante
const args = process.argv.slice(2);

console.log(args);

// Acessa o primeiro argumento depois do slice, splita o primeiro separando pelo = e pega o valor do argumento
const nome = args[0].split("=")[1];

console.log(nome);

const idade = args[1].split("=")[1];

console.log(idade);

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`);