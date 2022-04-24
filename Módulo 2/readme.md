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