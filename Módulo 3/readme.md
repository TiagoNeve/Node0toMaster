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
