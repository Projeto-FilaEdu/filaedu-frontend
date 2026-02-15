# FilaEdu Frontend

Aplicação web do sistema FilaEdu, responsável pela interface com o usuário para visualização das filas, registros e estatísticas fornecidas pela API REST.

## Descrição

Este projeto corresponde ao frontend web do FilaEdu, consumindo os endpoints do backend para exibir dados em tempo real, relatórios e informações sobre o andamento das filas de forma clara e intuitiva.

## Tecnologias

- Angular
- TypeScript
- HTML5 / CSS3
- Node.js
- npm

## Versões utilizadas

Este projeto foi desenvolvido e testado utilizando as seguintes versões:

- Angular CLI: 17.3.17  
- Node.js: 20.20.0  

Recomenda-se utilizar exatamente essas versões para evitar problemas de compatibilidade.

## Pré-requisitos

Antes de rodar o projeto localmente, certifique-se de ter instalado:

- Node.js
- npm
- Git

Verifique no terminal:

    node -v
    npm -v
    ng version

## Clonando o repositório

    git clone https://github.com/Projeto-FilaEdu/filaedu-frontend.git

## Instalação das dependências

Acesse a pasta do projeto e execute:

    npm install

Esse comando irá baixar todas as dependências definidas no projeto.

## Configuração da API Backend

Certifique-se de que o backend esteja rodando localmente (por padrão em `http://localhost:8080`) 

## Importando o projeto na IDE

Você pode utilizar qualquer editor compatível com Angular, como o VS Code.

No VS Code:

1. Abra o VS Code  
2. Clique em **File > Open Folder**  
3. Selecione a pasta do projeto (`filaedu-frontend`)  
4. Aguarde o carregamento das dependências  

## Executando a aplicação

No terminal, dentro da pasta do projeto, execute:

    npm start

ou

    ng serve

A aplicação estará disponível em:

    http://localhost:4200

## Login no sistema

Para acessar o sistema, utilize as credenciais padrão:

- Login: admin  
- Senha: admin  

Essas credenciais são utilizadas para fins de teste e demonstração do sistema.

## Integração

Este frontend consome os dados fornecidos por:

- FilaEdu Backend (Spring Boot API REST)

E é parte integrante do sistema FilaEdu, junto com:

- FilaEdu Desktop (Java)
