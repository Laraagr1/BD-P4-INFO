/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('Projeto', function(table) {
      table.increments('id_projeto');
      table.string('nome_projeto').notNullable().unique();;
      table.string('descricao').notNullable()
      table.string('prazo').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Projeto')
};
