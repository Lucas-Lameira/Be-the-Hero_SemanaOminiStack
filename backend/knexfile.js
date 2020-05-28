// Update with your config settings.
//Configurações de acesso ao banco de dados
module.exports = {

  //ambiente usado enquanto o projeto esta em desenvolvimento
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite' //arquivo que vai armazenar os dados
    },
    migrations: {
      directory: './src/database/migrations' //é onde os arquivos de migration serao armazenados
    },
    useNullAsDefault: true,
  },

  //ambiente usado para produção em time de desenvolvimento
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  //ambiente usado quando o projeto esta online
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
