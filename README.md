
# E-commerce API

Este projeto é uma API de e-commerce desenvolvida utilizando Node.js, Express, MongoDB, e TypeScript, seguindo o padrão arquitetural MVC (Model-View-Controller). A API é projetada para gerenciar produtos, usuários, pedidos, e pagamentos utilizando a integração com a API do Stripe.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js, utilizado para gerenciar rotas e middlewares.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao código.
- **JWT (JSON Web Token)**: Utilizado para autenticação e autorização.
- **Stripe API**: Integração para gerenciamento de pagamentos.
- **MVC Pattern**: Padrão arquitetural que separa a aplicação em três componentes principais: Model, View e Controller.

## Funcionalidades

- **Gerenciamento de Produtos**: CRUD (Create, Read, Update, Delete) para produtos.
- **Autenticação de Usuários**: Registro e login utilizando JWT.
- **Gerenciamento de Pedidos**: Criação e listagem de pedidos dos usuários.
- **Pagamentos**: Processamento de pagamentos utilizando a API do Stripe.

## Configuração e Execução

### Pré-requisitos

- **Node.js** (versão 20.x ou superior)
- **MongoDB** (local ou utilizando MongoDB Atlas)
- **Conta no Stripe** para integração com pagamentos

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/ecommerce-api.git
   cd ecommerce-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:5000`.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com `ts-node-dev`.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm start`: Inicia o servidor em modo de produção.

## Documentação da API

A documentação da API será criada utilizando o **Postman**. Após a finalização do projeto, ela estará disponível em formato JSON para fácil importação no Postman.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
