// Update with your config settings.

module.exports = {

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './db/testdb.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
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
