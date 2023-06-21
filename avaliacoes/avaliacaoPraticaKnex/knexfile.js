module.exports = {
      client: 'sqlite3',
      connection: {
        filename: './SCA.db'
      },
      migrations: {
          directory: "./migrations"
      },
      useNullAsDefault: false
}