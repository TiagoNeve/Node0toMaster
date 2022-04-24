const chalk = require('chalk')

const nota = 6;

if(nota <= 7) {
  console.log(chalk.bgRed('Você precisa fazer a prova de recuperação'));
  
} else {
  console.log(chalk.green.bold("Parabéns! Você está aprovado!"));
}
