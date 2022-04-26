# Módulo 3 - Node Core Modules

## Sobre os Core Modules
1. http: Módulo para criar servidores HTTP
2. path: extrair informações de paths 
3. fs: File system, leitura e escrita de arquivos;
4. url: Módulo para trabalhar com URLs.

## O módulo http
1. Podemos criar um servidor HTTP com este módulo
2. Receber uma requisição e enviar código HTML como resposta.
3. Utilizar alguns métodos como createServer, para criação do servidor.
4. Também listen, para determinar a porta.

## Parando o serviço
1. Alguns serviço ocupam a aba do terminal
2. Para parar a execução, basta aperta ctrl + c
3. Isso é útil quando há um problema no código também.

## Retornando HTML com http
1. Para retornar é preciso implementar alguns recursos
2. Podemos adicionar um status code no retorno, com a propriedade statusCode
3. Mudar os headers para text/html
4. Retornar o HTML pelo método end do http.

## Módulo url
1. Url serve para decompor uma URL que passamos para o método parse.
2. Podemos resgatar: host, path, serach, query
3. A partir destas informações podemos alterar a lógica do nosso código.

## Unindo os módulos http e url
1. Podemos trabalhar com estes módulos juntos e ter um resultado interessante
2. com o http criamos nosso server e alteramos a resposta baseado na URL acessada
3. Com url processamos os parâmetros que vem pela query string, para alterar a lógica do http

## Módulo fs
1. fs serve para trabalhar com arquivos e diretórios.
2. Podemos ler e escrever em arquivos.
3. Uma utilização interessante: logs do sistema.

## Escrevendo em arquivos
1. Podemos criar e escrever em arquivos também, utilizando o método writeFile.
2. Esta escrita pode estar associada a um conjunto de operações.
3. Como o envio de informações de um usuário

## Atualizando um arquivo
1. writeFile substitui tudo que está em um arquivo
2. Para atualizar então utilizar o appendFile.

## Removendo um arquivo
1. Remover um arquivo com o fs utilizamos o método unlink
2. Precisamos passar o arquivo omo parâmetro
3. Temos a possibilidade de checar se houve algum erro, a partir da callback.

## Renomeando um arquivo
1. Módulo fs, método rename
2. Precisamos passar o arquivo como parâmetro e novo nome
3. Podemos verificar algum erro via callback
