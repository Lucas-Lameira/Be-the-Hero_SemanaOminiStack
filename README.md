# Be the Hero SemanaOminiStack
Refazendo o projeto da semana omnnistack

# API restfull
talk about it

# Template engine


# instalaçoes 
-chocolatey     
-cinst nodejs
-visual studio code
-insomnia
# npm - 
-npm init -y; Criação do projeto com o node com o arquivo package.json.
-npm install express.
-npm install nodemon -D.
-npm install knex.
-npm install sqlite3.
-npm install cors.
-npm install react-icons.
-npm install react-router-dom.
-npm install axios.
-npm install -g expo-cli.
-npm install -g yarn
-npm install @react-navigation/native
-npm install @react-navigation/stack
-npm install intl

0# expo
-expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
-expo install expo-constants
-expo install expo-mail-composer

# npx - executa um pacote externo sem instala-lo
npx create-react-app
npx kenx init
npx knex
    npx knex migrate:make create_entidade
    npx knex migrate:latest
    npx knex migrate:rollback

# Back-end
-Regras de negócio;
-Conexão banco de dados;
-Envio de e-mail;
-Comunicação com webservices;
-Autenticação do usuário;
-Criptografia e segurança;

# Front-end

# FrameWorks
-Express

# Abordagem Tradicional
A cada requisição o servidor retorna o conteúdo completo da página, contendo o html e o css. Aplicativos mobile ou serviços externos nao interpretam html.

Na requisição de uma listagem de usuários, por exemplo, o navegador, por meio de uma página, faz uma requisição para o backend. Ao receber a requisição do navegador, o backend acessa um banco de dados, monta um html com os dados que foram solicitados, contendo html, css e js. portanto toda a parte visual é retornada.

# Abordagem SPA - Single Page Aplication
Na abordagem de SPA, as requisições retornam aprenas os dados como resposta, a possibilitando que o front-end preencha as informações em tela.
A pagina nao precisa ser recarregada, otimizando a performance e possibilitando mais front-ends.

O retorno pode ser um array, por exemplo, contendo a listagem de algo.

Os dados em json transitam entre backend, aplicação web e aplicação mobile.

# Pastas src
Todo código desenvolvido

# Pasta controllers (padrão MVC)
Um controller criado para cada entidade

# Pasta Pages
Cada página da aplicação é um componente React
