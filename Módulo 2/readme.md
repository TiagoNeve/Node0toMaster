# Módulo 2 - Fundamentos de Node.js

## Erros na lib do chalk
1. instale a versão 4.1.2
> npm install chalk@4.1.2

## O que são módulos
1. São scripts reaproveitáveis, que utilizamos bastante programando em Node.
2. São dividios em três categorias;
* 2.1 Internos -> Módulos que nós desenvolvemos.
* 2.2 Core Modeuls -> Módulos que vem com o Node.js.
* 2.3 Externos -> Módulos que istalamos via npm.

## Módulos internos
1. São criados nas pastas do nosso projeto
2. Precisamos exportar o módulo
3. Podemos utilizar a instrução module.exports.
4. Importar onde precisamos utilizar.
5. Para importar basta utilizar a instrução require.

## Export e Import
1. É possível utilizar o export e import do ES6
2. Funcionalidades mais modernas de importação e exportação
3. Para isso, precisamos de arquivos com extensão .mjs
4. então podemos exportar uma com export default.
5. e importar com import, uma única função, caso seja necessário.

## Core Modules
1. Temos diversos Core Modules, que são os que vem prontos para serem utilizados
2. Resolvem diversos problemas, como: Trabalhar com arquivos e diretórios, servir aplicações e etc.
3. Precisamos importar estes módulos no projeto para poder utilizar

## Ler argumentos 
1. Node permite o envio de argumentos via linha de comando
2. Passamos eles após a instrução de execução do arquivo.
3. Os argumentos ficam em um array chamado: process.argv
4. Podemos fazer um loop e resgatar os valores enviados.

## Módulos externos
1. Módulos externos podem ser instalados via npm.
2. Para isso, precisamos inicializar o npm no projeto, com: npm init
3. A partir desse ponto os módulos ficam mapeados e podemos instalar módulos
4. Esses módulos são salvos na pasta node_modules
5. Podemos instalar com o comando 
> npm install <nome>

## Something pratice with arguments
1. We can use args to apply in our logic
2. We save the values in variables, because we can use in other moment.

## Explorando o console
1. Temos uma grande variedade de métodos no console.
2. Podemos imprimir mais de uma variável por vez.
3. Inserir variáveis entre strings.
4. Há um método para limpar as mensagens de console.

## Melhorando a visualização
1. Há um módulo externo chamado chalk
2. Ele pode deixar a visualização do console mais agradável
3. Fazendo com que seja possível expressar um feedback com base em cores.

## Lendo entrada de dados
1. Podemos ler dados do usuário com o módulo readline, um Core Module.
2. Utilizamos o método question, que faz uma pergunta a ser respondida pelo usuário.
3. Depois podemos processar a resposta e entregar um retorno.

## Melhorando a leitura de dados
1. Há um módulo externo chamado inquirer
2. Que é muito mais completo para resgatar e lidade com o input do usuário.
3. Além disso, é baseado em Promises, o que torna sua utilização mais simples.

## Event Loop
1. O Event Loop é um recurso da arquitetura do Node.
2. O Node.js executa uma linha por vez, e de cima para baixo do código escrito
3. Ajuda a evitar problemas de concorrência.
4. Precisamos apenas cuidar com bloqueios no fluxo, como loops infinitos

## Event Emitter
1. O Event Emitter se comporta como os eventos do navegador.
2. Podemos ativar um código em alguns pontos da aplicação, como o início.
3. É um Core Module chamado events.
4. Precisamos instanciar a classe EventEmitter que vem deste módulo.